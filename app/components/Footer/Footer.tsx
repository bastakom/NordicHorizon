import { fetchConfig } from "@/app/lib/apireq";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = async () => {
  const res = await fetchConfig();
  const {
    story: { content },
  } = res;

  return (
    <div className="w-full p-10 mt-10 bg-[#16364D] justify-around text-white items-center flex flex-col lg:flex-row gap-5 lg:gap-0">
      <div className="text-center">
        Org.nr: <br />
        <span>{content.orgnmr}</span>
      </div>
      <div>
        <Image
          src={content.footer_logo?.filename}
          width={153}
          height={99}
          alt="Nordic Horizon Travel Group"
        />
      </div>
      <div className="flex flex-col text-center">
        <Link href={`mailto:${content.mail}`}>{content.mail}</Link>
        <Link href={`phone:${content.phone}`}>{content.phone}</Link>
        <div className="flex items-center justify-center pt-2">
          <Link className="mr-2" href={content.linkedIn.url}>
            <FaLinkedin className="text-[20px]" />
          </Link>
          <Link href={content.instagram.url}>
            {" "}
            <FaInstagram className="text-[20px]" />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
