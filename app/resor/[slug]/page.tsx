import Form from '@/app/components/Form/Form'
import TileCards from '@/app/components/TileCards/TileCards'
import { fetchAllPaket, fetchConfig, fetchResor } from '@/app/lib/apireq'
import Image from 'next/image'
import Link from 'next/link'
import { render } from 'storyblok-rich-text-react-renderer'

const page = async ({ params }: { params: { slug: string } }) => {
  const pathname = params.slug
  const res = await fetchResor(pathname)
  const paket = await fetchAllPaket()
  const config = await fetchConfig()

  const {
    story: {
      content: {
        title_1,
        content_1,
        title_2,
        content_2,
        title_3,
        content_3,
        form_title,
        link_1,
        link_2,
        link_3,
      },
    },
  } = config

  const matchedPaket = paket?.stories.filter((item: { uuid: string }) =>
    res?.story?.content?.paket?.includes(item.uuid)
  )

  return (
    <div>
      <div className="relative h-[60vh] w-full flex items-center justify-center">
        <div className="absolute h-full w-full flex items-center justify-center">
          {res?.story?.name && (
            <h1 className="text-[70px] text-white text-center z-10">
              {res.story.name}
            </h1>
          )}
        </div>
        <Image
          src={res?.story?.content?.hero_image.filename}
          alt={res?.story?.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-14 m-auto py-5 lg:py-28 px-5 lg:px-14 max-w-[100%] lg:max-w-[80%] justify-center">
        {matchedPaket &&
          Array.isArray(matchedPaket) &&
          matchedPaket.map((item: any) => {
            return (
              <div className="px-4 pt-4 pb-10 border-black  border w-full items-center justify-between text-center flex flex-col gap-8">
                <Image
                  src="https://a.storyblok.com/f/302737/760x432/1a75af83bf/phanthiet.png"
                  height={150}
                  width={300}
                  className="w-full"
                  alt={item.name}
                />
                <span className="font-light">
                  <h3 className="text-[30px]">{item.name}</h3>
                  <h2 className="text-[14px]">{item.content.category}</h2>
                </span>
                <span>{render(item.content.meta)}</span>
                <Link
                  className="button flex justify-center max-w-[150px]"
                  href={`/${item.full_slug}`}
                >
                  Läs mer
                </Link>
              </div>
            )
          })}
      </div>
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
      <Form title={form_title} />
    </div>
  )
}

export default page
