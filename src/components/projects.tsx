import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import React from "react";

import Project from "./project";

const Projects = () => {
    return (
        <section>
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
