"use client";

import Image from "next/image";
import Link from "next/link";

interface Props {
  data: any;
}

const Team = ({ data }: Props) => {
  return (
    <div className="mb-20">
      <div className="py-20 lg:py-0 lg:h-[40vh] text-center w-full bg-[#16364D] flex justify-center items-center">
        <h2 className="text-white text-[25px]">KONTAKT</h2>
      </div>
      <div className="lg:grid-cols-4 gap-4 grid mt-5 lg:mt-0 container mx-auto">
        {data.contact_fields.map((data: any) => {
          return (
            <div className="flex justify-center flex-col text-center gap-5  border lg:border-none border-black lg:p-0 p-5 mx-2 lg:mx-0">
              {!data.noimages && (
                <div className="relative h-[400px] w-[320px] m-auto -mt-0 lg:-mt-32">
                  <Image
                    src={data.profile_picture?.filename}
                    alt={data.profile_picture?.id}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <h2 className="text-[20px]">{data.name}</h2>
                <h3 className="text-[16px]">{data.title}</h3>
              </div>
              <div className="flex flex-col">
                <Link href={`mailto:${data.mail_1}`}>{data.mail}</Link>
                <Link href={`phone:${data.phone_1}`}>{data.phone}</Link>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="flex flex-wrap m-auto justify-center  px-5 lg:px-20 pt-20 gap-40  pb-32 bg-[#E9EFED]">
        <div className="flex justify-center flex-col text-center gap-5">
          {!data.noimages && (
            <div className="relative h-[400px] w-[320px] m-auto -mt-0 lg:-mt-48">
              <Image
                src={data.img_1.filename}
                alt={data.img_1.id}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div>
            <h2 className="text-[20px]">{data.name_1}</h2>
            <h3 className="text-[16px]">{data.title_1}</h3>
          </div>
          <div className="flex flex-col">
            <Link href={`mailto:${data.mail_1}`}>{data.mail_1}</Link>
            <Link href={`phone:${data.phone_1}`}>{data.phone_1}</Link>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Team;
