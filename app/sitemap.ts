import { MetadataRoute } from "next";
import { fetchSitemap } from "./lib/apireq";
import { url } from "inspector";

export default async function sitemap() {
  //   const sitemap = await fetchSitemap();
  const db = await fetch(
    `https://api.storyblok.com/v2/cdn/stories?cv=1736934265&token=${process.env.STORYBLOCK_API_TOKEN}`
  );
  const { stories } = await db.json();

  const postEntries: MetadataRoute.Sitemap = stories.map((item: any) => ({
    url: `https://nhtravel.se/${item.full_slug}`,
    lastModified: `${item.updated_at}`,
  }));

  return [
    { url: "https://nhtravel.se" },
    { url: "https://nhtravel.se/resor" },
    { url: "https://nhtravel.se/resepaket" },
    { url: "https://nhtravel.se/foretag-eventresor" },
    { url: "https://nhtravel.se/semester-solresor" },
    { url: "https://nhtravel.se/sport-upplevelseresor" },
    { url: "https://nhtravel.se/incoming-representation" },
    { url: "https://nhtravel.se/vad-kan-nordic-horizon-travel-gora-for-dig" },
    { url: "https://nhtravel.se/kontakt-teaminfo" },

    ...postEntries,
  ];
}
