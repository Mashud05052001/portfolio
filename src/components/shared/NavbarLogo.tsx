"use client";

import { NavbarBrand } from "@nextui-org/navbar";
import { useTheme } from "next-themes";
import NavLink from "./NavLink";
import Image, { StaticImageData } from "next/image";
import websiteDarkLogo from "../../../public/logo.png";
import websiteLightLogo from "../../../public/logo1.png";
import { useEffect, useState } from "react";

export default function NavbarLogo() {
  const [logo, setLogo] = useState<StaticImageData>(websiteLightLogo);
  const { theme } = useTheme();
  useEffect(() => {
    if (theme === "dark") {
      setLogo(websiteLightLogo);
    } else {
      setLogo(websiteDarkLogo);
    }
  }, [theme]);

  return (
    <NavbarBrand as="li" className="gap-3 max-w-fit">
      <NavLink className="flex justify-start items-center" href="/">
        <Image
          src={logo}
          alt="Logo"
          width={100}
          height={100}
          className="w-14 h-14 rounded-full "
        />
      </NavLink>
    </NavbarBrand>
  );
}
