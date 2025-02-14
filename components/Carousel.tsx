
'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const images = [
  { src: "/docs/images/carousel/carousel-1.svg", route: "/product/1" },
  { src: "/docs/images/carousel/carousel-2.svg", route: "/product/2" },
  { src: "/docs/images/carousel/carousel-3.svg", route: "/product/3" },
  { src: "/docs/images/carousel/carousel-4.svg", route: "/product/4" },
  { src: "/docs/images/carousel/carousel-5.svg", route: "/product/5" },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index : number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full">
      <div className="relative h-80 md:h-96 overflow-hidden rounded-lg">
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
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      <button
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
        onClick={prevSlide}
      >
        <span className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center hover:bg-white/50">
          &#8592;
        </span>
      </button>
      <button
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
        onClick={nextSlide}
      >
        <span className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center hover:bg-white/50">
          &#8594;
        </span>
      </button>
    </div>
  );
}
