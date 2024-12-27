import { TClassName, TReturnWithMetaData, TSkillData } from "@/src/types";
import { Avatar } from "@nextui-org/avatar";
import { skills } from "../../data";
import MotionElement from "../../motionDiv/MotionElement";
import envConfig from "@/src/config/envConfig";

export default async function Skills({ className }: TClassName) {
  const response = await fetch(`${envConfig?.baseAPI}/skill?sort=order`, {
    next: { revalidate: 120 },
  });
  const allSkillsData = (await response.json()) as TReturnWithMetaData<
    TSkillData[]
  >;
  const allSkills = allSkillsData?.data?.data;
  console.log(allSkills);
  const skillsData = skills;
  return (
    <section className={`py-24 ${className}`} id="skills">
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
          {skillsData
            .sort((a, b) => a.order - b.order)
            .map((Skill) => (
              <MotionElement
                key={Skill?.order}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.1 }}
                viewport={{ once: true }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition-all border shadow-md duration-100 hover:scale-125 dark:border-gray-700 dark:bg-gray-800 dark:text-white`}
              >
                {/* <Skill.icon className="w-4 h-4" /> */}
                <Avatar
                  src={Skill?.image}
                  alt={Skill?.name}
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">{Skill?.name}</span>
              </MotionElement>
            ))}
        </div>
      </div>
    </section>
  );
}
