import { StoryblokStory, getStoryblokApi } from "@storyblok/react/rsc";
import { fetchConfig, fetchData, fetchSitemap } from "../lib/apireq";
import { notFound } from "next/navigation";

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
