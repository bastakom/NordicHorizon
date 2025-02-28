import Image from "next/image";
import O from "@/public/NH_symbol_vit.png";

interface Props {
  img: any;
  alt?: any;
  title?: string;
  pageDesign?: any;
  content?: any;
}

const Hero = ({ img, alt, title, pageDesign, content }: Props) => {
  return pageDesign
    ? null
    : img && (
        <div
          className={`relative h-[80vh] lg:h-[70vh] ${
            content?.video_asset ? "lg:h-[70vh]" : "lg:h-[80vh]"
          } w-full flex items-center justify-center`}
        >
          {content?.video_asset && (
            <Image
              className="absolute top-14 right-2 lg:top-20 lg:right-10"
              src={O}
              alt=""
              width={60}
              height={150}
            />
          )}
          {title && (
            <div className="absolute h-full w-full flex items-center justify-center">
              <h1 className="text-[45px] lg:text-[70px] text-white text-center z-10">
                {title}
              </h1>
            </div>
          )}
          {content?.video_asset && content?.video_asset ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            >
              <source src={content.video_asset.filename} />
            </video>
          ) : (
            <Image
              className="object-cover"
              src={img}
              fill
              alt={alt || "image"}
            />
          )}
        </div>
      );
};

export default Hero;
