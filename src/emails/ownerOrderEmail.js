import sg from "@sendgrid/mail";

function formatMoney(amount, currency = "usd") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format((amount || 0) / 100);
}

function formatAddress(address) {
  if (!address) return "No shipping address provided";

  return [
    address.line1,
    address.line2,
    `${address.city || ""}${address.city && address.state ? ", " : ""}${
      address.state || ""
    } ${address.postalCode || ""}`.trim(),
    address.country,
  ]
    .filter(Boolean)
    .join("\n");
}

export async function sendOwnerOrderEmail(order) {
  if (
    !process.env.SENDGRID_API_KEY ||
    !process.env.CONTACT_FROM ||
    !process.env.CONTACT_TO
  ) {
    throw new Error(
      "Missing SENDGRID_API_KEY, CONTACT_FROM, or CONTACT_TO"
    );
  }

  sg.setApiKey(process.env.SENDGRID_API_KEY);

  const itemText = order.items
    .map(
      (item) =>
        `${item.quantity} × ${item.name} — ${formatMoney(
          item.total,
          order.currency
        )}`
    )
    .join("\n");

  const itemHtml = order.items
    .map(
      (item) => `
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #dddddd;">
            ${item.quantity} × ${item.name}
          </td>
          <td
            style="
              padding: 8px;
              border-bottom: 1px solid #dddddd;
              text-align: right;
            "
          >
            ${formatMoney(item.total, order.currency)}
          </td>
        </tr>
      `
    )
    .join("");

  const total = formatMoney(order.totals.total, order.currency);

  await sg.send({
    to: process.env.CONTACT_TO,
    from: process.env.CONTACT_FROM,
    replyTo: order.customer.email || undefined,
    subject: `New TopWater order — ${total}`,
    text: [
      "NEW TOPWATER REACTION BAITS ORDER",
      "",
      `Order source: ${order.source}`,
      `Stripe Checkout Session: ${order.stripe.sessionId}`,
      "",
      "CUSTOMER",
      order.customer.name || "Not provided",
      order.customer.email || "Not provided",
      order.customer.phone || "Not provided",
      "",
      "SHIP TO",
      formatAddress(order.shipping.address),
      "",
      "ITEMS",
      itemText || "No line items returned",
      "",
      `TOTAL: ${total}`,
    ].join("\n"),
    html: `
      <div
        style="
          max-width: 650px;
          margin: 0 auto;
          font-family: Arial, sans-serif;
          color: #222222;
        "
      >
        <h1 style="margin-bottom: 4px;">
          New TopWater Reaction Baits Order
        </h1>

        <p style="margin-top: 0; color: #666666;">
          Stripe Checkout Session: ${order.stripe.sessionId}
        </p>

        <h2>Customer</h2>
        <p>
          <strong>${order.customer.name || "Not provided"}</strong><br />
          ${order.customer.email || "Not provided"}<br />
          ${order.customer.phone || "Not provided"}
        </p>

        <h2>Ship To</h2>
        <p style="white-space: pre-line;">
          ${formatAddress(order.shipping.address)}
        </p>

        <h2>Items</h2>
        <table
          style="
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
          "
        >
          <tbody>
            ${itemHtml}
          </tbody>
        </table>

        <p style="font-size: 20px; text-align: right;">
          <strong>Total: ${total}</strong>
        </p>
      </div>
    `,
  });

  console.log("OWNER_ORDER_EMAIL_SENT", {
    sessionId: order.stripe.sessionId,
    to: process.env.CONTACT_TO,
  });
}