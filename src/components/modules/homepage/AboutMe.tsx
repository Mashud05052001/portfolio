import { Code2, Palette, Terminal } from "lucide-react";
import MotionDiv from "../../motionDiv/MotionDiv";
import MotionElement from "../../motionDiv/MotionElement";

export default function AboutMe({ className }: { className?: string }) {
  const skills = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Frontend Development",
      description: "Expert in React, TypeScript, and modern CSS frameworks",
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Backend Development",
      description: "Proficient in Node.js, Express.js, and database management",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces",
    },
  ];

  return (
    <div className={` ${className}`} id="about-me">
      <div className="container mx-auto px-4">
        <MotionElement
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-800">About Me</h2>
          <p className="text-lg text-gray-600">
            I’m Mashudur Rahman Mahi, a Full Stack Developer passionate about
            creating seamless, high-performance web applications. With attention
            to detail and a focus on scalable solutions, I deliver exceptional
            user experiences tailored to business needs.
            <br />
            Beyond coding, I explore new technologies and stay ahead in web
            development, bridging innovation with practicality for impactful
            solutions.
          </p>
        </MotionElement>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {skills.map((skill, index) => (
            <MotionElement
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6  rounded-md hover:shadow-lg border transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {skill.title}
              </h3>
              <p className="text-gray-600 text-center">{skill.description}</p>
            </MotionElement>
          ))}
        </div>
      </div>
    </div>
  );
}
