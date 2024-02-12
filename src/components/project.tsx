"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

const Project = ({
    title,
    description,
    tags,
    imageUrl,
    gitLink,
}: ProjectProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section className=" bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                <Link
                    href={gitLink}
                    target="_blank"
                    aria-label="redirecting to github repo"
                >
                    <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                        <h3
                            className="text-2xl font-semibold "
                            aria-label="Title of the project: "
                        >
                            {title}
                        </h3>
                        <p
                            className="mt-2 leading-relaxed text-gray-700 dark:text-white/70"
                            aria-label="Project description"
                        >
                            {description}
                        </p>
                        <ul
                            className="flex flex-wrap gap-2 mt-4 sm:mt-auto"
                            aria-label="project skills details"
                        >
                            {tags.map((tag, index) => (
                                <li
                                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 "
                                    key={index}
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Image
                        src={imageUrl}
                        alt={title}
                        quality={85}
                        aria-label={title}
                        className="absolute hidden sm:block top-8 -right-[15rem] sm:-right-40 w-[28.25rem]  rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-3
                 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-3 group-even:right-[initial] group-even:-left-[15rem] sm:group-even:-left-40 "
                    />
                </Link>
            </section>
        </motion.div>
    );
};

export default Project;
