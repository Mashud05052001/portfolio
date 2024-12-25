"use client";
import { Download, Eye } from "lucide-react";
import MotionButton from "@/src/components/motionDiv/MotionButton";

export default function ResumeButton() {
  return (
    <div className="flex space-x-4">
      {/* View Resume Button */}
      <MotionButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.01 }}
        className="flex items-center gap-2 px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 ease-in-out"
        onClick={() => {
          window.open(
            "https://drive.google.com/file/d/1WlDfG74XKbnh9x9V05p-GrSDbWWdfuf6/view",
            "_blank"
          );
        }}
      >
        <Eye className="w-5 h-5" />
        View Resume
      </MotionButton>
      {/* Download Resume Button */}
      <MotionButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.01 }}
        className="flex items-center gap-2 px-6 py-3 text-blue-600 bg-white border border-blue-600 rounded-lg shadow-md hover:bg-blue-50 transition-all duration-300 ease-in-out"
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
