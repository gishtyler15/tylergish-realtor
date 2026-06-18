import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, name, email, phone, area, priceRange, address } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const summaryLines =
      type === "buyer"
        ? [
            `New BUYER lead`,
            `Name: ${name}`,
            `Email: ${email}`,
            `Phone: ${phone}`,
            `Desired area: ${area || "—"}`,
            `Price range: ${priceRange || "—"}`,
          ]
        : [
            `New SELLER lead`,
            `Name: ${name}`,
            `Email: ${email}`,
            `Phone: ${phone}`,
            `Property address: ${address || "—"}`,
          ];

    // Email notification via Resend
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Tyler Gish Website <leads@tylergishrealtor.com>",
        to: process.env.LEAD_NOTIFICATION_EMAIL || "gishtyler17@gmail.com",
        subject: `${type === "buyer" ? "Buyer" : "Seller"} Lead: ${name}`,
        text: summaryLines.join("\n"),
      });
    }

    // SMS notification via Twilio
    if (
      process.env.TWILIO_ACCOUNT_SID &&
      process.env.TWILIO_AUTH_TOKEN &&
      process.env.TWILIO_FROM_NUMBER &&
      process.env.TYLER_NOTIFICATION_PHONE
    ) {
      const twilioModule = await import("twilio");
      const client = twilioModule.default(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN
      );
      const smsBody =
        type === "buyer"
          ? `New buyer lead: ${name}, ${phone}, area: ${area || "n/a"}, budget: ${priceRange || "n/a"}`
          : `New seller lead: ${name}, ${phone}, address: ${address || "n/a"}`;
      await client.messages.create({
        body: smsBody,
        from: process.env.TWILIO_FROM_NUMBER,
        to: process.env.TYLER_NOTIFICATION_PHONE,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Lead submission error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
