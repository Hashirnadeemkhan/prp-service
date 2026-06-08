import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

/* Where enquiries are delivered (set in .env.local) */
const TO_EMAIL = process.env.BUSINESS_EMAIL ?? "info@prp-services.uk";
/* Verified Resend sender. Until a domain is verified in Resend, the test
   sender "onboarding@resend.dev" works out of the box. */
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "PRP Services <onboarding@resend.dev>";

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Email service is not configured. Please call us on 07593 728 481." },
      { status: 500 }
    );
  }

  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const firstName = String(data.firstName ?? "").trim();
  const lastName = String(data.lastName ?? "").trim();
  const email = String(data.email ?? "").trim();
  const phone = String(data.phone ?? "").trim();
  const service = String(data.service ?? "").trim();
  const message = String(data.message ?? "").trim();

  // Basic validation
  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email and message." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const fullName = `${firstName} ${lastName}`;
  const resend = new Resend(process.env.RESEND_API_KEY);

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#1e3560;max-width:600px;margin:0 auto">
      <div style="background:#1e3560;padding:20px 24px;border-radius:8px 8px 0 0">
        <h2 style="color:#fff;margin:0;font-size:18px">New enquiry from prp-services.uk</h2>
      </div>
      <div style="border:1px solid #e5e7eb;border-top:0;border-radius:0 0 8px 8px;padding:24px">
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr><td style="padding:6px 0;color:#6b7280;width:130px">Name</td><td style="padding:6px 0;font-weight:bold">${escapeHtml(fullName)}</td></tr>
          <tr><td style="padding:6px 0;color:#6b7280">Email</td><td style="padding:6px 0"><a href="mailto:${escapeHtml(email)}" style="color:#2d5486">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding:6px 0;color:#6b7280">Phone</td><td style="padding:6px 0">${escapeHtml(phone) || "&mdash;"}</td></tr>
          <tr><td style="padding:6px 0;color:#6b7280">Service</td><td style="padding:6px 0">${escapeHtml(service) || "&mdash;"}</td></tr>
        </table>
        <div style="margin-top:16px;padding-top:16px;border-top:1px solid #e5e7eb">
          <p style="color:#6b7280;font-size:13px;margin:0 0 6px">Message</p>
          <p style="white-space:pre-wrap;line-height:1.6;margin:0">${escapeHtml(message)}</p>
        </div>
      </div>
    </div>`;

  const text =
    `New enquiry from prp-services.uk\n\n` +
    `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone || "-"}\n` +
    `Service: ${service || "-"}\n\nMessage:\n${message}`;

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New enquiry: ${fullName}${service ? ` — ${service}` : ""}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Sorry, your message could not be sent. Please call us on 07593 728 481." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact send failed:", err);
    return NextResponse.json(
      { error: "Sorry, something went wrong. Please call us on 07593 728 481." },
      { status: 500 }
    );
  }
}
