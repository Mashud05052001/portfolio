import ProjectNotFound from "@/src/components/modules/projects/ProjectNotFound";
import MotionElement from "@/src/components/motionDiv/MotionElement";
import HtmlDescription from "@/src/components/shared/HtmlDescription";
import envConfig from "@/src/config/envConfig";
import { TProject, TReturnData } from "@/src/types";
import { ExternalLink, Github, UndoDot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PageProps } from "../../../../.next/types/app/page";

export default async function SingleProject({ params }: PageProps) {
  const { id: projectId } = await params;
  const response = await fetch(`${envConfig?.baseAPI}/project/${projectId}`, {
    next: { revalidate: 120 },
  });

  const response2 = (await response.json()) as TReturnData<TProject>;

  if (!response2) {
    return <ProjectNotFound />;
  }
  const projectData = response2?.data;
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 rounded-lg">
      {/* Project Image with Title and Category Overlay */}
      <div className="relative h-64 md:h-96 w-full mb-6 rounded-lg">
        <Image
          src={projectData?.image}
          alt={projectData?.title}
          className="object-cover w-full h-full rounded-lg"
          layout="fill"
        />
        {/* Title */}
        <div className="absolute inset-0 bg-black rounded-lg bg-opacity-50 text-center text-white px-4">
          <div className="absolute bottom-10 left-4 text-start">
            <h1 className="text-3xl md:text-4xl font-bold">
              {projectData?.title}
            </h1>
          </div>
        </div>
        {/* Back  */}
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
              href={"/projects"}
              className="text-white bg-black/40 rounded-md hover:underline absolute flex items-center gap-x-2 -top-0.5 px-3 py-2 "
            >
              <UndoDot size={30} />
              Back
            </Link>
          </div>
        </MotionElement>
      </div>

      {/* Project Overview */}
      <div className="text-lg text-gray-700 mb-4 dark:text-gray-300 mt-2">
        Overview:
        <strong className="pl-2">{projectData?.overview}</strong>
      </div>

      <div className="flex justify-between mt-6 flex-col sm:flex-row gap-y-4">
        {/* Tech Stack */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {projectData?.tech.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm dark:bg-blue-900 dark:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="min-w-72  sm:ml-4">
          <h3 className="text-xl font-semibold mb-3">Live Links</h3>
          <div className="flex gap-6 pl-2 sm:pl-0">
            <Link
              href={projectData?.live}
              className="flex items-center gap-2 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
              target="_blank"
            >
              <ExternalLink size={20} />
              <small>Live Demo</small>
            </Link>
            <Link
              href={projectData?.githubClient}
              className="flex items-center gap-2 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
              target="_blank"
            >
              <Github size={20} />
              <small>{projectData?.githubServer ? "Client" : "Code"}</small>
            </Link>
            {projectData?.githubServer && (
              <Link
                href={projectData?.githubServer!}
                className="flex items-center gap-2 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
                target="_blank"
              >
                <Github size={20} />
                <small>Server</small>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Project Description */}
      <div className="py-8">
        <HtmlDescription description={projectData?.description} />
      </div>
    </div>
  );
}
