import type { Metadata } from "next";
import { siteConfig } from "@/data/cities";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Tyler Gish | Northwest Ohio Realtor",
  description:
    "Get in touch with Tyler Gish, REALTOR® with eXp Realty serving Northwest Ohio. Call, email, or send a message to start the conversation.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-white border-b border-slate-100">
        <div className="container-page py-16 md:py-20">
          <p className="eyebrow mb-4">Contact</p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight text-navy max-w-2xl">
            Let&apos;s talk about your next move.
          </h1>
        </div>
      </section>

      <section className="container-page py-16 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="font-display text-2xl text-navy mb-6">
            Send Tyler a Message
          </h2>
          <ContactForm />
        </div>

        <div className="space-y-8">
          <div className="rounded-2xl border border-slate-100 p-7">
            <h3 className="font-display text-xl text-navy mb-4">
              Direct Contact
            </h3>
            <div className="space-y-3">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center gap-3 text-navy font-semibold hover:text-brass transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-navy font-semibold hover:text-brass transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 7L2 7" />
                </svg>
                {siteConfig.email}
              </a>
            </div>
            <div className="mt-5 pt-5 border-t border-slate-100 text-sm text-slate">
              <p>{siteConfig.brokerage}</p>
              <p>Serving Northwest Ohio</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-100">
            <iframe
              title="Northwest Ohio service area map"
              width="100%"
              height="320"
              loading="lazy"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?key=&q=Sandusky,OH"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-xs text-slate-400">
            Map embed requires a Google Maps API key to be added at deployment.
          </p>
        </div>
      </section>
    </main>
  );
}
