"use client";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import { MdKeyboardArrowDown } from "react-icons/md";

export const FaqBlock = ({ res }: any) => {
  return (
    <div className="lg:max-w-[80%] px-5 lg:px-14 py-10 lg:py-0  lg:pb-10 lg:mx-auto lg:mt-20">
      <div className="lg:flex  flex-row-reverse gap-10 cursor-pointer">
        <div className="lg:w-1/3">
          {res?.story?.content?.FAQ_content?.map((item: any, index: number) => (
            <div key={index}>
              {item?.faq_field?.map((i: any) => (
                <div className="flex items-center gap-2 bg-[#E9EFED] mb-4 p-4 rounded-md w-[100%]">
                  <MdKeyboardArrowDown fontSize={30} />
                  <Link
                    href={`#${i._uid}`}
                    key={i._uid}
                    className="text-[18px]"
                  >
                    {i.title}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="lg:w-2/3">
          {res?.story?.content?.FAQ_content?.map((item: any) => (
            <div key={item._uid}>
              <div>
                <div>
                  {item?.faq_field?.map((i: any) => (
                    <div
                      className={`${
                        i.title && "block bg-[#E9EFED] mb-10 p-4 rounded-md"
                      }`}
                      id={i._uid}
                      key={i._uid}
                    >
                      <h3 className="text-[30px] mb-2">{i.title}</h3>
                      <div>{render(i.content)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
