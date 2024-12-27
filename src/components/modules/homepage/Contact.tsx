import { contactInfo } from "@/src/components/data";
import { TClassName } from "@/src/types";
import MotionElement from "../../motionDiv/MotionElement";
import ContactButtons from "./ContactButtons";
import ContactForm from "./ContactForm";

export default function Contact({ className }: TClassName) {
  return (
    <div className={`py-24 ${className}`} id="contact-me">
      <div className="container mx-auto px-4">
        <MotionElement
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <ContactButtons />
        </MotionElement>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto">
          {contactInfo.map((Info, index) => (
            <MotionElement
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="hover:shadow-lg px-4 py-6 border rounded-md transition-shadow duration-300 dark:border-gray-700 dark:bg-slate-800/80 dark:hover:bg-slate-800/60">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto dark:bg-blue-700">
                  <Info.icon className="w-6 h-6 text-blue-500 dark:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {Info.title}
                </h3>
                {Info.link ? (
                  <a
                    href={Info.link}
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                  >
                    {Info.content}
                  </a>
                ) : (
                  <p className="text-gray-600 dark:text-gray-300">
                    {Info.content}
                  </p>
                )}
              </div>
            </MotionElement>
          ))}
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
