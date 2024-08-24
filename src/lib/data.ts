import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import metaVirtual from "../../public/metaVirtual.webp";
import promptopia from "../../public/Promptopia.webp";
import techHaven from "../../public/TechHaven.webp";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    // {
    //     name: "Experience",
    //     hash: "#experience",
    // },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description:
            "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const;

export const projectsData = [
    {
        title: "Tech Haven",
        description:
            "I made this e-commerce site while being inspired by apple design language. I had integrated it with payload CMS. It has features like filtering and sorting",
        tags: ["React", "Next.js", "Sass", "Payload CMS"],
        imageUrl: techHaven,
        gitLink: "https://github.com/SamWraith/next-ecommerce-jsm",
    },
    {
        title: "MetaVirtual",
        description:
            "This website is built for hand tracking using opencv and mediapipe library. It has features like drawing and ppt control.",
        tags: ["HTML", "CSS", "JavaScript", "Python", "Firebase", "Flask"],
        imageUrl: metaVirtual,
        gitLink: "https://github.com/SamWraith/Meta-Virtual",
    },
    {
        title: "Promptopia",
        description:
            "This website is built so that users can create and share prompts for writing. It has features like creating, editing, and deleting prompts. It also has a search feature.",
        tags: ["React", "Next.js", "MongoDB", "Tailwind"],
        imageUrl: promptopia,
        gitLink: "https://github.com/SamWraith/promptopia",
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Angular",
    "Nest js",
    "Node.js",
    "Git",
    "Tailwind",
    "Flutter",
    "Prisma",
    "Drizzle",
    "MongoDB",
    "Redux",
    "Express",
    "PostgreSQL",
    "Python",
    "Flask",
    "Framer Motion",
] as const;
