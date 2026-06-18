import Link from "next/link";
import Image from "next/image";
import { cities, siteConfig } from "@/data/cities";
import BuyerLeadForm from "@/components/BuyerLeadForm";
import SellerLeadForm from "@/components/SellerLeadForm";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-page relative pt-14 pb-16 md:pt-20 md:pb-20 grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-14 items-center">
          <div className="animate-fade-up order-2 lg:order-1">
            <p className="eyebrow mb-5">
              Army Veteran &middot; REALTOR®
            </p>
            <h1 className="font-display text-[2.6rem] sm:text-5xl md:text-[3.4rem] leading-[1.06] text-navy tracking-tight">
              Helping Northwest Ohio families buy and sell with confidence.
            </h1>
            <p className="mt-6 text-lg text-slate max-w-md leading-relaxed">
              Serving Clyde, Fremont, Sandusky, Port Clinton, and the
              surrounding communities — with the same standards Tyler held
              to in the Army.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/buyers"
                className="rounded-full bg-navy px-7 py-3.5 text-center text-sm font-semibold text-white hover:bg-navy-600 transition-colors"
              >
                Search Homes
              </Link>
              <Link
                href="/home-valuation"
                className="rounded-full border border-navy/15 px-7 py-3.5 text-center text-sm font-semibold text-navy hover:bg-navy-50 transition-colors"
              >
                Get Home Value
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.14em] text-slate-400">
                Member of
              </span>
              <Image
                src="/images/exp-realty-logo.png"
                alt="eXp Realty"
                width={110}
                height={58}
                className="h-7 w-auto object-contain"
              />
            </div>
          </div>

          <div className="relative animate-fade-in justify-self-center order-1 lg:order-2">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/tyler-headshot.png"
                alt="Tyler Gish, REALTOR® with eXp Realty"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* QUIET STAT STRIP */}
        <div className="border-y border-slate-100 bg-navy-50/60">
          <div className="container-page py-7 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="font-display text-2xl md:text-3xl text-navy">7</p>
              <p className="text-xs md:text-sm text-slate mt-1">
                Markets served
              </p>
            </div>
            <div className="border-x border-slate-200">
              <p className="font-display text-2xl md:text-3xl text-navy">eXp</p>
              <p className="text-xs md:text-sm text-slate mt-1">Realty</p>
            </div>
            <div>
              <p className="font-display text-2xl md:text-3xl text-navy">VA</p>
              <p className="text-xs md:text-sm text-slate mt-1">
                Loan specialist
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="container-page py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="eyebrow mb-4">About Tyler</p>
            <h2 className="font-display text-3xl md:text-4xl text-navy leading-tight">
              A veteran&apos;s standard, applied to real estate.
            </h2>
          </div>
          <div className="text-slate space-y-4 text-[1.05rem] leading-relaxed">
            <p>
              Tyler Gish served in the U.S. Army before becoming a REALTOR®
              with eXp Realty. He&apos;s a husband and father based right
              here in Northwest Ohio, and he built his business on the same
              values he carried in uniform: integrity, preparation, and
              following through.
            </p>
            <p>
              Whether you&apos;re buying your first home, using a VA loan,
              selling a property you&apos;ve owned for decades, or searching
              for a place on Lake Erie, Tyler treats every transaction like
              it&apos;s the only one that matters — because to you, it is.
            </p>
          </div>
        </div>
      </section>

      <div className="container-page">
        <div className="section-divider" />
      </div>

      {/* SERVICE AREAS */}
      <section className="container-page py-20 md:py-24">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow mb-4">Where Tyler Works</p>
          <h2 className="font-display text-3xl md:text-4xl text-navy leading-tight">
            Seven communities. One local agent who knows all of them.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/${city.slug}`}
              className="group relative overflow-hidden rounded-xl border border-slate-100 bg-white p-6 hover:border-brass-400 hover:shadow-lg transition-all"
            >
              <p className="font-display text-xl text-navy mb-1.5">
                {city.name}
              </p>
              <p className="text-xs text-slate uppercase tracking-wide mb-3">
                {city.county}
              </p>
              <p className="text-sm text-slate leading-relaxed">
                {city.heroLine}
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-brass-700 group-hover:gap-2 gap-1 transition-all">
                View market guide →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <div className="container-page">
        <div className="section-divider" />
      </div>

      {/* WHY WORK WITH TYLER */}
      <section className="bg-navy-50 py-20 md:py-24">
        <div className="container-page">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">Why Work With Tyler</p>
            <h2 className="font-display text-3xl md:text-4xl text-navy leading-tight">
              What you get on day one — and every day after.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Veteran-Owned Business",
                body: "Tyler runs his business the way he was trained to operate: with discipline, accountability, and respect for your time.",
              },
              {
                title: "Local Market Knowledge",
                body: "Tyler lives and works in Northwest Ohio. He knows these streets, these schools, and these markets from the inside.",
              },
              {
                title: "Personalized Service",
                body: "No call centers, no hand-offs to a junior agent. You work directly with Tyler from first conversation to closing day.",
              },
              {
                title: "Strong Communication",
                body: "You'll always know where things stand. Tyler responds quickly and explains every step in plain language.",
              },
              {
                title: "Skilled Negotiation",
                body: "Whether you're making an offer or fielding one, Tyler negotiates to protect your interests and your bottom line.",
              },
              {
                title: "Backed by eXp Realty",
                body: "Tyler pairs hands-on local service with the technology, reach, and resources of one of the nation's largest brokerages.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-display text-lg text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE */}
      <section id="lead-capture" className="container-page py-20 md:py-24">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="eyebrow mb-4">Get Started</p>
          <h2 className="font-display text-3xl md:text-4xl text-navy leading-tight">
            Tell Tyler what you&apos;re looking for.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-slate-100 p-7 md:p-8">
            <h3 className="font-display text-xl text-navy mb-1">
              I&apos;m Buying
            </h3>
            <p className="text-sm text-slate mb-6">
              Tell Tyler what you&apos;re looking for and where.
            </p>
            <BuyerLeadForm />
          </div>
          <div className="rounded-2xl border border-slate-100 p-7 md:p-8">
            <h3 className="font-display text-xl text-navy mb-1">
              I&apos;m Selling
            </h3>
            <p className="text-sm text-slate mb-6">
              Get a no-pressure home value estimate.
            </p>
            <SellerLeadForm />
          </div>
        </div>
      </section>

      <div className="container-page">
        <div className="section-divider" />
      </div>

      {/* TESTIMONIALS */}
      <section className="bg-navy-50 py-20 md:py-24">
        <div className="container-page">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">What Clients Say</p>
            <h2 className="font-display text-3xl md:text-4xl text-navy leading-tight">
              Reviews from Northwest Ohio buyers and sellers.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Tyler walked us through every step of our first home purchase and never made us feel rushed. We always knew what was happening next.",
                name: "Placeholder Review",
                detail: "First-time buyer, Fremont",
              },
              {
                quote:
                  "As a veteran himself, Tyler understood exactly what we needed for our VA loan and made the process painless from start to finish.",
                name: "Placeholder Review",
                detail: "VA loan buyer, Clyde",
              },
              {
                quote:
                  "Our house sold above asking in nine days. Tyler's pricing strategy and marketing made all the difference.",
                name: "Placeholder Review",
                detail: "Home seller, Sandusky",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-7 border border-slate-100">
                <div className="flex gap-1 text-brass mb-4" aria-hidden>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21Z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-slate leading-relaxed mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-sm font-semibold text-navy">{t.name}</p>
                <p className="text-xs text-slate-400">{t.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-6">
            Reviews shown are placeholders pending live Google Reviews integration.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-page py-20 md:py-28 text-center">
        <h2 className="font-display text-3xl md:text-5xl text-navy leading-tight max-w-2xl mx-auto">
          Ready To Make Your Next Move?
        </h2>
        <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/contact"
            className="rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-white hover:bg-navy-600 transition-colors"
          >
            Schedule Consultation
          </Link>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="rounded-full border border-navy/20 px-8 py-3.5 text-sm font-semibold text-navy hover:bg-navy-50 transition-colors"
          >
            Contact Tyler
          </a>
        </div>
      </section>
    </main>
  );
}
