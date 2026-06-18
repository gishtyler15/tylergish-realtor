import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/cities";

export const metadata: Metadata = {
  title: "About Tyler Gish | Army Veteran & Northwest Ohio REALTOR®",
  description:
    "Meet Tyler Gish — Army veteran, husband, father, and REALTOR® with eXp Realty serving Northwest Ohio buyers and sellers with integrity and clear communication.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="container-page py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="/images/tyler-headshot.png"
              alt="Tyler Gish, REALTOR® with eXp Realty"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow mb-4">About Tyler</p>
            <h1 className="font-display text-4xl md:text-5xl text-navy leading-tight mb-6">
              Army Veteran. Husband. Father. Northwest Ohio REALTOR®.
            </h1>
            <div className="space-y-4 text-slate text-[1.05rem] leading-relaxed">
              <p>
                Tyler Gish served in the United States Army before
                transitioning into real estate with eXp Realty. That
                background shapes how he runs his business today — with
                discipline, direct communication, and a commitment to
                following through on what he says he&apos;ll do.
              </p>
              <p>
                Outside of work, Tyler is a husband and father building a
                life right here in Northwest Ohio. He understands what it
                means to put down roots in a community, and he brings that
                same care to every client relationship — whether
                that&apos;s a first-time buyer nervous about the process or
                a longtime homeowner ready to sell.
              </p>
              <p>
                Tyler specializes in serving first-time home buyers, fellow
                veterans using VA loan benefits, families relocating to or
                within the region, home sellers, and buyers looking for
                lake property or a vacation home along the Lake Erie
                shoreline.
              </p>
              <p>
                His approach is simple: communicate clearly, negotiate hard
                on your behalf, and treat every transaction with the same
                level of seriousness regardless of price point.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-navy px-7 py-3.5 text-center text-sm font-semibold text-white hover:bg-navy-600 transition-colors"
              >
                Schedule a Consultation
              </Link>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="rounded-full border border-navy/20 px-7 py-3.5 text-center text-sm font-semibold text-navy hover:bg-navy-50 transition-colors"
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-50 py-16">
        <div className="container-page grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { label: "Markets Served", value: "7" },
            { label: "Brokerage", value: "eXp Realty" },
            { label: "Specialty", value: "VA & Veteran Buyers" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl text-navy mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-slate uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
