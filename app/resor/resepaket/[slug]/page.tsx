import Form from '@/app/components/Form/Form'
import Hero from '@/app/components/Hero/Hero'
import ImageText from '@/app/components/ImageText/ImageText'
import Include from '@/app/components/Include/Include'
import { fetchPaket } from '@/app/lib/apireq'

const page = async ({ params }: { params: { slug: string } }) => {
  const res = await fetchPaket(params.slug)
  const { story } = res
  return (
    <div>
      <Hero
        img={story.content?.image.filename}
        alt={story?.name}
        title={story.name}
      />
      <ImageText
        pageDesign={false}
        image={story.content.image_text.filename}
        imageID={story.uuid}
        content={story.content.text}
        title={story.content.image_title}
      />

      <Include include={story.content.included} />
      <Form title={story.content.title} />
    </div>
  )
}

export default page
