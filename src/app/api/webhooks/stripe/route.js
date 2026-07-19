import stripe from "../../../../lib/stripe";
import { processWebsiteOrder } from "../../../../services/orderService";

export const runtime = "nodejs";

export async function POST(req) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    console.error("WEBHOOK_CONFIG_ERROR: Missing STRIPE_WEBHOOK_SECRET");

    return Response.json(
      { received: false, error: "Webhook configuration error" },
      { status: 500 }
    );
  }

  if (!signature) {
    return new Response("Missing Stripe signature", { status: 400 });
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("WEBHOOK_SIGNATURE_ERROR:", err.message);

    return new Response("Bad signature", { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
      case "checkout.session.async_payment_succeeded": {
        const session = event.data.object;

        const result = await processWebsiteOrder(session.id);

        console.log("STRIPE_ORDER_EVENT_PROCESSED", {
          eventId: event.id,
          eventType: event.type,
          sessionId: session.id,
          processed: result.processed,
          reason: result.reason || null,
        });

        break;
      }

      default:
        console.log("STRIPE_EVENT_IGNORED", {
          eventId: event.id,
          eventType: event.type,
        });
    }

    return Response.json({ received: true });
  } catch (err) {
    console.error("STRIPE_ORDER_EVENT_ERROR", {
      eventId: event.id,
      eventType: event.type,
      message: err.message,
      sendGridResponse: err.response?.body || null,
    });

    return Response.json(
      {
        received: false,
        error: "Order fulfillment failed",
      },
      { status: 500 }
    );
  }
}