import Link from "next/link";
import { cities, siteConfig } from "@/data/cities";

export default function SiteFooter() {
  return (
    <footer className="bg-navy-800 text-white">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="font-display text-2xl mb-3">Tyler Gish</div>
            <p className="text-sm text-white/60 mb-4">
              REALTOR® with eXp Realty. Army veteran serving Northwest Ohio
              buyers and sellers with integrity and clear communication.
            </p>
            <div className="flex gap-4 text-white/60">
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-brass-400 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.16 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.45 2.91h-2.33V22c4.78-.78 8.44-4.94 8.44-9.94Z"/></svg>
              </a>
              <a href="https://youtube.com" aria-label="YouTube" className="hover:text-brass-400 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6Z"/></svg>
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-brass-400 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.06 2 .25 2.47.42a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.17.46.36 1.3.42 2.47.06 1.25.07 1.65.07 4.85s0 3.6-.07 4.85c-.06 1.17-.25 2-.42 2.47a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.46.17-1.3.36-2.47.42-1.25.06-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.17-.06-2-.25-2.47-.42a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.17-.46-.36-1.3-.42-2.47C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.06-1.17.25-2 .42-2.47A4.9 4.9 0 0 1 3.84 3a4.9 4.9 0 0 1 1.77-1.15c.46-.17 1.3-.36 2.47-.42C9.4 2.2 9.8 2.2 12 2.2Zm0 1.8c-3.14 0-3.52 0-4.75.07-1.02.05-1.58.21-1.94.35a3.1 3.1 0 0 0-1.15.75 3.1 3.1 0 0 0-.75 1.15c-.14.36-.3.92-.35 1.94C3 9.48 3 9.86 3 13s0 3.52.07 4.75c.05 1.02.21 1.58.35 1.94.16.41.39.78.75 1.15.36.36.73.59 1.15.75.36.14.92.3 1.94.35 1.23.07 1.61.07 4.75.07s3.52 0 4.75-.07c1.02-.05 1.58-.21 1.94-.35.41-.16.78-.39 1.15-.75.36-.36.59-.73.75-1.15.14-.36.3-.92.35-1.94.07-1.23.07-1.61.07-4.75s0-3.52-.07-4.75c-.05-1.02-.21-1.58-.35-1.94a3.1 3.1 0 0 0-.75-1.15 3.1 3.1 0 0 0-1.15-.75c-.36-.14-.92-.3-1.94-.35C15.52 4 15.14 4 12 4Zm0 3.6a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8Zm0 1.8a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2Zm5.6-3.45a1.26 1.26 0 1 1-2.52 0 1.26 1.26 0 0 1 2.52 0Z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <div className="eyebrow text-brass-400 mb-4">Service Areas</div>
            <ul className="space-y-2 text-sm text-white/70">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`} className="hover:text-white transition-colors">
                    {c.name}, Ohio
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow text-brass-400 mb-4">Explore</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/buyers" className="hover:text-white transition-colors">For Buyers</Link></li>
              <li><Link href="/sellers" className="hover:text-white transition-colors">For Sellers</Link></li>
              <li><Link href="/va-loans" className="hover:text-white transition-colors">VA Loans</Link></li>
              <li><Link href="/home-valuation" className="hover:text-white transition-colors">Get Home Value</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Market Reports & Blog</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Tyler</Link></li>
            </ul>
          </div>

          <div>
            <div className="eyebrow text-brass-400 mb-4">Get In Touch</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-white/50 pt-2">eXp Realty</li>
              <li className="text-white/50">Serving Northwest Ohio</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} Tyler Gish, REALTOR®. {siteConfig.brokerage}. All
            information deemed reliable but not guaranteed. Equal Housing
            Opportunity.
          </p>
          <p>Proudly serving Northwest Ohio veterans and families.</p>
        </div>
      </div>
    </footer>
  );
}
