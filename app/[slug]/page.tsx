import { StoryblokStory, getStoryblokApi } from "@storyblok/react/rsc";
import { fetchConfig } from "../lib/apireq";

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

export default async function page({
  params,
}: {
  params: { slug: string; lang: string };
}) {
  const pathname = params.slug;
  const slugName = pathname === undefined ? `hem` : pathname;
  const { data } = await fetchData(slugName, params.lang);
  const config = await fetchConfig();

  return (
    <div>
      <StoryblokStory story={data?.data.story} config={config} />
    </div>
  );
}
