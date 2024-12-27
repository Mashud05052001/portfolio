"use client";
import { Download, Eye } from "lucide-react";
import MotionButton from "@/src/components/motionDiv/MotionButton";
import { siteConfig } from "@/src/config/site";

export default function ResumeButton() {
  return (
    <div className="flex sm:space-x-4 flex-col sm:flex-row max-w-fit space-y-6 sm:space-y-0 md:flex-col md:space-y-6 md:space-x-0 lg:flex-row lg:space-y-0 lg:space-x-6">
      {/* View Resume Button */}
      <MotionButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.01 }}
        className="flex items-center gap-2 px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 ease-in-out font-semibold w-56"
        onClick={() => {
          window.open(siteConfig?.links?.resume, "_blank");
        }}
      >
        <div className="flex items-center justify-center gap-2 w-56">
          <Eye className="w-5 h-5" />
          <span>View Resume</span>
        </div>
      </MotionButton>
      {/* Download Resume Button */}
      <MotionButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.01 }}
        className="flex items-center gap-2 px-6 py-3 text-blue-600 bg-white border border-blue-600 rounded-lg shadow-md hover:bg-blue-50 transition-all duration-300 ease-in-out font-semibold w-56"
        onClick={() => {
          const link = document.createElement("a");
          link.href = "/resume.pdf";
          link.download = "Mahi's Resume.pdf";
          link.click();
        }}
      >
        <>
          <Download className="w-5 h-5" />
          Download Resume
        </>
      </MotionButton>
    </div>
  );
}
