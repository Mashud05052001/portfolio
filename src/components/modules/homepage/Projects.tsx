import { TClassName } from "@/src/types";
import Link from "next/link";
import { projects } from "../../data";
import MotionElement from "../../motionDiv/MotionElement";
import CommonButton from "../../shared/CommonButton";
import ProjectCart from "../projects/ProjectCart";

export default function Projects({ className }: TClassName) {
  // Top 3 products
  projects.sort((a, b) => a.order - b.order);
  return (
    <section className={`py-24 ${className}`} id="projects">
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
          {projects.map((project, index) => (
            <ProjectCart index={index} project={project} key={index} />
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
}
