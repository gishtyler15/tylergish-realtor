"use client";

import { useState } from "react";

export default function SellerLeadForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    const payload = {
      type: "seller",
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      address: form.get("address"),
    };
    try {
      const res = await fetch("/api/lead", {
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
      <div className="rounded-sm bg-navy-50 border border-navy-100 p-6 text-center">
        <p className="font-display text-xl text-navy mb-1">Thanks — got it.</p>
        <p className="text-sm text-slate">
          Tyler will follow up with your home value estimate and next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Full name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>
      <Field label="Email" name="email" type="email" required />
      <Field label="Property address" name="address" required placeholder="123 Main St, Clyde, OH" />
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-sm bg-brass py-3.5 text-sm font-semibold text-white hover:bg-brass-700 transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Get My Home Value"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Call Tyler directly at 419-217-3707.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-navy mb-1.5">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-sm border border-slate-200 px-4 py-2.5 text-navy placeholder:text-slate-400 focus:border-navy outline-none"
      />
    </div>
  );
}
