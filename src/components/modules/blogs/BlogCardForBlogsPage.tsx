import { TBlog } from "@/src/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MotionElement from "../../motionDiv/MotionElement";

type TProps = {
  blog: TBlog;
  index?: number;
};

export const BlogCardForBlogsPage = ({ blog, index }: TProps) => {
  return (
    <MotionElement
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg overflow-hidden shadow-lg"
    >
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex">
        <div className="w-1/3 h-60">
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
            <h3 className="sm:text-xl font-medium text-gray-900 mb-2">
              {blog?.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2 md:line-clamp-3 lg:line-clamp-4">
              {blog?.overview}
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2 md:line-clamp-3">
              Category : <strong>{blog?.category}</strong>
            </p>
          </div>
          <Link
            className="flex items-center text-blue-600"
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
