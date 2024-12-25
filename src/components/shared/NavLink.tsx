// "use client";
// import useFullUrl from "@/src/hooks/useFullUrl";
// import { TChildrenProps } from "@/src/types";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// import { MouseEventHandler } from "react";

// type TProps = {
//   href: string;
//   onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
// } & TChildrenProps;

// const NavLink = ({ children, href, className, onClick }: TProps) => {
//   const pathname = usePathname();
//   const fullUrl = useFullUrl();

//   // const active = window.location.href.split("#")[1];
//   // const router = useRouter();
//   // console.log(active);
//   const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

//   return (
//     <Link
//       className={`font-semibold ${
//         isActive
//           ? "active text-common-600 dark:text-common-500"
//           : "text-black dark:text-white"
//       } ${className}`}
//       href={href}
//       onClick={onClick}
//     >
//       {children}
//     </Link>
//   );
// };

// export default NavLink;

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEventHandler } from "react";

type TProps = {
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
  className?: string;
  children: React.ReactNode;
};

const NavLink = ({ children, href, className, onClick }: TProps) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current: string | null = null;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset <= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive =
    (href.startsWith("#") && href.slice(1) === activeSection) ||
    (href === "/" && pathname === href);

  return (
    <Link
      className={`font-semibold ${
        isActive
          ? "active text-common-600 dark:text-common-500 "
          : "text-black dark:text-white"
      } ${className}`}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavLink;
