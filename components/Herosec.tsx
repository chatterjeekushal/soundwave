
import React from "react";
import { ArrowBigDown, ArrowBigLeft, ArrowLeft, ArrowRight, Headphones } from "lucide-react";  // Importing the Headphones icon from lucide-react

import Carousel from "./Carousel";

const HeroSection = () => {
    return (
        <div className=" mx-auto px-4 py-24 lg:py-32 bg-black w-full">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center pl-0 lg:pl-8 md:text-left" >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in ">
                        Experience <span className="text-blue-600"> Unmatched Sound </span> Quality
                    </h1>
                    <p className="text-gray-300 text-lg mb-8 animate-fade-in-delay">
                        Immerse yourself in crystal-clear audio with our premium headphones collection.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 animate-fade-in-up flex items-center mx-auto md:mx-0">
                        Shop Now
                        <ArrowRight className="ml-2" />
                    </button>

                </div>

                <div className="flex justify-center items-center py-8">
  <div className="w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 h-96 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg animate-fade-in flex items-center justify-center">
    <Carousel />
  </div>
</div>



            </div>
        </div>
    );
};

export default HeroSection;
