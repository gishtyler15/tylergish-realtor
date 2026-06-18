import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Market Reports & Blog | Tyler Gish, Northwest Ohio Realtor",
  description:
    "Local market reports, buyer and seller tips, and Northwest Ohio real estate insights from Tyler Gish, REALTOR® with eXp Realty.",
};

export default function BlogIndexPage() {
  return (
    <main>
      <section className="bg-navy-800 text-white">
        <div className="container-page py-16 md:py-20">
          <p className="eyebrow text-brass-400 mb-4">Insights</p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight max-w-2xl">
            Market Reports &amp; Local Insights
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            Northwest Ohio market trends, buyer and seller tips, and updates
            from Tyler — coming soon.
          </p>
        </div>
      </section>

      <section className="container-page py-20 text-center">
        <p className="text-slate max-w-md mx-auto">
          Tyler is putting together market reports and local guides for
          Clyde, Fremont, Sandusky, Port Clinton, and the rest of Northwest
          Ohio. Check back soon, or reach out directly with questions in the
          meantime.
        </p>
      </section>
    </main>
  );
}
