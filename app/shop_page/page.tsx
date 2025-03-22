
'use client'

import React, { useEffect, useState } from "react";
import { ImagesSliderDemo } from "@/components/shop_hero";
import ProductCard from "@/components/ui/product_card";
import axios from "axios";
import { ComboboxDemo } from "@/components/ui/filter_compo";
import { useAppSelector } from "@/lib/store/hooks";

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
    
    // Retrieve price filter value from Redux state
    const priceRange = useAppSelector((state) => state.getpricefiltervalue.value);

    console.log(priceRange,"priceRange")

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`/api/shop_page?data=${priceRange}`);
                if (response.data?.products) {
                    setProducts(response.data.products);
                } else {
                    console.error("Invalid API response format:", response.data);
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        fetchData();
    }, [priceRange]); // Dependency ensures re-fetch when price filter changes

    return (
        <div className="container mx-auto px-4 md:px-8">
            {/* Hero Slider Section */}
            <div className="w-full">
                <ImagesSliderDemo />
            </div>

            {/* Filter Section */}
            <div className="flex flex-wrap justify-start gap-4 items-center mt-10">
                <ComboboxDemo  />
                
            </div>

            {/* Product Grid Section */}
            <div className="mt-10">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {products.length > 0 ? (
                        products.map((product, index) => (
                            <ProductCard
                                key={index}
                                src={product.images?.[0] || "/default-image.jpg"} // Fallback image
                                name={product.title}
                                price={product.price}
                                rating={product.rating.toString()}
                                description={product.description}
                                stars={product.rating}
                            />
                        ))
                    ) : (
                        <p className="text-center col-span-full">No products found.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
