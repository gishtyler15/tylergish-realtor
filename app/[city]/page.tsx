import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { cities, getCityBySlug, siteConfig } from "@/data/cities";
import BuyerLeadForm from "@/components/BuyerLeadForm";
import { localBusinessSchema } from "@/lib/schema";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return {};
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    keywords: city.keywords,
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `${siteConfig.url}/${city.slug}`,
    },
    alternates: {
      canonical: `${siteConfig.url}/${city.slug}`,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return notFound();

  const schema = {
    ...localBusinessSchema(),
    name: `Tyler Gish, REALTOR® — ${city.name}, OH`,
    areaServed: city.name,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <section className="bg-navy-800 text-white">
        <div className="container-page py-16 md:py-20">
          <p className="eyebrow text-brass-400 mb-4">
            {city.county} &middot; Northwest Ohio
          </p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight max-w-3xl">
            {city.name}, Ohio REALTOR®
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            {city.heroLine}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="rounded-sm bg-brass px-6 py-3 text-sm font-semibold text-white hover:bg-brass-700 transition-colors"
            >
              Call {siteConfig.phone}
            </a>
            <a
              href="#lead-form"
              className="rounded-sm border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      <div className="container-page py-14 md:py-16 grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-12">
        <div className="space-y-12">
          {/* OVERVIEW */}
          <div>
            <h2 className="font-display text-2xl text-navy mb-3">
              Living in {city.name}
            </h2>
            <p className="text-slate leading-relaxed">{city.overview}</p>
          </div>

          {/* MARKET */}
          <div>
            <h2 className="font-display text-2xl text-navy mb-3">
              {city.name} Housing Market
            </h2>
            <p className="text-slate leading-relaxed mb-3">
              {city.marketSummary}
            </p>
            <p className="text-slate leading-relaxed">{city.medianPriceNote}</p>
          </div>

          {/* WHY PEOPLE MOVE */}
          <div>
            <h2 className="font-display text-2xl text-navy mb-4">
              Why People Move To {city.name}
            </h2>
            <ul className="space-y-3">
              {city.whyPeopleMove.map((reason) => (
                <li key={reason} className="flex gap-3 text-slate leading-relaxed">
                  <span className="text-brass-700 font-bold mt-0.5">—</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ATTRACTIONS */}
          <div>
            <h2 className="font-display text-2xl text-navy mb-4">
              Nearby Attractions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {city.attractions.map((a) => (
                <div key={a.name} className="border border-slate-100 rounded-sm p-4">
                  <p className="font-semibold text-navy text-sm mb-1">{a.name}</p>
                  <p className="text-sm text-slate">{a.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SCHOOLS */}
          <div>
            <h2 className="font-display text-2xl text-navy mb-3">Schools</h2>
            <ul className="text-slate space-y-1.5">
              {city.schools.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* LIFESTYLE */}
          <div>
            <h2 className="font-display text-2xl text-navy mb-3">
              Local Lifestyle
            </h2>
            <p className="text-slate leading-relaxed">{city.lifestyle}</p>
          </div>
        </div>

        {/* SIDEBAR LEAD FORM */}
        <aside id="lead-form" className="lg:sticky lg:top-28 self-start">
          <div className="rounded-sm border border-slate-100 p-6 md:p-7 shadow-sm">
            <h3 className="font-display text-xl text-navy mb-1">
              Looking in {city.name}?
            </h3>
            <p className="text-sm text-slate mb-5">
              Tell Tyler what you&apos;re looking for and he&apos;ll follow
              up personally.
            </p>
            <BuyerLeadForm defaultArea={city.name} />
            <div className="mt-6 pt-6 border-t border-slate-100 text-center">
              <p className="text-sm text-slate mb-2">Prefer to talk now?</p>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="font-semibold text-navy hover:text-brass transition-colors"
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </aside>
      </div>

      {/* OTHER CITIES */}
      <section className="bg-navy-50 py-16">
        <div className="container-page">
          <h2 className="font-display text-2xl text-navy mb-6">
            Also Serving Nearby
          </h2>
          <div className="flex flex-wrap gap-3">
            {cities
              .filter((c) => c.slug !== city.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/${c.slug}`}
                  className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-navy hover:border-brass-400 transition-colors"
                >
                  {c.name}, OH
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
