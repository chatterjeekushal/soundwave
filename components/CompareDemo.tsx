
import React from "react";
import { Compare } from "@/components/ui/compare";

export default function CompareDemo() {
  return (
    <div className="w-full max-w-7xl mx-auto  mt-10 px-4">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Compare Products Quickly
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Compare and choose the right product
        </p>
      </div>

      <div className="p-4 md:p-6  mx-auto border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800">
        <Compare
          firstImage="https://images.unsplash.com/photo-1575125069494-6a0c5819d340?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          secondImage="https://cellecor.com/cdn/shop/articles/Artboard_4.jpg?v=1719562670"
          firstImageClassName="object-cover object-center"
          secondImageClassname="object-cover object-left-top"
          className="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] w-full"
          slideMode="drag"
        />
      </div>
    </div>
  );
}
