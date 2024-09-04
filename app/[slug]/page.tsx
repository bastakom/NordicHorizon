import Image from 'next/image'
import Link from 'next/link'
import Form from '../components/Form/Form'

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
      {/* Hero */}
      {content.homedesign_pagedesign
        ? null
        : content.video?.filename && (
            <div className="h-[70vh] relative w-full">
              <Image
                className="object-cover"
                src={content.video.filename}
                fill
                alt={content.video.id}
              />
            </div>
          )}
      {/* End hero */}

      {/* Image Text */}
      <div
        className={`${
          content.homedesign_pagedesign ? 'bg-[#E9EFED]' : 'container m-auto '
        }`}
      >
        <div
          className={`${
            content.homedesign_pagedesign
              ? 'flex grid grid-cols-[55%_45%] items-center gap-10'
              : 'my-24 grid gap-20 px-20 mx-auto grid-cols-2 items-center'
          }`}
        >
          {content.img_image?.filename && (
            <div className="w-full relative h-[600px]">
              <Image
                src={content.img_image.filename}
                alt={content.img_image.id}
                // width={content.homedesign_pagedesign ? 700 : 600}
                // height={500}
                fill
                className='object-cover'
              />
            </div>
          )}
          <div className="grid gap-10">
            <h2
              className={`${
                content.homedesign_pagedesign
                  ? 'text-[35px] max-w-[70%] font-light leading-[42px]'
                  : 'text-[57px] max-w-[70%] font-light leading-[68px]'
              }`}
            >
              {content.title_image}
            </h2>
            <p className="text-[20px] max-w-[80%] font-light">
              {content.content_image}
            </p>
          </div>
        </div>
      </div>
      {/* Image text end */}

      {/* Tiles  */}
      {content.homedesign_pagedesign ? null : (
        <div className="grid grid-cols-3 gap-10 py-32 px-10 bg-[#16364D] text-white">
          <div className="text-center flex flex-col gap-8 justify-tiles items-center">
            <h2 className="text-[27px] max-w-[70%]">{content.group_1_title}</h2>
            <p className="max-w-[60%]">{content.group_1_content}</p>
            <Link className="button mt-2" href="">
              {content.group_1_linktitle}
            </Link>
          </div>
          <div className="text-center flex flex-col justify-tiles gap-8 items-center">
            <h2 className="text-[27px] max-w-[70%]">{content.group_2_title}</h2>
            <p className="max-w-[60%]">{content.group_2_content}</p>
            <Link className="button mt-2" href="">
              {content.group_2_linktitle}
            </Link>
          </div>
          <div className="text-center  flex flex-col justify-tiles gap-8 items-center">
            <h2 className="text-[27px] max-w-[70%]">{content.group_3_title}</h2>
            <p className="max-w-[60%]">{content.group_3_content}</p>
            <Link className="button mt-2" href="">
              {content.group_3_linktitle}
            </Link>
          </div>
        </div>
      )}
      {/* end tiles */}

      {/* form */}
      <Form title={content.form_text} />
      {/* end form */}
    </div>
  )
}
