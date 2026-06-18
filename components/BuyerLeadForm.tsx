"use client";

import { useState } from "react";

const priceRanges = [
  "Under $150,000",
  "$150,000 – $250,000",
  "$250,000 – $350,000",
  "$350,000 – $500,000",
  "$500,000+",
];

export default function BuyerLeadForm({ defaultArea }: { defaultArea?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    const payload = {
      type: "buyer",
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      area: form.get("area"),
      priceRange: form.get("priceRange"),
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
          Tyler will reach out shortly to talk through what you&apos;re
          looking for.
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          label="Desired area"
          name="area"
          defaultValue={defaultArea}
          placeholder="e.g. Sandusky, Port Clinton"
          required
        />
        <div>
          <label className="block text-sm font-medium text-navy mb-1.5">
            Price range
          </label>
          <select
            name="priceRange"
            required
            className="w-full rounded-sm border border-slate-200 px-4 py-2.5 text-navy focus:border-navy outline-none"
          >
            <option value="">Select a range</option>
            {priceRanges.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-sm bg-navy py-3.5 text-sm font-semibold text-white hover:bg-navy-600 transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Start My Home Search"}
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
  defaultValue,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  defaultValue?: string;
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
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="w-full rounded-sm border border-slate-200 px-4 py-2.5 text-navy placeholder:text-slate-400 focus:border-navy outline-none"
      />
    </div>
  );
}
