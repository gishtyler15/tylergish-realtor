"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="container-page flex items-center justify-between h-[72px]">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="font-display text-xl text-navy tracking-tight">
            Tyler Gish
          </span>
          <span className="hidden sm:block w-px h-5 bg-slate-200" />
          <Image
            src="/images/exp-realty-logo.png"
            alt="eXp Realty"
            width={84}
            height={44}
            className="hidden sm:block h-6 w-auto object-contain opacity-80"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium tracking-wide text-navy/70 hover:text-navy transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="text-[13px] font-semibold text-navy/80 hover:text-navy transition-colors"
          >
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-navy px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-navy-600 transition-colors"
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
            className={`block h-[1.5px] w-5 bg-navy transition-transform ${
              open ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-navy transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-navy transition-transform ${
              open ? "-translate-y-[6.5px] -rotate-45" : ""
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
              className="py-3 text-base font-semibold text-navy"
            >
              Call {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-navy px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Schedule Consultation
            </Link>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2">
              <span className="text-xs text-slate-400">Member of</span>
              <Image
                src="/images/exp-realty-logo.png"
                alt="eXp Realty"
                width={70}
                height={36}
                className="h-5 w-auto object-contain opacity-70"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
