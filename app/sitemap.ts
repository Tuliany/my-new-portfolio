import type { MetadataRoute } from "next";
import { locales } from "@/lib/cv";
import { profile } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: profile.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...locales.map((locale) => ({
      url: `${profile.url}/cv/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
