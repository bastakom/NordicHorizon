import { fetchAllPaket, fetchResor } from '@/app/lib/apireq'
import Image from 'next/image'
import Link from 'next/link'
import { render } from 'storyblok-rich-text-react-renderer'

const page = async ({ params }: { params: { slug: string } }) => {
  const pathname = params.slug
  const res = await fetchResor(pathname)
  const paket = await fetchAllPaket()

  const {
    story: { name, content },
  } = res

  const matchedPaket = paket?.stories.filter((item: { uuid: string }) =>
    content?.paket?.includes(item.uuid)
  )

  return (
    <div>
      <div className="relative h-[60vh] w-full flex items-center justify-center">
        <div className="absolute h-full w-full flex items-center justify-center">
          <h1 className="text-[70px] text-white text-center z-10">{name}</h1>
        </div>
        <Image src={content.hero_image.filename} alt={name} fill />
      </div>
      <div className="flex gap-14 justify-around p-14">
        {matchedPaket.map((item: any) => {
          console.log(item.content)
          return (
            <div className="h-[349px] border-gray-100 border w-full items-center text-center flex flex-col gap-10">
              <Image src="" height={150} width={300} alt={item.name} />
              <h2 className="text-[30px] font-light">{item.name}</h2>
              {/* <span>{render(item.content.text)}</span> */}
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
    </div>
  )
}

export default page
