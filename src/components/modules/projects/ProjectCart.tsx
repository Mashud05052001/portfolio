import { TProject } from "@/src/types";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MotionElement from "../../motionDiv/MotionElement";

type TProps = {
  project: TProject;
  index: number;
};
// export default function ProjectCart({ project, index }: TProps) {
export default function ProjectCart({ project }: TProps) {
  return (
    <MotionElement
      key={project?.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className=" rounded-lg overflow-hidden shadow-lg dark:shadow-md dark:shadow-slate-700"
    >
      <div className="h-48">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover transition-transform duration-200 ease-in-out transform hover:scale-110 "
          width={1000}
          height={1000}
        />
      </div>
      <div className="p-6">
        <Link
          className="sm:text-xl font-medium text-gray-900 dark:text-white hover:text-blue-600 duration-100"
          href={`/projects/${project?.id}`}
        >
          {project?.title}
        </Link>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 mt-2 text-sm">
          {project?.overview}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project?.tech.map((tech, i) => (
            <small
              key={i}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm dark:bg-blue-900 dark:text-white"
            >
              {tech}
            </small>
          ))}
        </div>
        <div className="flex gap-6 pt-3">
          <Link
            href={project?.live}
            className="flex items-center gap-2 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
            target="_blank"
          >
            <ExternalLink size={20} />
            <small>Live Demo</small>
          </Link>
          <Link
            href={project?.githubClient}
            className="flex items-center gap-2 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
            target="_blank"
          >
            <Github size={20} />
            <small>{project?.githubServer ? "Client" : "Code"}</small>
          </Link>
          {project?.githubServer && (
            <Link
              href={project?.githubServer!}
              className="flex items-center gap-2 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
              target="_blank"
            >
              <Github size={20} />
              <small>Server</small>
            </Link>
          )}
        </div>
      </div>
    </MotionElement>
  );
}
