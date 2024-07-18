import About from "@/components/About";
import Intro from "@/components/Intro";
import SectionDivider from "@/components/Section-Divider";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
// import Experience from "@/components/experience";
import Contact from "@/components/contact";

export default function Home() {
    return (
        <main className=" flex flex-col items-center px-4 ">
            <Intro />
            <SectionDivider />
            <About />
            {/* <SectionDivider /> */}
            <Projects />
            <SectionDivider />
            <Skills />
            {/* <Experience /> */}
            <Contact />
        </main>
    );
}
