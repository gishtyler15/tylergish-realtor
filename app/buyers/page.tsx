import type { Metadata } from "next";
import { siteConfig } from "@/data/cities";
import BuyerLeadForm from "@/components/BuyerLeadForm";

export const metadata: Metadata = {
  title: "Home Buyers | Northwest Ohio Realtor Tyler Gish",
  description:
    "Buying a home in Northwest Ohio? Tyler Gish guides first-time buyers, veterans, and relocating families through every step of the process.",
};

const steps = [
  {
    title: "Get pre-approved",
    body: "Before house hunting, Tyler connects you with trusted local lenders so you know your real budget — including VA, FHA, and conventional options.",
  },
  {
    title: "Define what you need",
    body: "Tyler walks through must-haves, deal breakers, and target areas so your search is focused instead of overwhelming.",
  },
  {
    title: "Tour homes with a plan",
    body: "Every showing comes with Tyler's honest read on condition, value, and whether the home fits your goals — not just a sales pitch.",
  },
  {
    title: "Make a strong offer",
    body: "Tyler builds offers that are competitive but protect you, using current local market data to guide pricing strategy.",
  },
  {
    title: "Navigate inspection & closing",
    body: "From inspection negotiations to final walkthrough, Tyler manages the details and keeps you informed at every step.",
  },
];

export default function BuyersPage() {
  return (
    <main>
      <section className="bg-white border-b border-slate-100">
        <div className="container-page py-16 md:py-20">
          <p className="eyebrow mb-4">For Buyers</p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight text-navy max-w-2xl">
            Buying a home in Northwest Ohio, done right.
          </h1>
          <p className="mt-4 text-lg text-slate max-w-2xl">
            Whether it&apos;s your first home, a VA loan purchase, or a move
            to be closer to family, Tyler makes sure you understand every
            step before you take it.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-20 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12">
        <div>
          <h2 className="font-display text-2xl text-navy mb-8">
            The Home Buying Process
          </h2>
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={step.title} className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy-50 flex items-center justify-center font-display text-navy text-lg">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-slate leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 bg-navy-50 rounded-2xl p-7">
            <h3 className="font-display text-xl text-navy mb-3">
              First-Time Buyer?
            </h3>
            <p className="text-slate leading-relaxed mb-4">
              First-time buyers often qualify for lower down payment
              programs and local assistance options. Tyler will walk you
              through what you actually qualify for — no guesswork.
            </p>
            <p className="text-slate leading-relaxed">
              Veteran or active-duty? Visit Tyler&apos;s{" "}
              <a href="/va-loans" className="text-brass-700 font-semibold hover:underline">
                VA loan page
              </a>{" "}
              to learn about $0-down financing.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="font-display text-xl text-navy mb-3">
              Financing Overview
            </h3>
            <p className="text-slate leading-relaxed">
              Tyler works alongside local lenders familiar with conventional,
              FHA, USDA, and VA loan programs, so financing conversations
              stay grounded in what&apos;s actually available in Northwest
              Ohio — not generic national averages.
            </p>
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 self-start">
          <div className="rounded-2xl border border-slate-100 p-7 shadow-sm">
            <h3 className="font-display text-xl text-navy mb-1">
              Start Your Search
            </h3>
            <p className="text-sm text-slate mb-5">
              Tell Tyler what you&apos;re looking for.
            </p>
            <BuyerLeadForm />
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
