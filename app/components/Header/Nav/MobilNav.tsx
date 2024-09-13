'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface Props {
  config: any
  res: any
}

const MobilNav = ({ res, config }: Props) => {
  const [open, setIsOpen] = useState(false)
  const [openMenu, setIsOpenMenu] = useState(false)
  const {
    story: {
      content: { menu, footer_logo },
    },
  } = config

  const handleSubOpen = () => {
    setIsOpen(true)
  }

  const handleSubClose = () => {
    setIsOpen(false)
  }

  const handleOpenMenu = () => {
    setIsOpenMenu(!openMenu)
  }

  return (
    <>
      <div
        className={`menu-btn-6 mt-4 z-20 ${openMenu ? 'active' : ''}`}
        onClick={handleOpenMenu}
      >
        <span />
      </div>

      <div
        className={`fixed top-0 right-0 h-full bg-[#16364D] transition-transform duration-300 justify-center flex ease-in-out ${
          openMenu ? 'translate-x-0' : 'translate-x-full'
        } w-full`}
      >
        <div className="px-10 items-center flex flex-col gap-2 w-full mt-10 text-[20px] text-center">
          <Image
            src={footer_logo?.filename}
            width={200}
            height={99}
            alt="Nordic Horizon Travel Group"
            className="mb-10"
          />
          <Link onClick={handleOpenMenu} href="/om-oss">
            Om oss
          </Link>
          <Link onClick={handleOpenMenu} href="/kontakt">
            Kontakt
          </Link>
          {menu.map((item: any, index: number) => {
            return item.sub_menu ? (
              <div
                key={index}
                className="relative"
                onMouseEnter={handleSubOpen}
                onMouseLeave={handleSubClose}
              >
                <button className="mt-4 font-bold underline">Resor</button>

                <div className="flex flex-col mt-2">
                  {res.stories.map((el: any, index: number) => {
                    return (
                      <Link
                        onClick={handleOpenMenu}
                        key={index}
                        href={`/${el.full_slug}`}
                        className="px-2"
                      >
                        {el.name}
                      </Link>
                    )
                  })}
                </div>
              </div>
            ) : (
              <Link
                href={`/${item.link.cached_url}`}
                key={item._uid}
                onClick={handleOpenMenu}
              >
                {item.title}
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default MobilNav
