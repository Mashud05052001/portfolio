"use client";

import { siteConfig } from "@/src/config/site";

import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import Link from "next/link";
import { useState } from "react";
import { LuLogIn } from "react-icons/lu";
import NavLink from "./NavLink";
import { ThemeSwitch } from "../theme-switch";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = siteConfig?.navItems;

  return (
    <NextUINavbar
      maxWidth="xl"
      shouldHideOnScroll
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <div className="flex items-center w-full justify-between ">
        <div>
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NavLink className="flex justify-start items-center" href="/">
              {/* <p className="font-bold -ml-2.5 -mb-1.5"> */}
              <p className="font-bold">
                <span className="text-3xl text-common-500">Mashud</span>
              </p>
            </NavLink>
          </NavbarBrand>
        </div>
        <div>
          <ul className="hidden md:flex gap-2 sm:gap-4 justify-start">
            {navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NavLink href={item.href} className="px-1 py-1">
                  {item.label}
                </NavLink>
              </NavbarItem>
            ))}
            <ThemeSwitch />
          </ul>
        </div>
      </div>

      <NavbarContent className="md:hidden basis-1 pl-4 space-x-2" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Toggle bar for small screen */}
      <NavbarMenu>
        <div className="flex flex-col space-y-2 mt-3">
          {navItems?.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              className="pl-4 py-2 rounded-md w-52 hover:bg-common-50  duration-150 dark:hover:bg-gray-700"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
