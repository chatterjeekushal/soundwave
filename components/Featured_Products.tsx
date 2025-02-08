
import React from "react";
import {  ArrowRight } from "lucide-react"; // Import Lucide icons

import ProductCard from "./ui/product_card";
const FeaturedProducts = () => {
  const products = [
    {
      name: "Pro Wireless Max",
      rating: 4.5,
      price: "$299.99",
      description: "Active Noise Cancelling",
      stars: 4.5,
      src:"https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Using Lucide Headphones Icon
    },
    {
      name: "Studio Pro",
      rating: 5,
      price: "$399.99",
      description: "Professional Studio Quality",
      stars: 5,
      src:"https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Using Lucide Headphones Icon
    },
    {
      name: "Sport Elite",
      rating: 4,
      price: "$199.99",
      description: "Waterproof & Sweatproof",
      stars: 4,
     src:"https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Using Lucide Headphones Icon
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
        <p className="text-gray-600">Discover our most popular premium headphones</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <ProductCard
              name={product.name}
              rating={product.rating}
              price={product.price}
              description={product.description}
              
              src={product.src} // Pass the source image URL
            />
            
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition duration-300">
          View All Products
          <ArrowRight className="ml-2 inline-block" />
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
