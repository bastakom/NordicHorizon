import Image from 'next/image'
import Link from 'next/link'
import Form from '../components/Form/Form'
import TileCards from '../components/TileCards/TileCards'
import ImageText from '../components/ImageText/ImageText'
import Hero from '../components/Hero/Hero'

async function fetchPageData(slug: string) {
  const data = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/${slug}?version=published&token=${process.env.STORYBLOCK_API_TOKEN}`
  )
  if (!data) {
    return null
  }
  return data.json()
}

export default async function page({
  params,
}: {
  params: { slug: string; lang: string }
}) {
  const pathname = params.slug
  const slugName = pathname === undefined ? `hem` : pathname
  const res = await fetchPageData(slugName)

  const {
    story: { content },
  } = res

  return (
    <div>
      <Hero img={content.video.filename} />
      {/* Image Text */}
      <ImageText
        pageDesign={content.homedesign_pagedesign}
        image={content.img_image.filename}
        imageID={content.img_image.id}
        content={content.content_image}
        title={content.title_image}
      />

      {content.homedesign_pagedesign ? null : (
        <TileCards
          cardTitleOne={content.group_1_title}
          cardContentOne={content.group_1_content}
          cardTitleTwo={content.group_2_title}
          cardContentTwo={content.group_2_content}
          cardTitleThree={content.group_3_title}
          cardContentThree={content.group_3_content}
        />
      )}
      <Form title={content.form_text} />
    </div>
  )
}
