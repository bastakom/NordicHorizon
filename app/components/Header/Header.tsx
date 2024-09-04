import { fetchConfig } from '@/app/lib/apireq'
import Image from 'next/image'
import Link from 'next/link'
import { RiMenuFill } from 'react-icons/ri'

const Header = async () => {
  const config = await fetchConfig()
  const {
    story: {
      content: { menu, logo },
    },
  } = config

  return (
    <div className="w-full px-10 py-5 bg-[#16364D] text-white ">
      <div className="flex justify-between items-center">
        <Link href="/" className="w-1/3">
          <Image
            src={logo.filename}
            width={227}
            height={50}
            alt="Nordic Horizon"
          />
        </Link>
        <div className="flex gap-14 w-full justify-end items-center">
          {menu.map((item: any) => {
            return (
              <Link href={item.link.cached_url} key={item._uid}>
                {item.title}
              </Link>
            )
          })}
          <div>
            <RiMenuFill fontSize={'2.6em'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
