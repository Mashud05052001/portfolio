import { TBlog } from "@/src/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MotionElement from "../../motionDiv/MotionElement";

type TProps = {
  blog: TBlog;
  index?: number;
};

export const BlogCard = ({ blog, index }: TProps) => {
  return (
    <MotionElement
      key={blog?.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg dark:shadow-md dark:shadow-gray-700"
    >
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden flex">
        <div className="w-1/3 h-full">
          <Image
            src={blog?.image}
            alt={blog?.title}
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 flex-1 flex flex-col justify-around">
          <div>
            <h3 className="sm:text-xl font-medium text-gray-900 dark:text-white mb-2">
              {blog?.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 md:line-clamp-3">
              {blog?.overview}
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 md:line-clamp-3">
              Category: <strong>{blog?.category}</strong>
            </p>
          </div>
          <Link
            className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
            href={`/blogs/${blog?.id}`}
          >
            <span className="mr-2 text-sm sm:text-base">Read more</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </MotionElement>
  );
};
