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
          {Array.from({ length: 3 }).map((_, index) => (
            <MotionElement
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              key={index}
              className="animate-pulse rounded-lg overflow-hidden shadow-lg dark:shadow-md dark:shadow-slate-700"
            >
              {/* Image Skeleton */}
              <div className="h-48 bg-gray-300 dark:bg-gray-700" />

              {/* Content Skeleton */}
              <div className="p-6">
                {/* Title Skeleton */}
                <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-2/3 mb-4" />

                {/* Overview Skeleton */}
                <div className="space-y-2 mb-4">
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full" />
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6" />
                </div>

                {/* Tech Tags Skeleton */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-6 w-16 bg-gray-300 dark:bg-gray-700 rounded-full"
                    />
                  ))}
                </div>

                {/* Links Skeleton */}
                <div className="flex gap-6 pt-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 w-24 h-6 bg-gray-300 dark:bg-gray-700 rounded"
                    />
                  ))}
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
