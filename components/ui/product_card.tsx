
'use client';

import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  src: any;
  name: string;
  price: number;
  stars: number;
  rating: string;
  description?: string;

}

const ProductCard: React.FC<ProductCardProps> = ({ src, name, price, stars, rating }) => {

  console.log("name", name);

  return (
    <div className="relative flex w-full flex-col overflow-hidden rounded-lg border border-gray-300  shadow-md">
      <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
        <Image
          className="object-cover w-full h-full"
          src={src}
          alt={name}
          width={500}
          height={500}
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          39% OFF
        </span>
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900">{name}</h5>
        </a>
        <p className="mt-2 text-gray-500">{name}</p>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">₹{price}</span>
          </p>
          <div className="flex items-center">
            {Array.from({ length: stars }).map((_, index) => (
              <svg
                key={index}
                className="h-5 w-5 text-yellow-400 "
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
            <span className="ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{rating}</span>
          </div>
        </div>
        <a
          href="#"
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
