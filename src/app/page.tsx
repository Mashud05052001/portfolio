import { Suspense } from "react";
import AboutMe from "../components/modules/homepage/AboutMe";
import Blogs from "../components/modules/homepage/Blogs";
import Contact from "../components/modules/homepage/Contact";
import Designation from "../components/modules/homepage/Designation";
import Education from "../components/modules/homepage/Education";
import Projects from "../components/modules/homepage/Projects";
import Skills from "../components/modules/homepage/Skills";
import EducationSkeleton from "../components/shared/skeleton.tsx/TimelineItemSkeleton";
import HomeProjectSkeleton from "../components/shared/skeleton.tsx/HomeProjectCardSkeleton";
import HomeBlogSkeleton from "../components/shared/skeleton.tsx/HomeBlogCartSkeleton";
import SkillSkeleton from "../components/shared/skeleton.tsx/SkillSkeleton";

export default function Page() {
  return (
    <div>
      <Designation />
      <AboutMe className="min-h-screen flex items-center" />
      <Suspense fallback={<EducationSkeleton />}>
        <Education className="" />
      </Suspense>
      <Suspense fallback={<SkillSkeleton />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<HomeProjectSkeleton />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<HomeBlogSkeleton length={2} />}>
        <Blogs />
      </Suspense>
      <Contact className="min-h-screen flex items-center" />
    </div>
  );
}
