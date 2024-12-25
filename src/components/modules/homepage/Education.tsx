import { motion } from "framer-motion";

import { TClassName } from "@/src/types";
import TimelineItem from "@/src/components/comps/TimeLineItem";
import MotionDiv from "../../motionDiv/MotionDiv";
import MotionElement from "../../motionDiv/MotionElement";

const educationData = [
  {
    order: 2,
    startDate: "2018",
    endDate: "2020",
    term: "HSC",
    institute: "MC College, Sylhet",
    description: "",
  },
  {
    order: 1,
    startDate: "2021",
    endDate: "Present",
    term: "Bachelor of Computer Science & Engineering",
    institute: "Sylhet Engineering College",
  },
];

export default function Education({ className }: TClassName) {
  educationData.sort((a, b) => a.order - b.order);
  return (
    <div className={`py-24  ${className}`}>
      <div className="container mx-auto px-4">
        <MotionElement
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic journey and professional certifications
          </p>
        </MotionElement>

        <div className="max-w-3xl mx-auto">
          {educationData.map((item, index) => (
            <TimelineItem key={index} index={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
