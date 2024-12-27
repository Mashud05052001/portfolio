import MotionElement from "@/src/components/motionDiv/MotionElement";
import { UndoDot } from "lucide-react";
import Link from "next/link";

export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 rounded-lg">
      {/* Project Image with Title and Category Overlay */}
      <div className="relative h-64 md:h-96 w-full mb-6 rounded-lg">
        <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg" />
        {/* Title */}
        <div className="absolute animate-pulse inset-0 bg-gray-600 rounded-lg bg-opacity-50 text-center text-white px-4">
          <div className="absolute  bottom-10 left-4 text-start">
            <div className="w-1/2 h-8  animate-pulse rounded-lg" />
          </div>
        </div>
        {/* Back Button */}
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

      {/* Project Overview */}

      <div className="w-8/12 h-16 bg-gray-300 animate-pulse rounded-lg" />

      {/* Project Description */}
      <div className="py-8">
        <div className="w-full h-60 bg-gray-300 animate-pulse rounded-lg" />
      </div>
    </div>
  );
}
