import AboutMe from "../components/modules/homepage/AboutMe";
import Blogs from "../components/modules/homepage/Blogs";
import Contact from "../components/modules/homepage/Contact";
import Designation from "../components/modules/homepage/Designation";
import Education from "../components/modules/homepage/Education";
import Projects from "../components/modules/homepage/Projects";
import Skills from "../components/modules/homepage/Skills";

export default function Page() {
  return (
    <div>
      <Designation />
      <AboutMe className="min-h-screen flex items-center" />
      <Education className="" />
      <Skills className="" />
      <Projects />
      <Blogs />
      <Contact className="min-h-screen flex items-center" />
    </div>
  );
}
