
'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://images.pexels.com/photos/6179026/pexels-photo-6179026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];

  // Function to go to the next slide
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  // Function to go to the previous slide
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <div className="relative w-full max-w-3xl mx-auto" id="animation-carousel" data-carousel="static">
      {/* Image Container */}
      <div className="relative h-96 overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image src={image} alt={`carousel-item-${index}`} fill className="object-cover" />
          </div>
        ))}
      </div>

      {/* Left (Previous) Button */}
      <button
        type="button"
        className="absolute top-1/2 left-4 z-10 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition"
        onClick={goToPrevious}
      >
        
      </button>

      {/* Right (Next) Button */}
      <button
        type="button"
        className="absolute top-1/2 right-4 z-10 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition"
        onClick={goToNext}
      >
        
      </button>
    </div>
  );
};

export default Carousel;
