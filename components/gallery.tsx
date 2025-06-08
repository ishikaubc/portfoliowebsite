"use client";

import Image from "next/image";
import SectionHeading from "./section-heading";
import GalleryCard from "@/components/ui/gallerycard";

const images = [
  { src: "/images/enactuSUO.png", alt: "Enactus Calgary", caption: "Representing UBCO at Enactus Regionals in Calgary",},
  { src: "/images/IMG_9371.jpg", alt: "CMD-F Hackathon", caption: "Coordinator at Girls in Tech UBCO",},
  { src: "/images/IMG_9377.jpg", alt: "Girls in Tech" , caption: "Hosted Job Prep Workshop for junior students in Tech"},
  { src: "/images/IMG_9374.jpg", alt: "Geering Up" , caption: "Built LifeConnect at CMD-F Hackathon"},
  { src: "/images/IMG_3039.JPG", caption: "Peer Leader at Destination UBC"},
  {src: "/images/enactusSUO1.png", caption: "Project Manager for Impact Toolbox Program"}
];

export default function Gallery() {
    return (
      <section id="gallery" className="px-6 py-12 max-w-6xl mx-auto">
        <SectionHeading>Highlights of my UBC Journey</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <GalleryCard key={idx} src={img.src} caption={img.caption} />
          ))}
        </div>
      </section>
    );
  }