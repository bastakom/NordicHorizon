"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";
import CookieConsent from "@/app/components/CookieConsent";
const MobilNav = dynamic(() => import("./MobilNav"));

interface Props {
  config: any;
  res: any;
}

const Nav = ({ res, config }: Props) => {
  const [open, setIsOpen] = useState(false);
  const [openMenu, setIsOpenMenu] = useState(false);
  const {
    story: {
      content: { menu, logo, footer_logo, mail, phone, orgnmr, side_menu },
    },
  } = config;

  const handleSubOpen = () => {
    setIsOpen(true);
  };

  const handleSubClose = () => {
    setIsOpen(false);
  };

  const handleOpenMenu = () => {
    setIsOpenMenu(!openMenu);
  };

  return (
    <>
      <div className="fixed w-full py-5 bg-[#16364D] block xl:hidden text-white z-50 top-0">
        <div className="flex justify-between px-5 items-center">
          <Link href="/" className="w-1/2 lg:w-1/3">
            <Image
              src={logo.filename}
              width={227}
              height={50}
              alt="Nordic Horizon"
            />
          </Link>
          <MobilNav config={config} res={res} />
        </div>
      </div>
      <div className="fixed w-full px-5 lg:px-10 py-5 bg-[#16364D] text-white z-50 top-0 hidden xl:block">
        <div className="flex justify-between items-center">
          <Link href="/" className="w-1/2 lg:w-1/3">
            <Image
              src={logo.filename}
              width={227}
              height={50}
              alt="Nordic Horizon"
            />
          </Link>
          <div className="gap-14 w-full justify-end items-center hidden xl:flex">
            {menu.map((item: any, index: number) => {
              return item.sub_menu ? (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={handleSubOpen}
                  onMouseLeave={handleSubClose}
                >
                  <button>Resor</button>

                  <div
                    className={`absolute p-5 -ml-2 text-white bg-[#16364D] flex flex-col shadow-lg z-50 ${open ? "opacity-100" : "opacity-0"} transition-all duration-300`}
                  >
                    {res.stories.map((el: any, index: number) => {
                      return (
                        <Link
                          key={index}
                          href={`/${el.full_slug}`}
                          className="p-2 min-w-[250px] hover:opacity-50 transition-all"
                        >
                          {el.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <Link href={`/${item.link.cached_url}`} key={item._uid}>
                  {item.title}
                </Link>
              );
            })}
            <div
              className={`menu-btn-6 mt-4 z-20 ${openMenu ? "active" : ""}`}
              onClick={handleOpenMenu}
            >
              <span />
            </div>
          </div>
        </div>
        <div
          className={`fixed top-0 right-0 h-full bg-[#16364D] transition-transform duration-300 justify-center flex ease-in-out ${
            openMenu ? "translate-x-0" : "translate-x-full"
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
            {side_menu.map((item: any, index: number) => {
              return (
                <Link
                  className="text-[16px] underline underline-offset-2"
                  key={index}
                  onClick={handleOpenMenu}
                  href={`/${item.link.cached_url}`}
                >
                  {item.title}
                </Link>
              );
            })}
            <div className="lg:flex flex-col mt-20 text-[16px] absolute bottom-10 m-auto text-center hidden">
              <Link href={`mailto:${mail}`}>{mail}</Link>
              <Link href={`phone:${phone}`}>{phone}</Link>
              <div>
                Org.nr: <span>{orgnmr}</span>
              </div>

              <Link href={"/cookies"} onClick={handleOpenMenu}>
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
