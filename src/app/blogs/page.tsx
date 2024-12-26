import { blogs } from "@/src/components/data";
import { BlogCardForBlogsPage } from "@/src/components/modules/blogs/BlogCardForBlogsPage";
import MotionElement from "@/src/components/motionDiv/MotionElement";
import { UndoDot } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <section className={`my-10`}>
      <div className=" mx-auto px-4">
        <MotionElement
          as="h2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative">
            <Link
              href={"/#blogs"}
              className="light:text-blue-600  hover:underline absolute flex items-center gap-x-2 -top-0.5 px-3 py-2"
            >
              <UndoDot size={30} />
              <p className="font-medium">Back to Portfolio</p>
            </Link>
            <h1 className="text-4xl font-bold text-center">All Blogs</h1>
          </div>
        </MotionElement>

        <div className="grid grid-cols-1 gap-10">
          {blogs.map((blog, index) => (
            <BlogCardForBlogsPage blog={blog} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
