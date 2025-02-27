
import React from "react";
import { Compare } from "@/components/ui/compare";

export default function CompareDemo() {
  return (

    <div className="w-full mx-auto mt-20">

      <div className="text-center mb-10">

      <h1 className="text-3xl lg:text-4xl font-bold">Compare Product quickly</h1>

      <p className="text-gray-600 mt-3">compare and choose right product</p>

      </div>

    <div className="p-2 lg:p-4 w-full border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-2 lg:px-4">
      <Compare
        firstImage="https://images.unsplash.com/photo-1575125069494-6a0c5819d340?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        
        secondImage="https://cellecor.com/cdn/shop/articles/Artboard_4.jpg?v=1719562670"
        firstImageClassName="object-cover object-center backdrop-grayscale"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-full md:h-[500px] md:w-full"
        slideMode="drag"
       
      />
    </div>
    </div>
  );
}
