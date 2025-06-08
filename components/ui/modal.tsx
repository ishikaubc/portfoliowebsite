"use client";

import React, { useEffect } from "react";
import Image from "next/image";

interface ImageSliderModalProps {
  images?: string[];
  currentIndex?: number;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  children?: React.ReactNode;
}

const ImageSliderModal: React.FC<ImageSliderModalProps> = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  children,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  // Fallback if props are missing
  const isGalleryMode = images && typeof currentIndex === "number" && images[currentIndex];

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white text-3xl font-bold"
      >
        &times;
      </button>

      {isGalleryMode ? (
        <div className="flex items-center justify-center gap-4 w-full px-4">
          <button onClick={onPrev} className="text-white text-4xl">⟨</button>
          <div className="max-w-[90vw] max-h-[90vh]">
            <Image
              src={images[currentIndex]!}
              alt="project screenshot"
              width={800}
              height={600}
              className="rounded-xl object-contain"
            />
          </div>
          <button onClick={onNext} className="text-white text-4xl">⟩</button>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-xl max-w-[90vw] max-h-[90vh] overflow-auto">
          {children}
        </div>
      )}
    </div>
  );
};

export default ImageSliderModal;
