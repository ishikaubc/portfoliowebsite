"use client";

import Image from "next/image";
import SectionHeading from "./section-heading";

const galleryImages = [
  { src: "/images/enactuSUO.png", alt: "Enactus Calgary" },
  { src: "/images/cmdf-hackathon.jpg", alt: "CMD-F Hackathon" },
  { src: "/images/girls-in-tech.jpg", alt: "Girls in Tech" },
  { src: "/images/geeringup.jpg", alt: "Geering Up" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="my-20 scroll-mt-24 px-6 max-w-6xl mx-auto">
      <SectionHeading>My UBC Journey</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {galleryImages.map((img, idx) => (
          <div key={idx} className="overflow-hidden rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all">
            <Image
              src={img.src}
              alt={img.alt}
              width={500}
              height={300}
              className="object-cover w-full h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
