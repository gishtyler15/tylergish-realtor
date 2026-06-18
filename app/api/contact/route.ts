import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Tyler Gish Website <contact@tylergishrealtor.com>",
        to: process.env.LEAD_NOTIFICATION_EMAIL || "gishtyler17@gmail.com",
        subject: `Website contact form: ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
      });
    }

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
      await client.messages.create({
        body: `New contact form message from ${name} (${phone}): ${message.slice(0, 100)}`,
        from: process.env.TWILIO_FROM_NUMBER,
        to: process.env.TYLER_NOTIFICATION_PHONE,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
