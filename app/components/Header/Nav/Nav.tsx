'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { RiMenuFill } from 'react-icons/ri'

interface Props {
  config: any
  res: any
}

const Nav = ({ res, config }: Props) => {
  const [open, setIsOpen] = useState(false)
  const {
    story: {
      content: { menu, logo },
    },
  } = config

  const handleSubOpen = () => {
    setIsOpen(true)
  }

  const handleSubClose = () => {
    setIsOpen(false)
  }

  return (
    <div className="relative w-full px-10 py-5 bg-[#16364D] text-white">
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
          {menu.map((item: any, index: number) => {
            return item.sub_menu ? (
              <div
                key={index}
                className="relative"
                onMouseEnter={handleSubOpen}
                onMouseLeave={handleSubClose}
              >
                <button>Resor</button>
                {open && (
                  <div className="absolute p-5 -ml-6 text-white bg-[#16364D] flex flex-col shadow-lg z-50">
                    {res.stories.map((el: any, index: number) => {
                      return (
                        <Link
                          key={index}
                          href={`/${el.full_slug}`}
                          className="p-2"
                        >
                          {el.name}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            ) : (
              <Link href={`/${item.link.cached_url}`} key={item._uid}>
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

export default Nav
