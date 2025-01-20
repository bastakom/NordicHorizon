import { getStoryblokApi } from "@storyblok/react/rsc";

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
=======
  const data = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/resor/${slug}?version=published&token=${process.env.STORYBLOCK_API_TOKEN}`
  );
  if (!data) {
    return null;
  }
  return data.json();
}


export async function fetchAllResor() {
  const data = await fetch(
    `https://api.storyblok.com/v2/cdn/stories?cv=1725970996&starts_with=resor/&excluding_slugs=resor/resepaket/*&token=${process.env.STORYBLOCK_API_TOKEN}&version=published`
  );
  if (!data) {
    return null;
  }
  return data.json();
}

export async function fetchPaket(slug: string) {
  const data = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/resor/resepaket/${slug}?version=published&token=${process.env.STORYBLOCK_API_TOKEN}`
  );
  if (!data) {
    return null;
  }
  return data.json();
}

export async function fetchAllPaket() {
  const data = await fetch(
    `https://api.storyblok.com/v2/cdn/stories?cv=1725970996&starts_with=resor/resepaket&token=${process.env.STORYBLOCK_API_TOKEN}&version=published`
  );
  if (!data) {
    return null;
  }
  return data.json();
}
