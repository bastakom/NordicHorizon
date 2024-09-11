import { fetchConfig } from '@/app/lib/apireq'
import Image from 'next/image'
import Link from 'next/link'

const Footer = async () => {
  const res = await fetchConfig()
  const {
    story: { content },
  } = res
  return (
    <div className="w-full p-10 mt-10 bg-[#16364D] justify-around text-white items-center flex ">
      <div className="text-center">
        Orgnmr: <br />
        {content.orgnmr}
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
      </div>
    </div>
  )
}

export default Footer
