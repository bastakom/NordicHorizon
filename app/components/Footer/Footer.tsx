import Image from 'next/image'

async function fetchConfig() {
  const data = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/generalsettings?version=published&token=${process.env.STORYBLOCK_API_TOKEN}`
  )
  if (!data) {
    return null
  }
  return data.json()
}

const Footer = async () => {
  const res = await fetchConfig()
  const {
    story: { content },
  } = res
  return (
    <div className="w-full p-10 mt-10 bg-[#16364D] justify-center flex">
      <Image
        src={content.footer_logo?.filename}
        width={153}
        height={99}
        alt="Nordic Horizon Travel Group"
      />
    </div>
  )
}

export default Footer
