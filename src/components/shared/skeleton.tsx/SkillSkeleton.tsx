import MotionElement from "../../motionDiv/MotionElement";

export default function SkillSkeleton() {
  return (
    <section className={`py-24 `} id="skills">
      <div className="container mx-auto px-4">
        <MotionElement
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Skills
          </h2>
        </MotionElement>

        <div className="flex flex-wrap gap-3">
          {Array.from({ length: 16 }, (_, index) => (
            <MotionElement
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.1 }}
              viewport={{ once: true }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition-all border shadow-md duration-100 hover:scale-125 dark:border-gray-700 dark:bg-gray-800 dark:text-white`}
            >
              {/* Skeleton Avatar */}
              <div className="w-5 h-5 rounded-full bg-gray-400 dark:bg-gray-600" />
              {/* Skeleton Text */}
              <div className="w-20 h-4 bg-gray-300 dark:bg-gray-500 rounded-full" />
            </MotionElement>
          ))}
        </div>
      </div>
    </section>
  );
}
