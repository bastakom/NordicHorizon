import type { MetadataRoute } from "next";

export default async function sitemap(
  id: number
): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://nhtravel.se",
      priority: 1,
    },
    {
      url: "https://nhtravel.se/resor",
      priority: 0.5,
    },
    {
      url: "https://nhtravel.se/resepaket",
      priority: 0.5,
    },
    {
      url: "https://www.nhtravel.se/foretag-eventresor",
      priority: 0.5,
    },
    {
      url: "https://www.nhtravel.se/semester-solresor",
      priority: 0.5,
    },
    {
      url: "https://www.nhtravel.se/sport-upplevelseresor",
      priority: 0.5,
    },
    {
      url: "https://www.nhtravel.se/incoming-representation",
      priority: 0.5,
    },
  ];
}
