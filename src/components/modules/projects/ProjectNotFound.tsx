import { AlertTriangle } from "lucide-react";
import Link from "next/link";
import MotionElement from "../../motionDiv/MotionElement";

export default function ProjectNotFound() {
  return (
    <MotionElement
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center min-h-[calc(100vh-120px)]"
    >
      <div className=" bg-white p-6 rounded-lg shadow-md flex flex-col gap-y-3 items-center">
        <AlertTriangle className="text-red-600 w-16 h-16" />
        <h1 className="text-red-600 text-2xl font-semibold">
          Project not found
        </h1>
        <p className="text-gray-600">
          We couldn’t find the project you were looking for. Please check the
          URL or go back to the{" "}
          <Link
            href={"/projects"}
            className="hover:text-blue-600 hover:underline"
          >
            projects page
          </Link>
        </p>
      </div>
    </MotionElement>
  );
}
