import stripe from "../lib/stripe";
import { sendOwnerOrderEmail } from "../emails/ownerOrderEmail";

function getProductName(lineItem) {
  const product = lineItem.price?.product;

  if (product && typeof product === "object" && product.name) {
    return product.name;
  }

  return lineItem.description || "Unnamed product";
}

function getPaymentIntentId(paymentIntent) {
  if (!paymentIntent) return null;

  if (typeof paymentIntent === "string") {
    return paymentIntent;
  }

  return paymentIntent.id || null;
}

export async function processWebsiteOrder(sessionId) {
  if (!sessionId) {
    throw new Error("Missing Stripe Checkout Session ID");
  }

  /*
   * Retrieve the completed Checkout Session directly from Stripe.
   * Expanding payment_intent gives us its ID without requiring another call.
   */
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["payment_intent"],
  });

  /*
   * Stripe may only include a limited number of line items when they are
   * expanded on the Session itself, so retrieve the complete line-item list.
   */
  const lineItems = await stripe.checkout.sessions.listLineItems(sessionId, {
    limit: 100,
    expand: ["data.price.product"],
  });

  /*
   * Do not fulfill an order that has not been paid.
   *
   * "no_payment_required" is also valid, such as for a fully discounted
   * Checkout Session, so we only reject the explicit "unpaid" status.
   */
  if (session.payment_status === "unpaid") {
    console.warn("ORDER_NOT_READY_FOR_FULFILLMENT", {
      sessionId: session.id,
      paymentStatus: session.payment_status,
    });

    return {
      processed: false,
      reason: "unpaid",
      sessionId: session.id,
    };
  }

  /*
   * Newer Stripe API versions place shipping information under
   * collected_information.shipping_details. The fallback keeps this
   * compatible with older Stripe API versions.
   */
  const shippingDetails =
    session.collected_information?.shipping_details ||
    session.shipping_details ||
    null;

  const order = {
    source: "website",
    currency: session.currency || "usd",

    customer: {
      name:
        shippingDetails?.name ||
        session.customer_details?.name ||
        "Not provided",

      email:
        session.customer_details?.email ||
        session.customer_email ||
        null,

      phone: session.customer_details?.phone || null,
    },

    shipping: {
      name: shippingDetails?.name || null,

      address: shippingDetails?.address
        ? {
            line1: shippingDetails.address.line1 || "",
            line2: shippingDetails.address.line2 || "",
            city: shippingDetails.address.city || "",
            state: shippingDetails.address.state || "",
            postalCode: shippingDetails.address.postal_code || "",
            country: shippingDetails.address.country || "",
          }
        : null,
    },

    items: lineItems.data.map((lineItem) => ({
      name: getProductName(lineItem),
      quantity: lineItem.quantity || 0,
      unitAmount: lineItem.price?.unit_amount || 0,
      subtotal: lineItem.amount_subtotal || 0,
      total: lineItem.amount_total || 0,
      priceId: lineItem.price?.id || null,
      productId:
        typeof lineItem.price?.product === "string"
          ? lineItem.price.product
          : lineItem.price?.product?.id || null,
    })),

    totals: {
      subtotal: session.amount_subtotal || 0,
      tax: session.total_details?.amount_tax || 0,
      shipping: session.shipping_cost?.amount_total || 0,
      discount: session.total_details?.amount_discount || 0,
      total: session.amount_total || 0,
    },

    stripe: {
      sessionId: session.id,
      paymentIntentId: getPaymentIntentId(session.payment_intent),
      customerId:
        typeof session.customer === "string"
          ? session.customer
          : session.customer?.id || null,
    },

    createdAt: session.created
      ? new Date(session.created * 1000).toISOString()
      : new Date().toISOString(),
  };

  if (order.items.length === 0) {
    throw new Error(
      `Stripe returned no line items for Checkout Session ${session.id}`
    );
  }

  console.log("ABOUT_TO_SEND_OWNER_EMAIL", {
    to: process.env.CONTACT_TO,
    sessionId: order.stripe.sessionId,
  });

  await sendOwnerOrderEmail(order);

  console.log("WEBSITE_ORDER_PROCESSED", {
    sessionId: order.stripe.sessionId,
    paymentIntentId: order.stripe.paymentIntentId,
    itemCount: order.items.length,
    total: order.totals.total,
  });

  return {
    processed: true,
    order,
  };
}