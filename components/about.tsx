"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../public/images/profilepicture.png";
import SectionHeading from "@/components/section-heading";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";


const imageStyle = {
  borderRadius: "100%",
  border: "1px solid #000000",
};

export default function About() {
  const { ref } = useSectionInView("About", 0.4);

  return (
    <motion.section
      ref={ref}
      className="mb-12 mx-4 max-w-[45rem] text-center leading-6 sm:mb-24 scroll-mt-[7rem] mt-20 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id={"about"}
    >
      <SectionHeading>About me</SectionHeading>
      <div className="flex flex-col items-center gap-16 ">
        <div className="relative flex justify-center items-center max-w-full h-fit">
          <Image
            src="/images/profilepicture.png"
            alt="Ishika Agarwal"
            quality={95}
            width={275}
            height={275}
            className="rounded-full border border-black object-cover aspect-square"
          />
        </div>

        <div className="text-left flex flex-col gap-4">
          <p className="text-left">
            Hey there! I'm <span className="font-bold">Ishika Agarwal</span>, a
            final-year Computer Science student at the
            <span className="font-bold"> University of British Columbia</span>,
            graduating in <span className="font-bold">December 2025</span>.
            <br />
            <br />
            My journey in tech began in 2021 when I took my very first CS
            course—and four years later, I’ve built full-stack apps, led
            AI-based research, and developed real-world systems that impact
            users meaningfully.
            <br />
            <br />
            From Jan to May 2025, I worked as a{" "}
            <span className="font-bold">Full Stack Engineer at UBC</span>, where
            I developed the Makerspace Membership Management System. Prior to
            that, I led development on an{" "}
            <span className="font-bold">AI-powered Academic Advisor</span> using
            Generative AI models during my Directed Studies project.
            <br />
            <br />I also built a complete{" "}
            <span className="font-bold">Optical Marking System</span> during my
            capstone (May–Aug 2024), and contributed to outreach as a
            Programming Assistant at
            <span className="font-bold"> UBC Geering Up</span>, and helped the{" "}
            <span className="font-bold">Visual Cognition Lab</span> revamp their
            website.
            <br />
            <br />
            Outside academics, I’ve participated in several hackathons—winning
            hearts and pushing boundaries with projects like{" "}
            <span className="italic">LifeConnect</span> and{" "}
            <span className="italic">SmartBites</span>. I’ve also completed
            data-centric courses to strengthen my skills in{" "}
            <span className="font-bold">SQL</span> and{" "}
            <span className="font-bold">Python</span>.
            <br />
            <br />
            Right now, I’m diving deeper into{" "}
            <span className="font-bold">AI/ML</span> while working on exciting
            new projects at <span className="font-bold">Extern</span>. Every
            challenge fuels my growth, and I’m always eager to build tools that
            are smart, scalable, and human-first.
            <br />
            <br />
            Let's connect and create something impactful together!
          </p>
        </div>
      </div>
    </motion.section>
  );
}
