import Form from "@/app/components/Form/Form";
import TileCards from "@/app/components/TileCards/TileCards";
import {
  fetchAllPaket,
  fetchConfig,
  fetchPaket,
  fetchResor,
} from "@/app/lib/apireq";
import { FaqBlock } from "@/components/ui/faq-block";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const pathname = params.slug;
  const data = await fetchResor(pathname);

  return {
    title: data?.story?.content?.seo?.title || data?.story?.name,
    description:
      data?.story?.content?.seo?.description || "Default description",
  };
};

const page = async ({ params }: { params: { slug: string } }) => {
  const pathname = params.slug;
  const res = await fetchResor(pathname);
  const paket = await fetchAllPaket();
  const config = await fetchConfig();

  console.log(res);

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
        resend_title,
      },
    },
  } = config;

  const matchedPaket = paket?.filter((item: { uuid: string }) =>
    res?.story?.content?.paket?.includes(item.uuid)
  );

  return (
    <div>
      <h1 className="absolute w-[1px] h-[1px] p-0 m-[-1px] overflow-hidden clip-rect(0,0,0,0) whitespace-nowrap border-0">
        {res.story.name}
      </h1>

      <div className="relative h-[60vh] w-full flex items-center justify-center">
        <div className="absolute h-full w-full flex items-center justify-center">
          {res?.story?.name && !res.story.content.hero_video && (
            <h1 className="text-[50px] lg:text-[70px] text-white text-center z-10">
              {res.story.name}
            </h1>
          )}
        </div>

        {res.story.content?.hero_video && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hidden lg:block h-full w-full object-cover"
          >
            <source src={res.story.content.hero_video.filename} />
          </video>
        )}
        {res.story.content?.hero_video_mobile?.filename && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="block lg:hidden h-full w-full object-cover"
          >
            <source src={res.story.content.hero_video_mobile.filename} />
          </video>
        )}

        {!res.story.content?.hero_video?.id &&
          !res.story.content?.hero_video_mobile?.filename && (
            <Image
              src={res?.story?.content?.hero_image?.filename || "/fallback.jpg"}
              alt={res?.story?.name || "Hero Image"}
              fill
              className="object-cover"
            />
          )}
      </div>
      {matchedPaket.length > 0 && (
        <div>
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-14 m-auto py-5 lg:py-28 px-5 lg:px-14 max-w-[100%] lg:max-w-[80%] lg:h-100vh justify-center">
            {matchedPaket &&
              Array.isArray(matchedPaket) &&
              matchedPaket.map((item: any) => {
                return (
                  <div className="px-4 pt-4 pb-10 border-black  border w-full items-center justify-between text-center flex flex-col gap-8">
                    <div className="w-full lg:h-[268px] relative">
                      <Image
                        src={
                          item.content.image.filename ||
                          "https://a.storyblok.com/f/302737/760x432/1a75af83bf/phanthiet.png"
                        }
                        fill
                        className="object-cover"
                        alt={item.name}
                      />
                    </div>
                    <span className="font-light">
                      <h3 className="text-[30px]">{item.name}</h3>
                      <h2 className="text-[14px]">{item.content.category}</h2>
                    </span>
                    <span>{render(item.content.meta)}</span>
                    <Link
                      className="button flex justify-center max-w-[155px]"
                      href={`/${item.full_slug}`}
                    >
                      Läs mer
                    </Link>
                  </div>
                );
              })}
          </div>
          <FaqBlock res={res} />
        </div>
      )}
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
      <Form title={form_title} resend={resend_title} />
    </div>
  );
};

export default page;
