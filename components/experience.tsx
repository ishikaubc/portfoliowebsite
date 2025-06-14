"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section className="scroll-mt-[7rem]" ref={ref} id="experience">
      <SectionHeading>My Experience</SectionHeading>

      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                borderRadius: "2rem",
              }}
              date={item.date}
              contentArrowStyle={{
                borderRight: "0.4rem solid rgba(0, 0, 0, 0.05)",
              }}
              icon={item.icon}
              iconStyle={{
                background: "white",
              }}
            >
              <div className={"flex flex-row items-center gap-2"}>
                <Image src={item.logo} alt={"Logo"} width={70} />
                <div className={"flex flex-col"}>
                  <h2 className="font-bold text-black dark:text-black">
                    {item.name}
                  </h2>
                  <h3 className="text-gray-800 dark:text-black">{item.title}</h3>
                  <div className="text-gray-400"> {item.location}</div>
                </div>
              </div>

              <p className="mt-2 text-gray-700 dark:text-black">{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
