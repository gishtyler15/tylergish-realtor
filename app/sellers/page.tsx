import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/cities";
import SellerLeadForm from "@/components/SellerLeadForm";

export const metadata: Metadata = {
  title: "Sell Your Home | Northwest Ohio Realtor Tyler Gish",
  description:
    "Thinking about selling your Northwest Ohio home? Tyler Gish provides pricing strategy, professional marketing, and skilled negotiation to get it sold.",
};

export default function SellersPage() {
  return (
    <main>
      <section className="bg-navy-800 text-white">
        <div className="container-page py-16 md:py-20">
          <p className="eyebrow text-brass-400 mb-4">For Sellers</p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight max-w-2xl">
            Sell with a strategy, not a guess.
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            Tyler combines accurate local pricing, professional marketing,
            and direct negotiation to get your home sold for the right
            price.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-20 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12">
        <div className="space-y-12">
          <div>
            <h2 className="font-display text-2xl text-navy mb-4">
              The Home Selling Process
            </h2>
            <p className="text-slate leading-relaxed">
              Selling starts with an honest conversation about your home,
              your timeline, and your goals. From there, Tyler handles
              pricing, prep recommendations, marketing, showings, offer
              review, and negotiation through closing — keeping you informed
              the entire time.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-navy mb-4">
              Pricing Strategy
            </h2>
            <p className="text-slate leading-relaxed">
              Overpricing costs you time on market; underpricing costs you
              money. Tyler builds your listing price from real comparable
              sales in your specific neighborhood — not a generic online
              estimate — so you start strong and stay competitive.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-navy mb-4">
              Marketing Strategy
            </h2>
            <p className="text-slate leading-relaxed">
              Your listing gets professional photography, a compelling
              description, and exposure across the MLS, major real estate
              portals, and targeted social media — backed by eXp
              Realty&apos;s national marketing reach combined with
              Tyler&apos;s local audience.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-navy mb-4">
              Professional Photography
            </h2>
            <p className="text-slate leading-relaxed">
              First impressions happen online. Every listing is presented
              with high-quality photography that shows your home at its
              best, because buyers decide whether to schedule a showing
              based on the first few images they see.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-navy mb-4">
              Negotiation Process
            </h2>
            <p className="text-slate leading-relaxed">
              When offers come in, Tyler reviews every term — not just
              price — and negotiates on your behalf to protect your net
              proceeds, your timeline, and your peace of mind through
              inspection and closing.
            </p>
          </div>

          <div className="bg-navy-50 rounded-sm p-7">
            <h3 className="font-display text-xl text-navy mb-3">
              Not sure what your home is worth?
            </h3>
            <p className="text-slate leading-relaxed mb-4">
              Get a free, no-pressure home value estimate based on real
              local sales data.
            </p>
            <Link
              href="/home-valuation"
              className="inline-flex rounded-sm bg-brass px-6 py-3 text-sm font-semibold text-white hover:bg-brass-700 transition-colors"
            >
              Get My Home Value
            </Link>
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 self-start">
          <div className="rounded-sm border border-slate-100 p-7 shadow-sm">
            <h3 className="font-display text-xl text-navy mb-1">
              Get Your Home Value
            </h3>
            <p className="text-sm text-slate mb-5">
              No obligation. Just an honest estimate.
            </p>
            <SellerLeadForm />
            <div className="mt-6 pt-6 border-t border-slate-100 text-center">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="font-semibold text-navy hover:text-brass transition-colors"
              >
                Or call {siteConfig.phone}
              </a>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
