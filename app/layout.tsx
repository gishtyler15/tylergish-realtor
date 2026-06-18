import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { siteConfig } from "@/data/cities";
import { realEstateAgentSchema } from "@/lib/schema";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | REALTOR® with ${siteConfig.brokerage} | Northwest Ohio`,
    template: `%s | ${siteConfig.name}, REALTOR®`,
  },
  description:
    "Tyler Gish is an Army veteran and REALTOR® with eXp Realty serving Clyde, Fremont, Sandusky, Port Clinton, and Northwest Ohio. Buyer and seller representation, VA loan expertise, and Lake Erie property specialists.",
  openGraph: {
    title: `${siteConfig.name} | REALTOR® with ${siteConfig.brokerage}`,
    description: siteConfig.tagline,
    url: siteConfig.url,
    siteName: `${siteConfig.name}, REALTOR®`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | REALTOR® with ${siteConfig.brokerage}`,
    description: siteConfig.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateAgentSchema()) }}
        />
        {gtmId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`,
            }}
          />
        )}
      </head>
      <body className="font-body antialiased pb-[68px] lg:pb-0">
        <SiteHeader />
        {children}
        <SiteFooter />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
