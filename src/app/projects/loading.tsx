import MotionElement from "@/src/components/motionDiv/MotionElement";
import { UndoDot } from "lucide-react";
import Link from "next/link";

const Loading = () => {
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
              href={"/#projects"}
              className="light:text-blue-600  hover:underline absolute flex items-center gap-x-2 -top-0.5 px-3 py-2"
            >
              <UndoDot size={30} />
              <p className="font-medium">Back to Portfolio</p>
            </Link>
            <h1 className="text-4xl font-bold text-center">All Projects</h1>
          </div>
        </MotionElement>

        <div className="grid grid-cols-1 gap-10">
          {Array.from({ length: 3 }).map((_, index) => (
            <MotionElement
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="animate-pulse rounded-lg overflow-hidden shadow-lg"
              key={index}
            >
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden p-2 flex">
                {/* Image Skeleton */}
                <div className="w-1/3 h-60 bg-gray-300 dark:bg-gray-700 rounded-lg" />

                {/* Content Skeleton */}
                <div className="p-6 flex-1 flex flex-col justify-around">
                  <div>
                    {/* Title Skeleton */}
                    <div className="h-5 w-2/3 bg-gray-300 dark:bg-gray-700 rounded mb-3" />

                    {/* Overview Skeleton */}
                    <div className="space-y-2 mb-4">
                      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full" />
                      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6" />
                    </div>

                    {/* Category Skeleton */}
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-4" />
                  </div>

                  {/* Link Skeleton */}
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-20 bg-gray-300 dark:bg-gray-700 rounded" />
                    <div className="h-5 w-5 text-gray-300 dark:text-gray-700" />
                  </div>
                </div>
              </div>
            </MotionElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Loading;
