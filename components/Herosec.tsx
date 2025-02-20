
'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import Lucide icons

const images = [
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg", route: "/dashboard" },
  { src: "https://ik.imagekit.io/9kdymtz6f/soundwave/freepik__expand__55239.png?updatedAt=1739268584600", route: "/dashboard" },
];

export default function Herosec() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 3000ms = 3 seconds

    // Clear interval on component unmount to prevent memory leaks
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: any) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full lg:w-[96%]  m-auto">
      <div className="relative h-60 mt-16 md:h-[87vh] overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <Link key={index} href={image.route}>
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className={`absolute w-full transition-opacity duration-700 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          </Link>
        ))}
      </div>
      <div className="absolute bottom-5 left-1/2 flex space-x-3 -translate-x-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(index as any)}
          />
        ))}
      </div>
      <button
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
        onClick={prevSlide}
      >
        <span className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-white/50">
          <ChevronLeft size={24} color="white" /> {/* Custom left arrow */}
        </span>
      </button>
      <button
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer "
        onClick={nextSlide}
      >
        <span className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-white/50">
          <ChevronRight size={24} color="white" /> {/* Custom right arrow */}
        </span>
      </button>
    </div>
  );
}
