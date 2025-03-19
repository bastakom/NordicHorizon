import { StoryblokStory, getStoryblokApi } from "@storyblok/react/rsc";
import { fetchConfig, fetchData, fetchSitemap } from "../lib/apireq";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export default async function page({
  params,
}: {
  params: { slug: string; lang: string };
}) {
  const pathname = params.slug;
  const slugName = pathname === undefined ? `hem` : pathname;

  const db = await fetchSitemap();
  try {
    const { data } = await fetchData(slugName, params.lang);
    const config = await fetchConfig();

    if (!data || !data.data || !data.data.story) {
      notFound();
    }

    return (
      <div>
        <StoryblokStory story={data?.data.story} config={config} />
      </div>
    );
  } catch (error) {
    notFound();
  }
}

const getMeta = async (slug: string) => {
  const res = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/${slug}?version=published&token=${process.env.STORYBLOCK_API_TOKEN}`,
    { cache: "no-store" }
  );
  return res.json();
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const pathname = params.slug;
  const slugName = !pathname || pathname === "" ? "home" : pathname;
  const data = await getMeta(slugName);

  return {
    title: data?.story.content?.SEO?.title || "Nordic Horizon Travelgroup",
    description: data?.story.content?.SEO?.description || "Default description",
  };
};
