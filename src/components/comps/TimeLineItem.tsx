import { TEducation } from "@/src/types";
import MotionElement from "../motionDiv/MotionElement";
import moment from "moment";

type TProps = {
  education: TEducation;
  index: number;
};

export default function TimelineItem({ education, index }: TProps) {
  return (
    <MotionElement
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="flex gap-4 md:gap-8 relative dark:text-white"
    >
      {/* Timeline line */}
      <div className="block w-[2px] bg-blue-200 dark:bg-blue-500 absolute left-[151px] md:left-[167px] top-0 h-full" />

      {/* Date */}
      <div className="w-32 pt-1 text-sm text-gray-600 dark:text-gray-300">
        <span>{moment(education?.startDate).format("MM/YYYY")}</span>
        <span className="mx-1">-</span>
        <span>
          {education?.endDate ? (
            moment(education?.endDate).format("MM/YYYY")
          ) : (
            <>Running</>
          )}
        </span>
      </div>

      {/* Timeline dot */}
      <div className="flex w-4 h-4 mt-2 z-10">
        <MotionElement
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.2 }}
          className="w-full h-full bg-blue-200 dark:bg-blue-500 rounded-full"
        >
          <></>
        </MotionElement>
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <h3 className="sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
          {education?.course}
        </h3>
        <h4 className="text-sm sm:text-lg text-blue-600 dark:text-blue-400 mb-2">
          {education?.institution}
        </h4>
        {/* {description && (
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
            {description}
          </p>
        )} */}
      </div>
    </MotionElement>
  );
}
