import { getStoryblokApi } from "@storyblok/react/rsc";
import { redirect } from "next/navigation";

export async function fetchData(slug: string, locale: string) {
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

export async function fetchConfig() {
  let sbParams = {
    version: "draft" as const,
  };

  const storyblokApi = getStoryblokApi();
  const data = await storyblokApi.get(`cdn/stories/generalsettings`, sbParams, {
    cache: "no-store",
  });

  const config = { story: data.data.story };

  return config;
}
export async function fetchSitemap() {
  let sbParams = {
    version: "draft" as const,
  };

  const storyblokApi = getStoryblokApi();
  const res = await storyblokApi.get(`cdn/stories/`, sbParams, {
    cache: "no-store",
  });

  const data = res.data.stories.map((story: any) => {
    return {
      id: story.id,
      slug: story.slug,
    };
  });

  return data;
}

export async function fetchResor(slug: string) {
  const storyblokApi = getStoryblokApi();

  try {
    const data = await storyblokApi.get(`cdn/stories/resor/${slug}`, {
      version: "draft" as const,
      token: process.env.STORYBLOCK_API_TOKEN,
    });

    if (!data || !data.data || !data.data) {
      return null;
    }
    return data.data;
  } catch (error) {
    console.error("Error fetching resor:", error);
    return null;
  }
}

export async function fetchAllResor() {
  let sbParams = {
    version: "draft" as const,
    token: process.env.STORYBLOCK_API_TOKEN,
    starts_with: "resor/",
    excluding_slugs: "resor/resepaket/*",
  };

  const client = getStoryblokApi();
  try {
    const data = await client.get(`cdn/stories/`, sbParams);

    if (!data) {
      throw new Error("Not Found");
    }

    return data.data;
  } catch (error: any) {
    if (error.response && error.response.status === 500) {
      redirect("/500");
    } else {
      throw error;
    }
  }
}

export async function fetchPaket(slug: string) {
  let sbParams = {
    version: "draft" as const,
    token: process.env.STORYBLOCK_API_TOKEN,
  };

  const client = getStoryblokApi();
  try {
    const data = await client.get(
      `cdn/stories/resor/resepaket/${slug}`,
      sbParams
    );

    if (!data) {
      throw new Error("Not Found");
    }

    return data.data;
  } catch (error: any) {
    if (error.response && error.response.status === 500) {
      redirect("/500");
    } else {
      throw error;
    }
  }
}

export async function fetchAllPaket() {
  let sbParams = {
    version: "draft" as const,
    token: process.env.STORYBLOCK_API_TOKEN,
    starts_with: "resor/resepaket",
  };

  const client = getStoryblokApi();
  try {
    const data = await client.get(`cdn/stories/`, sbParams);

    if (!data) {
      throw new Error("Not Found");
    }

    return data.data.stories;
  } catch (error: any) {
    if (error.response && error.response.status === 500) {
      redirect("/500");
    } else {
      throw error;
    }
  }
}
