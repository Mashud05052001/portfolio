import { blogs } from "@/src/components/data";
import BlogNotFound from "@/src/components/modules/blogs/BlogNotFound";
import MotionElement from "@/src/components/motionDiv/MotionElement";
import HtmlDescription from "@/src/components/shared/HtmlDescription";
import { UndoDot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PageProps } from "../../../../.next/types/app/page";
import envConfig from "@/src/config/envConfig";
import { TBlog, TReturnData } from "@/src/types";

export default async function SingleBlog({ params }: PageProps) {
  const { id: blogId } = await params;
  const response = await fetch(`${envConfig?.baseAPI}/blog/${blogId}`, {
    next: { revalidate: 120 },
  });
  const response2 = (await response.json()) as TReturnData<TBlog>;

  if (!response2?.success) {
    return <BlogNotFound />;
  }
  const blogData = response2?.data;
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 ">
      {/* Image Section */}
      <div className="relative h-64 md:h-96 w-full mb-6">
        <Image
          src={blogData?.image}
          alt={blogData?.title}
          fill
          className="object-cover w-full h-full rounded-lg"
        />
        {/* Title and Category */}
        <div className="absolute inset-0 bg-black bg-opacity-50 text-center text-white px-4">
          <div className="absolute bottom-10 left-4 text-start">
            <h1 className="text-3xl md:text-4xl font-bold">
              {blogData?.title}
            </h1>
            <p className="text-sm md:text-base mt-2 px-4 bg-blue-600 rounded-full inline-block">
              {blogData?.category}
            </p>
          </div>
        </div>

        <MotionElement
          as="h2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="absolute top-4 left-4"
        >
          <div className="relative">
            <Link
              href={"/blogs"}
              className="text-white bg-black/40 rounded-md hover:underline absolute flex items-center gap-x-2 -top-0.5 px-3 py-2 "
            >
              <UndoDot size={30} />
              Back
            </Link>
          </div>
        </MotionElement>
      </div>

      {/* Content Section */}
      <section className="mt-8">
        {/* Overview */}
        <div className="text-lg text-gray-700 mb-4 dark:text-gray-300 mt-2">
          Overview:
          <strong className="pl-2">{blogData?.overview}</strong>
        </div>

        {/* Description */}
        <HtmlDescription description={blogData?.description} />
      </section>
    </div>
  );
}
