import { MetadataRoute } from "next";

export default async function sitemap() {
  const db = await fetch(
    `https://api.storyblok.com/v2/cdn/stories?cv=1736934265&token=${process.env.STORYBLOCK_API_TOKEN}`
  );

  const dbresor = await fetch(`https://api.storyblok.com/v2/cdn/stories?cv=1742462431&starts_with=resor&excluding_slugs=resor/resepaket*&token=${process.env.STORYBLOCK_API_TOKEN}`)

  const { stories } = await db.json();
  const { stories: resor } = await dbresor.json();

  const postEntries: MetadataRoute.Sitemap = stories.map((item: any) => ({
    url: `https://nhtravel.se/${item.full_slug}`,
    lastModified: `${item.updated_at}`,
  }));


  const resorEntries: MetadataRoute.Sitemap = resor.map((item: any) => ({
    url: `https://nhtravel.se/resor/${item.slug}`,
    lastModified: `${item.updated_at}`,
  }))

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
    ...resorEntries,
  ];
}
