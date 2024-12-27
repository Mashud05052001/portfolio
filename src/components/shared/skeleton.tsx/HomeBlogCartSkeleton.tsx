import Link from "next/link";
import MotionElement from "../../motionDiv/MotionElement";
import CommonButton from "../CommonButton";

export const BlogCardSkeleton = () => {
  return (
    <MotionElement
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="animate-pulse rounded-lg overflow-hidden shadow-lg dark:shadow-md dark:shadow-slate-700"
    >
      <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden flex">
        {/* Image Skeleton */}
        <div className="w-1/3 h-60 bg-gray-300 dark:bg-gray-700" />

        {/* Content Skeleton */}
        <div className="p-6 flex-1 flex flex-col justify-around">
          {/* Title Skeleton */}
          <div className="space-y-2">
            <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full" />
          </div>

          {/* Category Skeleton */}
          <div className="mt-4 space-y-1">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2" />
          </div>

          {/* Link Skeleton */}
          <div className="flex items-center mt-4">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-16" />
            <div className="h-5 w-5 bg-gray-300 dark:bg-gray-700 rounded-full ml-2" />
          </div>
        </div>
      </div>
    </MotionElement>
  );
};

const HomeBlogSkeleton = ({ length = 3 }: { length?: number }) => {
  return (
    <section className={`py-24`} id="blogs">
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
          {Array.from({ length: length }).map((_, index) => (
            <BlogCardSkeleton key={index} />
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
};

export default HomeBlogSkeleton;
