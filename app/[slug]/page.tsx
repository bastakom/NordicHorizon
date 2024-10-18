import Form from "../components/Form/Form";
import TileCards from "../components/TileCards/TileCards";
import ImageText from "../components/ImageText/ImageText";
import Hero from "../components/Hero/Hero";
import { fetchConfig } from "../lib/apireq";
import Team from "../components/Team/Team";

import { StoryblokStory, getStoryblokApi } from "@storyblok/react/rsc";

async function fetchData(slug: string, locale: string) {
  let sbParams = {
    version: "draft" as const,
    language: locale,
  };

  const storyblokApi = getStoryblokApi();
  const data = await storyblokApi.get(`cdn/stories/${slug}`, sbParams, {
    cache: "no-store",
  });

  return { data };
}

async function fetchPageData(slug: string) {
  const data = await fetch(
    `https:api.storyblok.com/v2/cdn/stories/${slug}?version=published&token=${process.env.STORYBLOCK_API_TOKEN}`
  );
  if (!data) {
    return null;
  }
  return data.json();
}

export default async function page({
  params,
}: {
  params: { slug: string; lang: string };
}) {
  const pathname = params.slug;
  const slugName = pathname === undefined ? `hem` : pathname;
  const res = await fetchPageData(slugName);
  const config = await fetchConfig();
  const { data } = await fetchData(slugName, params.lang);

  const { story: { content } = {} } = res;

  
  return (
    <div>
      <StoryblokStory story={data?.data.story} config={config} />
    </div>
  );
}
