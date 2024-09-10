export async function fetchConfig() {
  const data = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/generalsettings?version=published&token=${process.env.STORYBLOCK_API_TOKEN}`
  )
  if (!data) {
    return null
  }
  return data.json()
}

export async function fetchResor(slug: string) {
  const data = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/resor/${slug}?version=published&token=${process.env.STORYBLOCK_API_TOKEN}`
  )
  if (!data) {
    return null
  }
  return data.json()
}

export async function fetchAllResor() {
  const data = await fetch(
    `https://api.storyblok.com/v2/cdn/stories?cv=1725970996&starts_with=resor/&excluding_slugs=resor/resepaket/*&token=${process.env.STORYBLOCK_API_TOKEN}&version=published`
  )
  if (!data) {
    return null
  }
  return data.json()
}

export async function fetchAllPaket() {
  const data = await fetch(
    `https://api.storyblok.com/v2/cdn/stories?cv=1725970996&starts_with=resor/resepaket&token=${process.env.STORYBLOCK_API_TOKEN}&version=published`
  )
  if (!data) {
    return null
  }
  return data.json()
}
