import TimelineItem from "@/src/components/comps/TimeLineItem";
import { TClassName, TEducation, TReturnWithMetaData } from "@/src/types";
import MotionElement from "../../motionDiv/MotionElement";
import envConfig from "@/src/config/envConfig";

export default async function Education({ className }: TClassName) {
  const response = await fetch(`${envConfig?.baseAPI}/education?sort=order`, {
    next: { revalidate: 120 },
  });
  const allEducationData = (await response.json()) as TReturnWithMetaData<
    TEducation[]
  >;

  return (
    <div className={`py-24 ${className} `} id="education">
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
        <div className="max-w-3xl mx-auto">
          {allEducationData?.data?.data?.map((item, index) => (
            <TimelineItem key={index} index={index} education={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
