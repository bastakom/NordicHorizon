import ImageText from "@/app/components/ImageText/ImageText";
import { fetchSport } from "@/app/lib/apireq";
import { Metadata } from "next";

type PageProps = {
  params: {
    slug: string;
  };
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const pathname = params.slug;
  const data = await fetchSport(pathname);

  return {
    title: data?.story?.content?.SEO?.title || data?.story?.name,
    description:
      data?.story?.content?.SEO?.description || "Default description",
  };
};

const Page = async ({ params }: PageProps) => {
  const pathname = params.slug;

  const sport = await fetchSport(pathname);

  return (
    <>
      <ImageText
        pageDesign={sport?.story?.content?.homedesign_pagedesign}
        image={sport?.story?.content?.img_image.filename}
        imageID={sport?.img_image?.id}
        title={sport?.story?.content?.title_image}
        content={sport?.story?.content.content_image}
        one_block_image_text={sport?.one_block_image_text}
        form_text={sport?.story?.content.form_text}
        resend_title={sport?.story?.content.resend_title}
      />
    </>
  );
};

export default Page;
