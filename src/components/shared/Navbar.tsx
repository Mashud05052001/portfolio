"use client";

import { siteConfig } from "@/src/config/site";
import websiteLogo from "../../../public/logo.png";
import websiteLogo1 from "../../../public/logo1.png";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { useState } from "react";
import { ThemeSwitch } from "../theme-switch";
import NavLink from "./NavLink";
import MotionDiv from "../motionDiv/MotionDiv";
import Image from "next/image";
import NavbarLogo from "./NavbarLogo";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = siteConfig?.navItems;

  return (
    <NextUINavbar
      maxWidth="xl"
      shouldHideOnScroll={false}
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="dark:bg-slate-800/80 dark:border-b-gray-900"
    >
      <div className="flex items-center w-full justify-between">
        <MotionDiv
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <NavbarLogo />
          {/* <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NavLink className="flex justify-start items-center" href="/">
              <p className="font-bold">
                <span className="text-3xl text-common-500 dark:text-common-200">
                  <Image
                    src={websiteLogo}
                    alt="Logo"
                    width={100}
                    height={100}
                    className="w-14 h-14 rounded-full "
                  />
                </span>
              </p>
            </NavLink>
          </NavbarBrand> */}
        </MotionDiv>
        <div>
          <ul className="hidden md:flex gap-2 sm:gap-4 justify-start">
            {navItems.map((item, index) => (
              <MotionDiv
                key={item?.href}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <NavbarItem>
                  <NavLink
                    href={item.href}
                    className="px-1 py-1 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {item.label}
                  </NavLink>
                </NavbarItem>
              </MotionDiv>
            ))}
            <MotionDiv
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <ThemeSwitch />
            </MotionDiv>
          </ul>
        </div>
      </div>

      <NavbarContent className="md:hidden basis-1 pl-4 space-x-2" justify="end">
        <MotionDiv
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ThemeSwitch />
          <NavbarMenuToggle />
        </MotionDiv>
      </NavbarContent>

      {/* Toggle bar for small screen */}
      <NavbarMenu>
        <div className="flex flex-col space-y-2 mt-3">
          {navItems?.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              className="pl-4 py-2 rounded-md w-52 hover:bg-common-50 dark:hover:bg-gray-700 duration-150"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
