"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/cities";

const navLinks = [
  { href: "/buyers", label: "Buyers" },
  { href: "/sellers", label: "Sellers" },
  { href: "/va-loans", label: "VA Loans" },
  { href: "/about", label: "About Tyler" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="container-page flex items-center justify-between h-20">
        <Link href="/" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl text-navy tracking-tight">
            Tyler Gish
          </span>
          <span className="hidden sm:inline text-xs uppercase tracking-[0.18em] text-slate font-medium">
            eXp Realty
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy/80 hover:text-brass transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="text-sm font-semibold text-navy hover:text-brass transition-colors"
          >
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-sm bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-600 transition-colors"
          >
            Schedule Consultation
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`block h-[2px] w-6 bg-navy transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-navy transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-navy transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <nav className="container-page flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-navy border-b border-slate-50 last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="py-3 text-base font-semibold text-brass"
            >
              Call {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-sm bg-navy px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Schedule Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
