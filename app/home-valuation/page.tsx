import type { Metadata } from "next";
import SellerLeadForm from "@/components/SellerLeadForm";

export const metadata: Metadata = {
  title: "What's My Home Worth? | Free Home Valuation, Northwest Ohio",
  description:
    "Get a free, no-obligation home value estimate from Tyler Gish, REALTOR® serving Northwest Ohio. Based on real local sales data, not a generic algorithm.",
};

export default function HomeValuationPage() {
  return (
    <main>
      <section className="bg-white border-b border-slate-100">
        <div className="container-page py-16 md:py-20 text-center">
          <p className="eyebrow mb-4">Free Home Valuation</p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight text-navy max-w-2xl mx-auto">
            What&apos;s your Northwest Ohio home actually worth?
          </h1>
          <p className="mt-4 text-lg text-slate max-w-xl mx-auto">
            Skip the algorithm. Get a real estimate from a local agent who
            knows the actual comparable sales in your neighborhood.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-20 max-w-xl mx-auto">
        <div className="rounded-2xl border border-slate-100 p-8">
          <SellerLeadForm />
        </div>
        <p className="text-sm text-slate-400 text-center mt-6">
          No obligation. Tyler will follow up personally with your estimate.
        </p>
      </section>
    </main>
  );
}
