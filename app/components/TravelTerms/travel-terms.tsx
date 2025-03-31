import { render } from "storyblok-rich-text-react-renderer";

export const TravelTerms = ({ blok }: any) => {
  return (
    <div
      className={`flex flex-col w-[90%] mx-auto ${
        blok.terms_title ? "gap-6" : "gap-0"
      }`}
    >
      {blok.terms_title && (
        <div className="mt-20 lg:mt-32">
          <h1 className="text-[30px] lg:text-[35px] max-w-[100%] lg:max-w-[90%] font-light leading-[39px] lg:leading-[35px] false mb-4">
            {blok.terms_title}
          </h1>
          <div>{render(blok.terms_content)}</div>
        </div>
      )}
      <div>
        <h3 className="text-[30px] lg:text-[35px] max-w-[100%] lg:max-w-[90%] font-light leading-[35px] lg:leading-[35px] false mb-4">
          {blok.terms_title_second}
        </h3>
        <div>{render(blok.terms_content_second)}</div>
      </div>

      <div>
        <h3 className="text-[30px] lg:text-[35px] max-w-[100%] lg:max-w-[90%] font-light leading-[35px] lg:leading-[35px] false mb-4">
          {blok.terms_title_third}
        </h3>
        <div>{render(blok.terms_content_third)}</div>
      </div>
    </div>
  );
};
