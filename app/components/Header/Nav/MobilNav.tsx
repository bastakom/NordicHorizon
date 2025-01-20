"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

interface Props {
  config: any;
  res: any;
}

const MobilNav = ({ res, config }: Props) => {
  const [open, setIsOpen] = useState(false);
  const [openMenu, setIsOpenMenu] = useState(false);
  const [dropDownMenu, setIsDropDownMenu] = useState(false);

  const {
    story: {
      content: { menu, footer_logo, side_menu },
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

  const handleDropDown = () => {
    setIsDropDownMenu(!dropDownMenu);
  };

  return (
    <>
      <div
        className={`menu-btn-6 mt-4 z-20 ${openMenu ? "active" : ""}`}
        onClick={handleOpenMenu}
      >
        <span />
      </div>

      <div
        className={`fixed top-0 right-0 h-full bg-[#16364D] transition-transform duration-300  flex ease-in-out ${
          openMenu ? "translate-x-0" : "translate-x-full"
        } w-full`}
      >
        <div className="px-8 flex flex-col gap-4 w-full my-5 text-[18px] ">
          <Image
            src={footer_logo?.filename}
            width={200}
            height={99}
            alt="Nordic Horizon Travel Group"
            className="mb-5 -ml-6"
          />
          {side_menu.map((item: any, index: number) => {
            return (
              <Link
                className="text-[18px]"
                key={index}
                onClick={handleOpenMenu}
                href={`/${item.link.cached_url}`}
              >
                {item.title}
              </Link>
            );
          })}
          {menu.map((item: any, index: number) => {
            return item.sub_menu ? (
              <div
                key={index}
                onMouseEnter={handleSubOpen}
                onMouseLeave={handleSubClose}
                className="relative overflow-auto"
              >
                <button
                  className="mt-4 font-bold underline flex items-center"
                  onClick={handleDropDown}
                >
                  Resor
                  <MdOutlineKeyboardArrowRight className="text-2xl ml-2" />
                </button>

                <div
                  className={`fixed top-0 right-0 h-full bg-[#16364D] transition-transform duration-300 py-24
                     px-8 text-start flex flex-col ease-in-out translate-x-0 w-full overflow-auto ${
                       dropDownMenu ? "flex" : "hidden"
                     }`}
                >
                  <div
                    className="flex items-center absolute top-10 mb-10 font-bold"
                    onClick={handleDropDown}
                  >
                    <MdOutlineKeyboardArrowLeft className="text-2xl ml-2" />
                    Tillbaka
                  </div>
                  {res.stories.map((el: any, index: number) => {
                    return (
                      <Link
                        onClick={handleOpenMenu}
                        key={index}
                        href={`/${el.full_slug}`}
                        className="px-2 pb-4"
                      >
                        {el.name}
                      </Link>
                    );
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
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MobilNav;
