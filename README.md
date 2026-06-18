# Tyler Gish Realtor — Northwest Ohio

Production-ready real estate marketing site for Tyler Gish, REALTOR® with eXp Realty, built with Next.js 15 (App Router), React, TypeScript, and Tailwind CSS.

## What's included

- Homepage with hero, about, service area cards, "why work with Tyler," dual lead capture (buyer + seller), testimonials, and final CTA
- Static pages: `/about`, `/buyers`, `/sellers`, `/va-loans`, `/contact`, `/home-valuation`, `/blog`
- Dynamic city landing pages for all 7 markets, generated from `data/cities.ts`:
  `/clyde-ohio-realtor`, `/fremont-ohio-realtor`, `/sandusky-ohio-realtor`, `/port-clinton-ohio-realtor`, `/bellevue-ohio-realtor`, `/marblehead-ohio-realtor`, `/norwalk-ohio-realtor`
- Lead capture API routes (`/api/lead`, `/api/contact`) that send an email via **Resend** and an SMS via **Twilio** to Tyler's phone
- SEO: dynamic metadata per page, Open Graph + Twitter cards, `sitemap.xml`, `robots.txt`, RealEstateAgent / LocalBusiness / FAQPage JSON-LD schema
- Sticky mobile CTA bar (call + schedule consultation), mobile hamburger nav
- Custom design system: navy / white / light gray / brass palette, Fraunces display serif + Inter body, and a signature minimal line-map of the 7-town service area used as a recurring visual motif

## Local development

This project was built without network access in the build sandbox, so dependencies have **not** been installed yet. To run it locally:

```bash
cd tylergish-realtor
npm install
cp .env.example .env.local
# fill in RESEND_API_KEY, TWILIO_* values in .env.local
npm run dev
```

Visit `http://localhost:3000`.

## Environment variables

See `.env.example`. Required for lead forms to actually deliver:

- `RESEND_API_KEY` — from resend.com, needed for email notifications
- `LEAD_NOTIFICATION_EMAIL` — defaults to gishtyler17@gmail.com
- `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_FROM_NUMBER` — from your existing Twilio account (same one used for Watchtower)
- `TYLER_NOTIFICATION_PHONE` — defaults to +14192173707
- `NEXT_PUBLIC_SITE_URL` — your final production domain, used for sitemap/canonical URLs
- `NEXT_PUBLIC_GTM_ID` — optional, adds Google Tag Manager site-wide if set

If Resend/Twilio env vars are not set, the API routes will simply skip that notification channel rather than failing — so the site is functional even before those are wired up.

## Deployment (Vercel — recommended)

Next.js 15 with App Router and API routes is a native fit for Vercel:

1. Push this project to a GitHub repo
2. Go to vercel.com → New Project → import the repo
3. Vercel auto-detects Next.js; no build settings needed
4. Add all variables from `.env.example` under Project Settings → Environment Variables
5. Deploy. Add your custom domain under Project Settings → Domains

## Deployment (Netlify — alternative)

Netlify can run Next.js via the official Next.js Runtime plugin:

1. Push to GitHub, create a new Netlify site from the repo
2. Build command: `npm run build`
3. Netlify should auto-detect Next.js and apply `@netlify/plugin-nextjs` — if not, add it manually in `netlify.toml`
4. Add the same environment variables under Site Settings → Environment Variables

## Things to finish before going fully live

- Add a real Google Maps embed API key in `/app/contact/page.tsx` (currently a placeholder embed URL)
- Replace placeholder testimonials on the homepage with real Google Reviews once available
- Set up the `leads@` and `contact@` sending addresses in Resend (currently using `tylergishrealtor.com` as the from-domain — update to match your actual verified sending domain)
- Add real blog/market report content under `/app/blog`
- Update `NEXT_PUBLIC_SITE_URL` to the real production domain so sitemap/canonical/OG URLs are correct
