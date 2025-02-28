import ImageText from "@/app/components/ImageText/ImageText";
import { fetchSport } from "@/app/lib/apireq";

type PageProps = {
  params: {
    slug: string;
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
      />
    </>
  );
};

export default Page;
