import { blogs } from "@/src/components/data";
import BlogNotFound from "@/src/components/modules/blogs/BlogNotFound";
import HtmlDescription from "@/src/components/shared/HtmlDescription";
import Image from "next/image";

type TProps = {
  params: { id: string };
};

export default async function SingleBlog({ params }: TProps) {
  const { id: blogId } = await params;

  const blogData = blogs.find((blog) => blog?.id === blogId);
  if (!blogData) {
    return <BlogNotFound />;
  }
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Image Section */}
      <div className="relative h-64 md:h-96 overflow-hidden rounded-lg shadow-lg">
        <Image
          src={blogData?.image}
          alt={blogData?.title}
          fill
          className="w-full h-full object-cover"
        />
        {/* Title and Category */}
        <div className="absolute inset-0 bg-black bg-opacity-50 text-center text-white px-4">
          <div className="absolute bottom-10 left-4 text-start">
            <h1 className="text-3xl md:text-4xl font-bold">
              {blogData?.title}
            </h1>
            <p className="text-sm md:text-base mt-2 px-2 bg-blue-600 rounded-full inline-block">
              {blogData?.category}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="mt-8">
        {/* Overview */}
        <p className="text-gray-700 text-lg mb-6">{blogData?.overview}</p>

        {/* Description */}
        <HtmlDescription description={blogData?.description} />
      </section>
    </div>
  );
}
