"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {
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
            <section className=" bg-gray-100 rounded-lg max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative  sm:h-[20rem]  group-even:pl-8 hover:bg-gray-200 transition ">
                <div className="pt-4 pb-7 px-5 w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col flex-wrap h-full sm:group-even:ml-[18rem] max-sm:group-even:ml-[13.5rem] ">
                    <h3 className="text-2xl font-semibold  ">{title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-700 ">
                        {description}
                    </p>
                    <ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto">
                        {tags.map((tag, index) => (
                            <li
                                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full  "
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
                    quality={90}
                    className="absolute top-8 -right-[15rem] sm:-right-40 w-[28.25rem]  rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-3
                 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-3 group-even:right-[initial] group-even:-left-[15rem] sm:group-even:-left-40 "
                />
            </section>
        </motion.div>
    );
};

export default Project;
