"use client";

import { useState } from "react";

const projectTypes = [
  "Full digital marketing",
  "Social media",
  "Ads management",
  "Web development",
  "Branding & design",
  "Photography",
  "Not sure yet",
];

const budgets = [
  "< IDR 25M / month",
  "IDR 25 – 50M / month",
  "IDR 50 – 100M / month",
  "IDR 100M+ / month",
  "Project-based",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = `New project inquiry — ${fd.get("name") ?? ""}`;
    const body = [
      `Name: ${fd.get("name") ?? ""}`,
      `Company: ${fd.get("company") ?? ""}`,
      `Email: ${fd.get("email") ?? ""}`,
      `Phone / WhatsApp: ${fd.get("phone") ?? ""}`,
      `Project type: ${fd.get("type") ?? ""}`,
      `Budget: ${fd.get("budget") ?? ""}`,
      `Timeline: ${fd.get("timeline") ?? ""}`,
      "",
      `Message:`,
      String(fd.get("message") ?? ""),
    ].join("\n");
    setSubmitted(true);
    window.location.href = `mailto:hello@djitugo.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)]">
        ( Brief )
      </p>

      <Field label="Your name" name="name" required placeholder="Full name" />
      <Field label="Company" name="company" placeholder="Brand or business" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Field label="Email" name="email" type="email" required placeholder="you@brand.com" />
        <Field label="Phone or WhatsApp" name="phone" placeholder="+62…" />
      </div>

      <Select label="Project type" name="type" options={projectTypes} required />
      <Select label="Estimated budget" name="budget" options={budgets} />

      <Field label="Ideal timeline" name="timeline" placeholder="e.g. Q3 2026, ASAP, no rush" />

      <Field
        label="Tell us about your business"
        name="message"
        textarea
        required
        placeholder="What you're building, the metric you want to move, what's getting in the way."
      />

      <button
        type="submit"
        className="group inline-flex items-center gap-3 bg-[color:var(--color-ink)] text-[color:var(--color-paper)] rounded-full pl-6 pr-2 py-2 text-sm tracking-wide"
      >
        {submitted ? "Opening your email…" : "Send the brief"}
        <span className="h-11 w-11 grid place-items-center rounded-full bg-[color:var(--color-paper)] text-[color:var(--color-ink)] transition-transform group-hover:rotate-45">
          →
        </span>
      </button>
      <p className="text-[12px] font-mono uppercase tracking-[0.22em] text-[color:var(--color-gray-3)]">
        Submitting opens your mail client with the brief pre-filled to hello@djitugo.com.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)]">
        {label}
        {required && <span aria-hidden> *</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          rows={6}
          className="mt-3 block w-full bg-transparent border-b hairline pb-3 text-[15px] focus:outline-none focus:border-[color:var(--color-ink)] placeholder:text-[color:var(--color-gray-3)] resize-none"
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className="mt-3 block w-full bg-transparent border-b hairline pb-3 text-[15px] focus:outline-none focus:border-[color:var(--color-ink)] placeholder:text-[color:var(--color-gray-3)]"
        />
      )}
    </label>
  );
}

function Select({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)]">
        {label}
        {required && <span aria-hidden> *</span>}
      </span>
      <div className="relative">
        <select
          name={name}
          required={required}
          defaultValue=""
          className="mt-3 block w-full appearance-none bg-transparent border-b hairline pb-3 pr-8 text-[15px] focus:outline-none focus:border-[color:var(--color-ink)]"
        >
          <option value="" disabled>
            Select…
          </option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <span
          aria-hidden
          className="pointer-events-none absolute right-0 bottom-3 text-[color:var(--color-gray-3)]"
        >
          ↓
        </span>
      </div>
    </label>
  );
}
