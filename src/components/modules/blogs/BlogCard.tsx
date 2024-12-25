import { TBlog } from "@/src/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MotionElement from "../../motionDiv/MotionElement";

type TProps = {
  blog: TBlog;
  index: number;
};

export const BlogCard = ({ blog, index }: TProps) => {
  return (
    <MotionElement
      key={blog?.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.6, delay: index * 0.4 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg overflow-hidden shadow-lg"
    >
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex">
        <div className="w-1/3 h-52">
          <Image
            src={blog?.image}
            alt={blog?.title}
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 flex-1">
          <h3 className="text-xl font-medium text-gray-900 mb-2">
            {blog?.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{blog?.overview}</p>
          <Link
            className="flex items-center text-blue-600"
            href={`/blogs/${blog?.id}`}
          >
            <span className="mr-2">Read more</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </MotionElement>
  );
};
