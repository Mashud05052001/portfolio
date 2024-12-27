import MotionElement from "../../motionDiv/MotionElement";

const EducationSkeleton = ({ length = 3 }: { length?: number }) => {
  return (
    <div className={`py-24`} id="education">
      <div className="container mx-auto px-4">
        <MotionElement
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Education
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            My academic journey and professional certifications
          </p>
        </MotionElement>
        <div className="space-y-8 max-w-3xl mx-auto">
          {Array.from({ length: length }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse flex gap-4 md:gap-8 relative dark:text-white"
            >
              {/* Timeline line */}
              <div className="block w-[2px] bg-gray-300 absolute left-[151px] md:left-[167px] top-0 h-full" />

              {/* Date skeleton */}
              <div className="w-32 pt-1 text-sm space-y-1">
                <div className="h-4 bg-gray-300 rounded w-16" />
                <div className="h-4 bg-gray-300 rounded w-10" />
              </div>

              {/* Timeline dot skeleton */}
              <div className="flex w-4 h-4 mt-2 z-10">
                <div className="w-full h-full bg-gray-300 rounded-full" />
              </div>

              {/* Content skeleton */}
              <div className="flex-1 pb-8 space-y-2">
                <div className="h-6 bg-gray-300 rounded w-3/4" />
                <div className="h-4 bg-gray-300 rounded w-1/2" />
                <div className="h-4 bg-gray-300 rounded w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationSkeleton;
