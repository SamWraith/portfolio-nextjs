"use client";
import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import React from "react";

import Project from "./project";

import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
    const { ref } = useSectionInView("Projects", 0.5);

    return (
        <section ref={ref} id="projects" className="mb-28 sm:mb-0 scroll-mt-28">
            <SectionHeading>My Projects</SectionHeading>
            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};
export default Projects;
