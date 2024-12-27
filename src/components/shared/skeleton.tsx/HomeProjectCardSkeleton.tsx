import Link from "next/link";
import MotionElement from "../../motionDiv/MotionElement";
import CommonButton from "../CommonButton";

export function ProjectCartSkeleton() {
  return (
    <MotionElement
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
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
  );
}

const HomeProjectSkeleton = ({ length = 3 }: { length?: number }) => {
  return (
    <section className={`py-24`} id="projects">
      <div className="container mx-auto px-4">
        <MotionElement
          as="h2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
        >
          Featured Projects
        </MotionElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: length }).map((_, index) => (
            <ProjectCartSkeleton key={index} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link href="/projects">
            <CommonButton buttonText="View All Projects" className="" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProjectSkeleton;
