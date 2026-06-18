import { MetadataRoute } from "next";
import { cities, siteConfig } from "@/data/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "about",
    "buyers",
    "sellers",
    "va-loans",
    "contact",
    "home-valuation",
    "blog",
  ].map((path) => ({
    url: `${siteConfig.url}/${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const cityPages = cities.map((c) => ({
    url: `${siteConfig.url}/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...cityPages];
}
