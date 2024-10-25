import Image from "next/image";
import Link from "next/link";

interface Props {
  data: {
    noimages: any;
    img_1: { filename: string; id: string };
    img_2: { filename: string; id: string };
    img_3: { filename: string; id: string };
    title_1: string;
    title_2: string;
    title_3: string;
    name_1: string;
    name_2: string;
    name_3: string;
    mail_1: string;
    mail_2: string;
    mail_3: string;
    phone_1: string;
    phone_2: string;
    phone_3: string;
  };
}

const Team = ({ data }: Props) => {

  return (
    <div>
      <div className="h-[40vh] text-center w-full bg-[#16364D] flex justify-center items-center">
        <h2 className="text-white text-[25px]">KONTAKT</h2>
      </div>
      <div className="flex flex-wrap m-auto justify-center  px-5 lg:px-20 pt-20 gap-40  pb-32 bg-[#E9EFED]">
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
        <div className="flex justify-center flex-col text-center gap-5">
        {!data.noimages && (
            <div className="relative h-[400px] w-[320px] m-auto -mt-0 lg:-mt-48">
              <Image
                src={data.img_2.filename}
                alt={data.img_2.id}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div>
            <h2 className="text-[20px]">{data.name_2}</h2>
            <h3 className="text-[16px]">{data.title_2}</h3>
          </div>
          <div className="flex flex-col">
            <Link href={`mailto:${data.mail_2}`}>{data.mail_2}</Link>
            <Link href={`phone:${data.phone_2}`}>{data.phone_2}</Link>
          </div>
        </div>
        <div className="flex justify-center flex-col text-center gap-5">
        {!data.noimages && (
            <div className="relative h-[400px] w-[320px] m-auto -mt-0 lg:-mt-48">
              <Image
                src={data.img_3.filename}
                alt={data.img_3.id}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div>
            <h2 className="text-[20px]">{data.name_3}</h2>
            <h3 className="text-[16px]">{data.title_3}</h3>
          </div>
          <div className="flex flex-col">
            <Link href={`mailto:${data.mail_3}`}>{data.mail_3}</Link>
            <Link href={`phone:${data.phone_3}`}>{data.phone_3}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
