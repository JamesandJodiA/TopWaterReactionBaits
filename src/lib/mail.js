import nodemailer from "nodemailer";

let transporter;

function getTransporter() {
  if (!process.env.SMTP_USER) {
    throw new Error("Missing SMTP_USER");
  }

  if (!process.env.SMTP_PASS) {
    throw new Error("Missing SMTP_PASS");
  }

  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  return transporter;
}

export async function sendMail({
  to,
  subject,
  text,
  html,
  replyTo,
}) {
  const mailTransporter = getTransporter();

  return mailTransporter.sendMail({
    from: `"TopWater Reaction Baits" <${process.env.SMTP_USER}>`,
    to,
    subject,
    text,
    html,
    replyTo,
  });
}