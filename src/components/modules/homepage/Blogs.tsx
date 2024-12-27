import { TBlog, TClassName, TReturnWithMetaData } from "@/src/types";
import Link from "next/link";
import { blogs } from "../../data";
import MotionElement from "../../motionDiv/MotionElement";
import CommonButton from "../../shared/CommonButton";
import { BlogCard } from "../blogs/BlogCard";
import envConfig from "@/src/config/envConfig";

export default async function Blogs({ className }: TClassName) {
  const response = await fetch(
    `${envConfig?.baseAPI}/blog?sort=order&limit=3`,
    {
      next: { revalidate: 120 },
    }
  );
  const allBlogsData = (await response.json()) as TReturnWithMetaData<TBlog[]>;
  const allBlogs = allBlogsData?.data?.data;
  blogs.sort((a, b) => a.order - b.order);

  return (
    <section className={`py-24 ${className}`} id="blogs">
      <div className="container mx-auto px-4">
        <MotionElement
          as="h2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          My Blogs
        </MotionElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          {allBlogs.map((blog, index) => (
            <BlogCard index={index} blog={blog} key={index} />
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <Link href="/blogs">
            <CommonButton buttonText="View All Blogs" className="" />
          </Link>
        </div>
      </div>
    </section>
  );
}
