
'use client';

import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react"; 
import ProductCard from "./ui/product_card";
import axios from "axios";
import Link from "next/link";

interface Product {
  category: string;
  condition: string;
  description: string;
  images: string[];
  language: string;
  listed: boolean;
  lounchYear: number;
  manufacturer: string;
  price: number;
  rating: number;
  stockQuantity: number;
  title: string;
}

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/feached_product");
        
        // console.log("API Response:", response.data); // Debugging API response

        if (response.data && response.data.products) {
          setProducts(response.data.products);
        } else {
          // console.error("Invalid API response format:", response.data);

        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Log updated products
  // useEffect(() => {
  //   // console.log("Updated products:", products);
  // }, [products]);

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
          Featured Products
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Discover our collection of amazing products.
        </p>
      </div>

      {/* Product Grid */}
      {products.length > 0 ? (
        <div className="flex justify-center gap-8 lg:gap-16 w-full flex-wrap">
          {products.map((product, index) => (
            <div
              key={index}
              className="gap-20 sm:gap-8 flex flex-col justify-center sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <Link href={`/product_details_view/${product.title}`} className="cursor-pointer">
              
              <ProductCard
                src={product.images[0]}
                name={product.title}
                price={product.price}
                stars={product.rating}
                rating={product.rating.toString()}
              />

              </Link>
           
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">No featured products available.</div>
      )}

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
