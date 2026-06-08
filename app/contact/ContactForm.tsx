"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const inputCls =
  "w-full px-4 py-3 rounded-sm border border-gray-200 text-sm focus:outline-none focus:border-prp-blue bg-white";
const labelCls = "block text-sm font-medium mb-1.5";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      firstName: fd.get("firstName"),
      lastName: fd.get("lastName"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      service: fd.get("service"),
      message: fd.get("message"),
    };

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("success");
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-sm p-8 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center min-h-[420px]"
        style={{ backgroundColor: "#f4f6f9" }}>
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
          style={{ background: "linear-gradient(135deg, #1e3560 0%, #2d5486 100%)" }}>
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2" style={{ color: "#1e3560" }}>
          Message sent — thank you!
        </h3>
        <p className="text-gray-600 text-sm mb-6 max-w-sm">
          We&apos;ve received your enquiry and will get back to you as soon as possible. For anything
          urgent, please call us on{" "}
          <a href="tel:07593728481" className="font-semibold" style={{ color: "#2d5486" }}>
            07593 728 481
          </a>
          .
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm font-bold hover:underline"
          style={{ color: "#2d5486" }}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-sm p-8 shadow-sm border border-gray-100" style={{ backgroundColor: "#f4f6f9" }}>
      <h3 className="text-xl font-bold mb-6" style={{ color: "#1e3560" }}>
        Send Us a Message
      </h3>
      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={labelCls} style={{ color: "#1e3560" }}>First Name</label>
            <input type="text" name="firstName" placeholder="John" className={inputCls} required />
          </div>
          <div>
            <label className={labelCls} style={{ color: "#1e3560" }}>Last Name</label>
            <input type="text" name="lastName" placeholder="Smith" className={inputCls} required />
          </div>
        </div>
        <div>
          <label className={labelCls} style={{ color: "#1e3560" }}>Email Address</label>
          <input type="email" name="email" placeholder="john@example.com" className={inputCls} required />
        </div>
        <div>
          <label className={labelCls} style={{ color: "#1e3560" }}>Phone Number</label>
          <input type="tel" name="phone" placeholder="07xxx xxxxxx" className={inputCls} />
        </div>
        <div>
          <label className={labelCls} style={{ color: "#1e3560" }}>Service Needed</label>
          <select className={`${inputCls} text-gray-600`} name="service" defaultValue="">
            <option value="">Select a service</option>
            <option>Fencing</option>
            <option>Roofing &amp; Repairs</option>
            <option>Patios &amp; Driveways</option>
            <option>Landscaping &amp; Tree Surgery</option>
            <option>Other / Not Sure</option>
          </select>
        </div>
        <div>
          <label className={labelCls} style={{ color: "#1e3560" }}>Your Message</label>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about your project..."
            className={`${inputCls} resize-none`}
            required
          />
        </div>

        {status === "error" && (
          <p className="text-sm font-medium text-red-600 bg-red-50 border border-red-100 rounded-sm px-4 py-3">
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full py-4 rounded-sm font-bold text-white transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          style={{ backgroundColor: "#1e3560" }}>
          {status === "sending" ? (
            <>
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending…
            </>
          ) : (
            <>Send Message →</>
          )}
        </button>
      </form>
    </div>
  );
}
