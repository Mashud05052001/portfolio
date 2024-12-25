import { TProject } from "@/src/types";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MotionElement from "../../motionDiv/MotionElement";

type TProps = {
  project: TProject;
  index: number;
};
export default function ProjectCart({ project, index }: TProps) {
  return (
    <MotionElement
      key={project?.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.6, delay: index * 0.4 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg overflow-hidden shadow-lg"
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
        <h3 className="text-xl font-bold mb-2">{project?.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
          {project?.overview}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project?.tech.map((tech, i) => (
            <small
              key={i}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {tech}
            </small>
          ))}
        </div>
        <div className="flex gap-6 pt-3">
          <Link
            href={project?.live}
            className="flex items-center gap-2 text-gray-700 hover:text-black"
            target="_blank"
          >
            <ExternalLink size={20} />
            <small>Live Demo</small>
          </Link>
          {project?.github ? (
            <Link
              href={project?.github}
              className="flex items-center gap-2 text-gray-700 hover:text-black"
              target="_blank"
            >
              <Github size={20} />
              <small>Code</small>
            </Link>
          ) : (
            <>
              <Link
                href={project?.githubClient!}
                className="flex items-center gap-2 text-gray-700 hover:text-black"
                target="_blank"
              >
                <Github size={20} />
                <small>Client</small>
              </Link>
              <Link
                href={project?.githubServer!}
                className="flex items-center gap-2 text-gray-700 hover:text-black"
                target="_blank"
              >
                <Github size={20} />
                <small>Server</small>
              </Link>
            </>
          )}
        </div>
      </div>
    </MotionElement>
  );
}
