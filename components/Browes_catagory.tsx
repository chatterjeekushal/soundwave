
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
          className="h-40 max-w-full rounded-lg md:h-auto" 
          src="https://plus.unsplash.com/premium_photo-1680346528789-0ffcc13f5ebf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhlYWRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D" 
          alt="Gallery Image 1"
        />
      </div>
      <div>
        <Image 
          width={500} 
          height={500} 
          className="h-40 max-w-full rounded-lg md:h-56" 
          src="https://images.unsplash.com/photo-1549638767-0ccf6cb1281b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
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
