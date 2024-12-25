import MotionDiv from "../motionDiv/MotionDiv";
import MotionElement from "../motionDiv/MotionElement";

interface TimelineItemProps {
  index: number;
  startDate: string;
  endDate: string;
  term: string;
  institute: string;
  description?: string;
}

export default function TimelineItem({
  startDate,
  endDate,
  term,
  institute,
  index,
  description,
}: TimelineItemProps) {
  return (
    <MotionElement
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="flex gap-4  md:gap-8 relative "
    >
      {/* Timeline line */}
      <div className="block w-[2px] bg-blue-200 absolute left-[151px] md:left-[167px] top-0 h-full" />

      {/* Date */}
      <div className="w-32  pt-1 text-sm text-gray-600">
        <span>{startDate}</span>
        <span className="mx-1">-</span>
        <span>{endDate}</span>
      </div>

      {/* Timeline dot */}
      <div className="flex w-4 h-4 mt-2 z-10">
        <MotionElement
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.2 }}
          className="w-full h-full bg-blue-200 rounded-full"
        >
          <></>
        </MotionElement>
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <h3 className="sm:text-xl font-bold text-gray-900 mb-1">{term}</h3>
        <h4 className="text-sm sm:text-lg text-blue-600 mb-2">{institute}</h4>
        {description && (
          <p className="text-sm md:text-base text-gray-600">{description}</p>
        )}
      </div>
    </MotionElement>
  );
}
