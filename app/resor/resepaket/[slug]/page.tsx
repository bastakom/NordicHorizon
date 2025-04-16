import Form from "@/app/components/Form/Form";
import Gallery from "@/app/components/Gallery/Gallery";
import Hero from "@/app/components/Hero/Hero";
import ImageText from "@/app/components/ImageText/ImageText";
import Include from "@/app/components/Include/Include";
import { fetchPaket } from "@/app/lib/apireq";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const data = await fetchPaket(params.slug);

  return {
    title: data?.story?.content?.seo?.title || data?.story?.name,
    description:
      data?.story?.content?.seo?.description || "Default description",
    alternates: {
      canonical: `https://nhtravel.se/${data?.story?.full_slug}`,
    },
  };
};

const page = async ({ params }: { params: { slug: string } }) => {
  const res = await fetchPaket(params.slug);

  const { story } = res;

  return (
    <div>
      <h1 className="absolute w-[1px] h-[1px] p-0 m-[-1px] overflow-hidden clip-rect(0,0,0,0) whitespace-nowrap border-0">
        {res.story.name}
      </h1>
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
        big_text_block={story?.content.big_text_block}
        res={story.content}
        slug={story.slug}
      />

      <Include include={story?.content?.included} />
      {story.content.gallery.length > 0 && (
        <Gallery data={story.content.gallery} />
      )}
      <div className="max-w-[100%] lg:max-w-[40%] text-center m-auto p-5 lg:p-5">
        {story.content.contact_text}
      </div>
      <Form title={story.content.title} resend={story.content.resend_title} />
    </div>
  );
};

export default page;
