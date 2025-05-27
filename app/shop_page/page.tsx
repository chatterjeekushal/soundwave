
'use client'

import React, { useEffect, useState, useCallback } from "react";
import { ImagesSliderDemo } from "@/components/shop_hero";
import ProductCard from "@/components/ui/product_card";
import axios from "axios";
import { ComboboxDemo } from "@/components/ui/filter_compo";
import { useAppSelector } from "@/lib/store/hooks";
import FilterCategory from "@/components/ui/filter_catagory";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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

export default function ShopPage() {
    const [products, setProducts] = useState<Product[]>([]);
    
    const priceRange = useAppSelector((state) => state.getpricefiltervalue.value);
    const catagory = useAppSelector((state) => state.getfiltercatagoryvalue.value);

   const fetchData = useCallback(async (producttitle_data?: string) => {
  try {
    // Convert to string before encoding
    const price = encodeURIComponent(String(priceRange || 'all'));
    const category = encodeURIComponent(String(catagory || 'all'));

    const response = await axios.get(`/api/shop_page?price=${price}&catagory=${category}`);

    if (response.data?.products) {
      setProducts(response.data.products);
    } else {
      console.error("Invalid API response format:", response.data);
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}, [priceRange, catagory]);



    // Fetch on mount and filter change
    useEffect(() => {
        fetchData();
    }, [fetchData]);



    return (
        <div className="container mx-auto px-4 md:px-8">
            {/* Hero Slider Section */}
            <div className="w-full h-full bg-gray-200 rounded-lg overflow-hidden mt-20">
                <ImagesSliderDemo />
            </div>

            {/* Filter Section */}
            <div className="flex flex-wrap justify-between gap-4 items-center mt-10">
                <ComboboxDemo />
                <FilterCategory />
            </div>

            {/* Product Grid Section */}
            <div className="mt-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.length > 0 ? (
                        products.map((product, index) => (
                            <Link 
                                key={index} 
                                href={`/product_details_view/${encodeURIComponent(product.title)}`} 
                                className="block"
                            >
                                <ProductCard
                                    src={product.images?.[0] || "/default-image.jpg"}
                                    name={product.title}
                                    price={product.price}
                                    rating={product.rating.toString()}
                                    description={product.description}
                                    stars={product.rating}
                                />
                            </Link>
                        ))
                    ) : (
                        <p className="text-center col-span-full text-gray-500 text-xl">No products found.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
