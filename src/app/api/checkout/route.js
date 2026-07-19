import { NextResponse } from "next/server";
import Stripe from "stripe";
// ⬇️ adjust this import path if your priceIds file lives elsewhere
import { priceIds } from "../../lib/priceIds";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

function isLiveMode() {
  // auto-detect from publishable key to avoid mode drift
  const pk = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "";
  return pk.startsWith("pk_live_");
}

function resolvePriceId(input) {
  // Case 1: already a Stripe price id
  if (typeof input === "string" && input.startsWith("price_")) return input;

  const live = isLiveMode();

  // Case 2: input is a slug/key present in priceIds.js
  if (typeof input === "string") {
    const mapped = priceIds[input]?.[live ? "live" : "test"];
    if (mapped) return mapped;
  }

  // Case 3: input is the full { test, live } object from priceIds.js
  if (input && typeof input === "object") {
    const mapped = input[live ? "live" : "test"];
    if (mapped) return mapped;
  }

  throw new Error(
    "Missing priceId (send a Stripe price_..., a slug/key from priceIds.js, or the {test,live} object)"
  );
}

export async function POST(req) {
  try {
    const body = await req.json();
    // Support either { items: [...] } or { line_items: [...] }
    const items = body.items || body.line_items || [];
    const origin = req.headers.get("origin");

    if (!process.env.STRIPE_SECRET_KEY) throw new Error("Missing STRIPE_SECRET_KEY");
    if (!origin) throw new Error("Missing request origin");
    if (!Array.isArray(items) || items.length === 0) throw new Error("No items");

    // Debug once if you need to see what the client is sending:
    // console.log("CHECKOUT_DEBUG items:", JSON.stringify(items, null, 2));

    const lineItems = items.map((it) => {
      const pid = resolvePriceId(it.priceId);
      const qty = Math.max(1, Number(it.quantity || 1));
      return { price: pid, quantity: qty };
    });

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,

      // Required because these are physical products.
      shipping_address_collection: {
        allowed_countries: ["US"],
      },

      automatic_tax: { enabled: true },

      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/canceled`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("CHECKOUT_ERROR:", {
      message: err.message,
      type: err.type,
      code: err.code,
    });
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
