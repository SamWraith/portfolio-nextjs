"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.185 }}
            id="about"
        >
            <SectionHeading>About Me</SectionHeading>
            <p className="mb-3">
                After enrolling in a degree of{" "}
                <span className="font-medium">Engineering</span>, I decided to
                pursue my passion for programming. I started learning coding
                from youtube about{" "}
                <span className="font-medium">
                    Full-stack web development and Flutter
                </span>
                .{" "}
                <span className="italic">My favorite part of programming</span>{" "}
                is the problem-solving aspect. I{" "}
                <span className="underline">love</span> the feeling of finally
                figuring out a solution to a problem. My core stack is{" "}
                <span className="font-medium">
                    React, Next.js, Node.js, Express.js, MongoDB and Flutter
                </span>
                . I am also familiar with TypeScript and Prisma. I am always
                looking to learn new technologies. I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a
                software engineer.
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I enjoy
                playing video games, watching movies, and reading mangas. I also
                enjoy <span className="font-medium">learning new things</span>.
                {/* I am currently learning about{" "}
                <span className="font-medium">history and philosophy</span>. I'm
    also learning how to play the guitar. */}
            </p>
        </motion.section>
    );
};
export default About;
