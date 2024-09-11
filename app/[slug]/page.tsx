import Form from '../components/Form/Form'
import TileCards from '../components/TileCards/TileCards'
import ImageText from '../components/ImageText/ImageText'
import Hero from '../components/Hero/Hero'
import { fetchConfig } from '../lib/apireq'
import Team from '../components/Team/Team'

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
  const config = await fetchConfig()

  const {
    story: { content },
  } = res

  const {
    story: {
      content: {
        title_1,
        content_1,
        title_2,
        content_2,
        title_3,
        content_3,
        link_1,
        link_2,
        link_3,
      },
    },
  } = config

  return content.kontakt_pagedesign ? (
    <div>
      <Team data={content} />
      <Form title={content.form_text} />
    </div>
  ) : (
    <div>
      <Hero img={content.video.filename} />
      <ImageText
        pageDesign={content.homedesign_pagedesign}
        image={content.img_image.filename}
        imageID={content.img_image.id}
        content={content.content_image}
        title={content.title_image}
      />

      {content.homedesign_pagedesign ? null : (
        <TileCards
          cardTitleOne={title_1}
          cardContentOne={content_1}
          cardTitleTwo={title_2}
          cardContentTwo={content_2}
          cardTitleThree={title_3}
          cardContentThree={content_3}
          cardLinkOne={link_1.cached_url}
          cardLinkTwo={link_2.cached_url}
          cardLinkThree={link_3.cached_url}
        />
      )}
      <Form title={content.form_text} />
    </div>
  )
}
