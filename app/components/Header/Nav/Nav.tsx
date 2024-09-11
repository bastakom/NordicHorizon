'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { RiMenuFill } from 'react-icons/ri'
import { IoMdClose } from 'react-icons/io'

interface Props {
  config: any
  res: any
}

const Nav = ({ res, config }: Props) => {
  const [open, setIsOpen] = useState(false)
  const [openMenu, setIsOpenMenu] = useState(false)
  const {
    story: {
      content: { menu, logo, footer_logo, mail, phone, orgnmr },
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
    <div className="fixed w-full px-10 py-5 bg-[#16364D] text-white z-50 top-0">
      <div className="flex justify-between items-center">
        <Link href="/" className="w-1/3">
          <Image
            src={logo.filename}
            width={227}
            height={50}
            alt="Nordic Horizon"
          />
        </Link>
        <div className="flex gap-14 w-full justify-end items-center hidden xl:flex">
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
          <div
            className={`menu-btn-6 mt-4 z-20 ${openMenu ? 'active' : ''}`}
            onClick={handleOpenMenu}
          >
            <span />
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-full bg-[#16364D] transition-transform duration-300 justify-center flex ease-in-out ${
          openMenu ? 'translate-x-0' : 'translate-x-full'
        } w-80`}
      >
        <div className="px-10 items-center flex flex-col gap-2 w-full mt-20 text-[20px] text-center">
          <Image
            src={footer_logo?.filename}
            width={200}
            height={99}
            alt="Nordic Horizon Travel Group"
            className="mb-10"
          />
          <Link onClick={handleOpenMenu} href="/">
            Om oss
          </Link>
          <Link onClick={handleOpenMenu} href="/">
            Kontakt
          </Link>
          <div className="flex flex-col mt-20 text-[16px] absolute bottom-10 m-auto text-center">
            <Link href={`mailto:${mail}`}>{mail}</Link>
            <Link href={`phone:${phone}`}>{phone}</Link>
            <span>Orgnmr: {orgnmr}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
