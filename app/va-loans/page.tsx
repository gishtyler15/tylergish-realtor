import type { Metadata } from "next";
import { siteConfig } from "@/data/cities";
import BuyerLeadForm from "@/components/BuyerLeadForm";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "VA Loan Realtor Northwest Ohio | Tyler Gish",
  description:
    "Tyler Gish is an Army veteran and REALTOR® who specializes in VA loan purchases across Northwest Ohio. Learn VA loan benefits, myths, and eligibility basics.",
  keywords: ["VA Realtor Ohio", "Veteran Realtor Ohio", "VA loan Northwest Ohio"],
};

const faqs = [
  {
    question: "Do I need a down payment to use a VA loan?",
    answer:
      "In most cases, no. VA loans allow eligible veterans and active-duty service members to purchase a home with $0 down, which is one of the program's biggest advantages over conventional financing.",
  },
  {
    question: "Is a VA loan harder to get approved than a conventional loan?",
    answer:
      "No — this is one of the most common myths. VA loans have flexible credit requirements and no private mortgage insurance requirement, and many sellers accept VA offers just as readily as conventional ones when the offer is structured properly.",
  },
  {
    question: "Can I use a VA loan more than once?",
    answer:
      "Yes. VA loan benefits can be reused as long as you've paid off the previous VA loan or have remaining entitlement, making it possible to use the benefit multiple times over your lifetime.",
  },
  {
    question: "Who is eligible for a VA loan?",
    answer:
      "Eligibility generally includes veterans, active-duty service members who meet minimum service requirements, and certain surviving spouses. A Certificate of Eligibility (COE) confirms your specific eligibility.",
  },
  {
    question: "Do sellers avoid VA loan offers?",
    answer:
      "Not when the offer is presented correctly. Tyler works directly with sellers and listing agents to explain VA loan terms clearly, which helps VA offers compete on equal footing with conventional and cash offers.",
  },
];

export default function VALoansPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      <section className="bg-white border-b border-slate-100">
        <div className="container-page py-16 md:py-20">
          <p className="eyebrow mb-4">
            Veteran Specialist &middot; VA Loans
          </p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight text-navy max-w-2xl">
            VA Loan Realtor, Northwest Ohio
          </h1>
          <p className="mt-4 text-lg text-slate max-w-2xl">
            Tyler is an Army veteran himself. He knows the VA loan process
            from both sides — as a former service member and as the agent
            guiding you through it.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-20 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12">
        <div className="space-y-12">
          <div>
            <h2 className="font-display text-2xl text-navy mb-4">
              VA Loan Benefits
            </h2>
            <ul className="space-y-3 text-slate">
              <li className="flex gap-3">
                <span className="text-brass-700 font-bold">—</span>
                <span>No down payment required in most cases</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brass-700 font-bold">—</span>
                <span>No private mortgage insurance (PMI)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brass-700 font-bold">—</span>
                <span>Competitive interest rates compared to conventional loans</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brass-700 font-bold">—</span>
                <span>Limits on closing costs the buyer can be charged</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brass-700 font-bold">—</span>
                <span>Reusable benefit for future home purchases</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-navy mb-4">
              Common VA Loan Myths
            </h2>
            <div className="space-y-5">
              <div>
                <p className="font-semibold text-navy mb-1">
                  &ldquo;Sellers won&apos;t accept VA offers.&rdquo;
                </p>
                <p className="text-slate leading-relaxed">
                  Most resistance comes from outdated assumptions, not real
                  risk. Tyler presents VA offers the same way he&apos;d
                  present any strong offer — clearly and with the financing
                  details a seller actually needs to evaluate it fairly.
                </p>
              </div>
              <div>
                <p className="font-semibold text-navy mb-1">
                  &ldquo;VA loans take longer to close.&rdquo;
                </p>
                <p className="text-slate leading-relaxed">
                  With an experienced lender and agent, VA loan closing
                  timelines are comparable to conventional financing.
                </p>
              </div>
              <div>
                <p className="font-semibold text-navy mb-1">
                  &ldquo;You can only use your VA loan once.&rdquo;
                </p>
                <p className="text-slate leading-relaxed">
                  VA loan entitlement can often be reused, allowing veterans
                  to buy again later in life with the same benefit.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl text-navy mb-4">
              Eligibility Basics
            </h2>
            <p className="text-slate leading-relaxed">
              Eligibility is generally based on length and type of service.
              Veterans, active-duty members meeting service minimums, and
              some surviving spouses may qualify. A Certificate of
              Eligibility (COE) confirms specifics, and Tyler can point you
              toward lenders who handle this efficiently.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-navy mb-4">
              Why Veterans Work With Tyler
            </h2>
            <p className="text-slate leading-relaxed">
              Tyler isn&apos;t guessing at what matters to veteran buyers —
              he served too. That shared experience means fewer things need
              to be explained from scratch, and more energy goes toward
              finding the right home and structuring an offer that works.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-navy mb-6">FAQ</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <p className="font-semibold text-navy mb-1.5">
                    {faq.question}
                  </p>
                  <p className="text-slate leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 self-start">
          <div className="rounded-2xl border border-slate-100 p-7 shadow-sm">
            <h3 className="font-display text-xl text-navy mb-1">
              Using a VA Loan?
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
