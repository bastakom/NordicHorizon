import Image from "next/image";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";

export const SportCards = ({ blok }: any) => {
  return (
    <div className="flex flex-col  m-auto py-5 lg:py-28 px-5 lg:px-14 max-w-[100%]  lg:h-100vh justify-center">
      {blok.image_nav_block.map((item: any) => (
        <>
          <h2 className="text-[29px] pb-4 lg:pb-10 font-light text-center">
            {item.title}
          </h2>
          <div className="flex flex-col lg:grid lg:grid-cols-4 gap-5 lg:gap-10">
            {item.image_block.map((item: any) => (
              <div className="px-4 pt-4 pb-10 border-black  border w-full items-center justify-between text-center flex flex-col gap-8">
                <div className="w-full h-[268px] relative">
                  <Image
                    src={
                      item.image.filename ||
                      "https://a.storyblok.com/f/302737/760x432/1a75af83bf/phanthiet.png"
                    }
                    fill
                    className="object-cover"
                    alt={item.image.name}
                  />
                </div>
                <span className="font-light">
                  <h3 className="text-[30px]">{item.title}</h3>
                </span>
                <span>{render(item.content)}</span>
                <Link
                  className="button flex justify-center max-w-[155px]"
                  href={`${item.link.cached_url}`}
                >
                  Läs mer
                </Link>
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};
