import { TClassName } from "@/src/types";
import Image from "next/image";
import MotionDiv from "../../motionDiv/MotionDiv";
import ResumeButton from "./ResumeButton";
import MotionElement from "../../motionDiv/MotionElement";

export default function Designation({ className }: TClassName) {
  return (
    <div
      className={`min-h-[calc(100vh-65px)] flex items-center ${className}`}
      id="home"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <MotionElement
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              Mashudur Rahman Mahi
            </h1>
            <h2 className="text-2xl text-gray-600 mb-6">
              Full Stack Developer
            </h2>
            <p className="text-gray-600 mb-8">
              Crafting digital experiences with passion and precision.
              Specialized in building modern web applications.
            </p>
            <ResumeButton />
          </MotionElement>

          <MotionElement
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto"
          >
            <div className=" rounded-lg overflow-hidden shadow-2xl relative w-96 h-96">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                alt="Profile"
                className="object-cover"
                fill
              />
            </div>
          </MotionElement>
        </div>
      </div>
    </div>
  );
}