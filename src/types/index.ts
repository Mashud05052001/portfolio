import { StaticImageData } from "next/image";
import { ReactNode, SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type TChildrenProps = {
  children: ReactNode;
  className?: string;
};

export type TClassName = {
  className?: string;
};

export type TSkillData = {
  id: string;
  order: number;
  image: string;
  name: string;
};

export type TProject = {
  id: string;
  order: number;
  title: string;
  overview: string;
  description: string;
  tech: string[];
  image: string | StaticImageData;
  live: string;
  github?: string;
  githubClient?: string;
  githubServer?: string;
};

export type TBlog = {
  id: string;
  order: number;
  title: string;
  category: string;
  overview: string;
  description: string;
  image: string;
};
