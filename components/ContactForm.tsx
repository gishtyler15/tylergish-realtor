"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      message: form.get("message"),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg bg-navy-50 border border-navy-100 p-6 text-center">
        <p className="font-display text-xl text-navy mb-1">Message sent.</p>
        <p className="text-sm text-slate">Tyler typically replies within a few hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-navy mb-1.5">Full name</label>
          <input
            name="name"
            required
            className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-navy focus:border-navy outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy mb-1.5">Phone</label>
          <input
            name="phone"
            type="tel"
            required
            className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-navy focus:border-navy outline-none"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-navy mb-1.5">Email</label>
        <input
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-navy focus:border-navy outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-navy mb-1.5">
          How can Tyler help?
        </label>
        <textarea
          name="message"
          rows={4}
          required
          className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-navy focus:border-navy outline-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg bg-navy py-3.5 text-sm font-semibold text-white hover:bg-navy-600 transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Call Tyler directly at 419-217-3707.
        </p>
      )}
    </form>
  );
}
