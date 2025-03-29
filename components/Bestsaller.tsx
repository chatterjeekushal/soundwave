
'use client';

import { Carousel, CarouselSlide } from "@mantine/carousel";
import ProductCard from "@/components/ui/product_card";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";

interface Product {
  category: string;
  condition: string;
  description: string;
  images: string[];
  language: string;
  listed: boolean;
  launchYear: number;
  manufacturer: string;
  price: number;
  rating: number;
  stockQuantity: number;
  title: string;
}

function Bestseller() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/bestsaller");

        if (response.data && response.data.products) {
            // console.log("API Response:", response.data);
            // console.log(response.data.products.length);
          setProducts(response.data.products);
        } else {
          console.error("Invalid API response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full mx-auto ml-2 sm:m-auto lg:m-auto xl:m-auto sm:px-6 lg:px-8 mt-16">
      <div className="flex flex-col items-center justify-center gap-4 mb-12 pt-3 lg:pt-20">
        <div className="text-3xl font-bold text-center">Our Bestseller</div>
        <div className="text-gray-600 text-center">
          Discover our most popular premium headphones
        </div>
      </div>

      {products.length > 0 ? (
        <Carousel
          height="auto"
          slideSize="33.333333%"
          nextControlIcon={
            <ArrowRight className="w-8 h-8 bg-slate-300 text-black border rounded-lg" />
          }
          previousControlIcon={
            <ArrowLeft className="w-8 h-8 bg-slate-300 text-black border rounded-lg" />
          }
          slideGap="md"
          loop
          align="start"
          slidesToScroll={1}
          className="flex items-center w-full justify-center gap-32  text-red-600"
        >
          {products.map((product, index) => (
            <CarouselSlide
              className="flex ml-8 items-center justify-center gap-32 border border-white"
              key={index}
            >
              <ProductCard
                src={product.images?.[0] || "/default-image.jpg"} // Fallback image
                name={product.title}
                price={product.price}
                rating={product.rating.toString()}
                description={product.description}
                stars={product.rating}
              />
            </CarouselSlide>
          ))}
        </Carousel>
      ) : (
        <div className="text-center text-gray-600">Loading...</div>
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
}

export default Bestseller;
