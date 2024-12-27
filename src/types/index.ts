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
  _id: string;
  order: number;
  image: string;
  name: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TProject = {
  _id: string;
  order: number;
  title: string;
  overview: string;
  description: string;
  tech: string[];
  // image: string;
  image: string | StaticImageData;
  live: string;
  githubClient: string;
  githubServer?: string;
  isDeleted: boolean;
  createdAt: string;
};

export type TBlog = {
  _id: string;
  order: number;
  title: string;
  category: string;
  overview: string;
  description: string;
  image: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TMetaData = {
  limit: number;
  page: number;
  skip: number;
  totalData: number;
  totalPage: number;
};

export type TReturnWithMetaData<T> = {
  success: boolean;
  message: string;
  data: {
    data: T;
    meta: TMetaData;
  };
};

export type TReturnData<T> = {
  success: boolean;
  message: string;
  data: T;
};

export type TEducation = {
  _id: string;
  order: number;
  course: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate?: string | null;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TExperience = {
  _id: string;
  order: number;
  company: string;
  designation: string;
  description?: string;
  location?: string;
  technologies?: string[];
  startDate: string;
  endDate?: string | null;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};
