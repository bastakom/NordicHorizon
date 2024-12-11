import Form from "@/app/components/Form/Form";
import Hero from "@/app/components/Hero/Hero";
import ImageText from "@/app/components/ImageText/ImageText";
import Team from "@/app/components/Team/Team";
import { TeamInfo } from "@/app/components/Team/TeamInfo";
import TileCards from "@/app/components/TileCards/TileCards";

const HeroBlock = ({ blok, config }) => {
  console.log(blok)
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
  } = config;

  return blok?.kontakt_pagedesign ? (
    <div>
      <Team data={blok} />
      {!blok.one_block_image_text && <TeamInfo data={blok} />}
      {!blok.no_form && <Form title={blok.form_text} />}
      
    </div>
  ) : (
    <div>
      <Hero
        content={blok}
        img={blok?.video.filename}
        blok={blok}
        pageDesign={blok?.homedesign_pagedesign}
      />
      <ImageText
        pageDesign={blok?.homedesign_pagedesign}
        image={blok?.img_image.filename}
        imageID={blok?.img_image.id}
        blok={blok?.blok_image}
        title={blok?.title_image}
        content={blok?.content_image}
        one_block_image_text={blok?.one_block_image_text}
      />

      {blok?.homedesign_pagedesign ? null : (
        <TileCards
          cardTitleOne={title_1}
          cardContentOne={content_1}
          cardTitleTwo={title_2}
          cardContentTwo={content_2}
          cardTitleThree={title_3}
          cardContentThree={content_3}
          cardLinkOne={link_1.cached_url}
          cardLinkTwo={link_2?.cached_url}
          cardLinkThree={link_3.cached_url}
        />
      )}
      <Form title={blok?.form_text} />
    </div>
  );
};

export default HeroBlock;
