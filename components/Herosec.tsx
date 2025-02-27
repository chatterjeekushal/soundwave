
'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lfGVufDB8fDB8fHww", route: "/dashboard" },
  { src: "https://www.sennheiser.com/cdn-cgi/image/width=1920,format=avif,quality=75/globalassets/digizuite/46060-en-hd_490_pro_product_tour_video_youtube_thumb.png/SennheiserFullWidth", route: "/dashboard" },
];

export default function Herosec() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full lg:w-[96%] mx-auto">
      <div className="relative mt-16 overflow-hidden rounded-lg"
           style={{ height: 'calc(50vh + 10vw)', minHeight: '400px', maxHeight: '800px' }}>
        {images.map((image, index) => (
          <Link key={index} href={image.route} className="absolute w-full h-full">
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className={`absolute object-cover w-[100%] h-[100%] transition-opacity duration-700 ${
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
        className="absolute top-1/2 left-4 z-30 transform -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-black text-white rounded-full hover:bg-white/50"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute top-1/2 right-4 z-30 transform -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-black text-white rounded-full hover:bg-white/50"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
