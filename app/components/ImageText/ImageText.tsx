import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";

interface Props {
  pageDesign?: any;
  image?: string;
  imageID?: string;
  title?: string;
  content?: any;
  one_block_image_text?: any;
  big_text_block?: boolean;
}

const ImageText = ({
  pageDesign,
  image,
  imageID,
  title,
  content,
  one_block_image_text,
  big_text_block,
}: Props) => {
  return (
    <div
      className={`${one_block_image_text && "pb-10"} ${
        pageDesign ? "bg-[#E9EFED]" : "container m-auto"
      }`}
    >
      <div
        className={`${
          pageDesign || big_text_block
            ? `grid grid-cols-1 p-5 lg:p-0  ${
                one_block_image_text
                  ? "lg:grid-cols-1"
                  : big_text_block
                  ? "lg:grid-cols-1"
                  : "lg:grid-cols-[55%_45%]"
              }
 items-center gap-14`
            : `my-10 lg:my-24 grid gap-10 lg:gap-20 px-5 lg:px-20 mx-auto grid-cols-1 lg:grid-cols-2 items-center`
        }`}
      >
        {image && (
          <div
            className={`w-full relative h-[300px] ${
              pageDesign ? "lg:h-[800px]" : "lg:h-[600px]"
            } `}
          >
            <Image
              src={image || ""}
              alt={imageID || ""}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div
          className={`grid gap-10 ml-0 lg:ml-5 ${
            one_block_image_text && "p-10 text-center"
          }`}
        >
          {pageDesign ? (
            <h1
              className={`text-[29px] max-w-[100%] lg:max-w-[70%] font-light leading-[35px]  ${
                one_block_image_text && "mx-auto"
              }`}
            >
              {title}
            </h1>
          ) : (
            <h3
              className={`text-[39px] lg:text-[35px] max-w-[100%] lg:max-w-[90%] font-light leading-[35px] lg:leading-[35px] ${
                one_block_image_text && "mx-auto"
              }`}
            >
              {title}
            </h3>
          )}
          <span
            className={`text-[17px] flex flex-col gap-5 max-w-[100%]  font-light oneheroblock ${
              one_block_image_text && "mx-auto flex flex-col gap-5"
            } ${
              big_text_block
                ? "lg:max-w-[70%] mx-auto lg:pb-10"
                : "lg:max-w-[80%]"
            }`}
          >
            {render(content)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageText;
