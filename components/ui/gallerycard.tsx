// components/GalleryCard.tsx
"use client";
import Image from "next/image";
import React from "react";

type GalleryCardProps = {
  src: string;
  caption?: string;
};

const GalleryCard: React.FC<GalleryCardProps> = ({ src, caption }) => {
  return (
    <div className="group relative w-full h-64 rounded-xl overflow-hidden shadow-md cursor-pointer transition-transform transform hover:scale-105">
      {/* Image */}
      <Image
        src={src}
        alt={caption || "Gallery image"}
        width={400}
        height={250}
        className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-20"
      />
      {/* Caption overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 text-white text-center px-4">
        <p className="text-lg font-semibold">{caption}</p>
      </div>
    </div>
  );
};

export default GalleryCard;
