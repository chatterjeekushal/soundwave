
import React from "react";
import { ArrowRight } from "lucide-react"; // Import Lucide icons
import ProductCard from "./ui/product_card";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Pro Wireless Max",
      rating: 4.5,
      price: 299,
      description: "Active Noise Cancelling",
      stars: 4.5,
      src: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Studio Pro",
      rating: 5,
      price: 578,
      description: "Professional Studio Quality",
      stars: 5,
      src: "https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Sport Elite",
      rating: 4,
      price: 789,
      description: "Waterproof & Sweatproof",
      stars: 4,
      src: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Featured Products</h2>
        <p className="text-gray-600 text-sm sm:text-base">Discover our most popular premium headphones</p>
      </div>

      {/* Product Grid */}
      <div className="flex justify-center gap-8 lg:gap-16 w-full   flex-wrap">
        {products.map((product, index) => (
          <div
            key={index}
            className="gap-20 sm:gap-8 flex flex-col justify-center sm:w-1/2 md:w-1/3 lg:w-1/4"
          >
            <ProductCard
              src={product.src}
              name={product.name}
              rating={product.rating.toString()}
              price={product.price}
              stars={product.stars}
              description={product.description}
            />
          </div>
        ))}
      </div>

      {/* View All Products Button */}
      <div className="text-center mt-12">
        <button className="flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 text-sm sm:text-base font-semibold">
          View All Products
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
