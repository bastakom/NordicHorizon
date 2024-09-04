export async function fetchConfig() {
  const data = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/generalsettings?version=published&token=${process.env.STORYBLOCK_API_TOKEN}`
  )
  if (!data) {
    return null
  }
  return data.json()
}
