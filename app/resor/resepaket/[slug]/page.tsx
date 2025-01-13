import Form from "@/app/components/Form/Form";
import Gallery from "@/app/components/Gallery/Gallery";
import Hero from "@/app/components/Hero/Hero";
import ImageText from "@/app/components/ImageText/ImageText";
import Include from "@/app/components/Include/Include";
import { fetchPaket } from "@/app/lib/apireq";

const page = async ({ params }: { params: { slug: string } }) => {
  const res = await fetchPaket(params.slug);
  const { story } = res;

  return (
    <div>
      <Hero
        img={story.content?.image.filename}
        alt={story?.name}
        title={story.name}
        content={story.content}
      />
      <ImageText
        pageDesign={false}
        image={story.content.image_text.filename}
        imageID={story.uuid}
        content={story.content.text}
        title={story.content.image_title}
      />

      <Include include={story?.content?.included} />
      {story.content.gallery.length > 0 && (
        <Gallery data={story.content.gallery} />
      )}
      <div className="max-w-[100%] lg:max-w-[40%] text-center m-auto p-5 lg:p-5">
        {story.content.contact_text}
      </div>
      <Form title={story.content.title} />
    </div>
  );
};

export default page;
