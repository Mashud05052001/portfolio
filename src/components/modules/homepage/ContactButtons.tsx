"use client";

import { siteConfig } from "@/src/config/site";
import MotionElement from "../../motionDiv/MotionElement";
import { Github, Linkedin } from "lucide-react";

export default function ContactButtons() {
  return (
    <div className="flex justify-center items-center space-x-6">
      <MotionElement
        as="button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition-transform duration-300"
        onClick={() => {
          window.open(siteConfig?.links?.github, "_blank");
        }}
      >
        <Github size={28} />
      </MotionElement>

      <MotionElement
        as="button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.1 }}
        className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-500 transition-transform duration-300"
        onClick={() => {
          window.open(siteConfig?.links?.linkedIn, "_blank");
        }}
      >
        <Linkedin size={28} />
      </MotionElement>
    </div>
  );
}
