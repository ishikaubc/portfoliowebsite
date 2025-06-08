"use client";

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faReadme } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Modal from "@/components/ui/modal";

// Extend ProjectProps
export type ProjectProps = (typeof projectsData)[number] & {
  gallery?: string[];
  researchPaper?: string;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  gallery = [],
  githubLink,
  demolink,
  researchPaper,
}: ProjectProps) {
  const imageStyle = {
    borderRadius: "2rem",
    border: "1px solid",
    borderColor: "rgb(0 0 0 / 0.05)",
    cursor: "pointer",
  };

  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openGallery = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  return (
    <motion.div style={{ scale: scaleProgress }} className="">
      <section ref={ref} className="flex w-full h-full">
        <CardContainer className="mb-3 last:mb-0 h-full items-center">
          <CardBody className="bg-stone-100 grid grid-cols-2 grid-rows-4 border border-slate-200 rounded-3xl hover:shadow-2xl lg:grid-rows-2 my-5 mx-4 h-full w-full justify-center content-center align-middle items-center">
            <CardItem
              translateZ="100"
              className="row-start-1 row-span-2 col-start-1 col-span-2 flex flex-col self-center align-middle justify-center content-center items-center lg:col-span-1 px-6 mx-auto"
            >
              <Image
                src={imageUrl}
                alt="Main project image"
                quality={95}
                width={300}
                height={300}
                style={imageStyle}
                onClick={() => openGallery(0)}
              />
            </CardItem>

            <CardItem
              translateZ="60"
              className="row-start-3 row-span-2 col-start-1 col-span-2 flex flex-col pt-4 pb-7 px-4 sm:pr-2 sm:pt-10 lg:col-start-2 lg:col-span-1 lg:row-start-1 lg:row-span-2"
            >
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-[1.8rem] leading-relaxed text-gray-700">
                {description}
              </p>
              <ul className="flex flex-wrap gap-2 mt-8">
                {tags.map((tag, index) => (
                  <li
                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </CardItem>

            <CardItem
              translateZ="50"
              className="row-start-4 row-span-1 col-start-1 col-span-2 mx:auto lg:row-start-2 lg:col-start-2 place-self-end mr-3 mb-3"
            >
              <div className="flex gap-4 items-center">
                <Link href={githubLink} passHref target="_blank">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </Link>
                {demolink && (
                  <Link href={demolink} passHref target="_blank">

                    <button className="bg-gradient-to-r from-gray-400 to-gray-600 text-white px-4 py-1 rounded-full text-sm shadow-md hover:scale-105 transition">
                    <FontAwesomeIcon icon={faPlay} className="mr-2" />Demo
                    </button>
                  </Link>
                )}
                {researchPaper && (
                  <Link href={researchPaper} passHref target="_blank">
                   <button className="bg-gradient-to-r from-gray-400 to-gray-600 text-white px-4 py-1 rounded-full text-sm shadow-md hover:scale-105 transition">
                   <FontAwesomeIcon icon={faReadme} className="mr-2" />Read Paper
                    </button>
                  </Link>
                )}
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>
      </section>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="flex justify-between items-center mb-4">
            <button
              className="text-lg font-bold"
              onClick={() =>
                setSelectedImageIndex((prev) =>
                  prev > 0 ? prev - 1 : gallery.length - 1
                )
              }
            >
              ◀
            </button>
            <Image
              src={gallery[selectedImageIndex] || imageUrl}
              alt="Gallery preview"
              width={600}
              height={400}
              className="rounded-xl"
            />
            <button
              className="text-lg font-bold"
              onClick={() =>
                setSelectedImageIndex((prev) =>
                  prev < gallery.length - 1 ? prev + 1 : 0
                )
              }
            >
              ▶
            </button>
          </div>
        </Modal>
      )}
    </motion.div>
  );
}
