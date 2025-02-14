
import React from 'react';

import Image from 'next/image';
const Categories = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 pt-16 flex flex-col items-center ">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Browse Categories</h2>
        <p className="text-gray-600">Find the perfect headphones for your lifestyle</p>
      </div>


      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div>
        <Image 
          width={500} 
          height={500} 
          className="h-auto max-w-full rounded-lg" 
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" 
          alt="Gallery Image 1"
        />
      </div>
      <div>
        <Image 
          width={500} 
          height={500} 
          className="h-auto max-w-full rounded-lg" 
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" 
          alt="Gallery Image 2"
        />
      </div>
      <div>
        <Image 
          width={500} 
          height={500} 
          className="h-auto max-w-full rounded-lg" 
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" 
          alt="Gallery Image 3"
        />
      </div>
      <div>
        <Image 
          width={500} 
          height={500} 
          className="h-auto max-w-full rounded-lg" 
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" 
          alt="Gallery Image 4"
        />
      </div>
    
    </div>
     

     
    </div>
  );
};

export default Categories;
