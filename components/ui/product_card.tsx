
'use client';

import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  src: string;
  name: string;
  price: number;
  stars: number;
  rating: string;
  description?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ src, name, price, stars, rating, description }) => {
  console.log('name:', name);

  return (
    <div className="relative flex w-full flex-col overflow-hidden rounded-lg border border-gray-300  shadow-md">
      {/* Removed inner <a> */}
      <span className='relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl'>
      <Image
        className="object-cover w-full h-full"
        src={src || "/default-image.jpg"}
        alt={name}
        width={500}
        height={500}
      />

      <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
        39% OFF
      </span>
      </span>
      <div className="mt-4 px-5 pb-5">
        <div>
          <h5 className="text-xl tracking-tight text-slate-900">{name}</h5>
        </div>
        {description && <p className="mt-2 text-gray-500">{description}</p>}
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">₹{price}</span>
          </p>
          <div className="flex items-center">
            {Array.from({ length: stars }).map((_, index) => (
              <svg
                key={index}
                className="h-5 w-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 0l2.6 6.8H20l-5 4.2 1.8 7L10 14.3 3.2 17l1.8-7-5-4.2h7.4L10 0z"
                />
              </svg>
            ))}
            <span className="ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              {rating}
            </span>
          </div>
        </div>
        {/* Changed <a> to <button> to avoid nested links */}
        <button
          className="flex w-full items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          onClick={() => alert(`Added ${name} to cart`)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
