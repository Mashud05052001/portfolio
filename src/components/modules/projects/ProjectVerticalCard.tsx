import { TProject } from "@/src/types";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MotionElement from "../../motionDiv/MotionElement";

type TProps = {
  project: TProject;
  index?: number;
};

export default function ProjectVerticalCard({ project, index }: TProps) {
  return (
    <MotionElement
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className=" rounded-lg overflow-hidden shadow-md flex p-2 border dark:border-gray-700"
    >
      <div className="w-1/3 h-60">
        <Image
          src={project?.image}
          alt={project?.title}
          width={1000}
          height={1000}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col justify-around">
        <div>
          <Link
            className="sm:text-xl font-medium light:text-gray-900 hover:text-blue-600 duration-100"
            href={`/projects/${project?.id}`}
          >
            {project?.title}
          </Link>
          <p className="text-sm sm:text-base light:text-gray-600 dark:text-gray-200 mt-2 mb-4 line-clamp-2 md:line-clamp-3">
            {project?.overview}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project?.tech.map((tech, i) => (
              <small
                key={i}
                className="px-3 py-1 light:bg-blue-100  light:text-blue-800 dark:bg-blue-900 rounded-full text-sm"
              >
                {tech}
              </small>
            ))}
          </div>
        </div>
        <div className="flex gap-6">
          <Link
            href={project?.live}
            className="flex items-center gap-2 light:text-blue-600 hover:underline"
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
