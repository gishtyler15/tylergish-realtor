import { siteConfig } from "@/data/cities";

export function realEstateAgentSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteConfig.name,
    jobTitle: "REALTOR®",
    worksFor: {
      "@type": "Organization",
      name: siteConfig.brokerage,
    },
    telephone: siteConfig.phoneRaw,
    email: siteConfig.email,
    url: siteConfig.url,
    areaServed: [
      "Clyde, OH",
      "Fremont, OH",
      "Bellevue, OH",
      "Sandusky, OH",
      "Port Clinton, OH",
      "Marblehead, OH",
      "Lakeside-Marblehead, OH",
      "Norwalk, OH",
    ],
    address: {
      "@type": "PostalAddress",
      addressRegion: "OH",
      addressCountry: "US",
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${siteConfig.name} - ${siteConfig.brokerage}`,
    telephone: siteConfig.phoneRaw,
    email: siteConfig.email,
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      addressRegion: "OH",
      addressCountry: "US",
    },
    areaServed: "Northwest Ohio",
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
