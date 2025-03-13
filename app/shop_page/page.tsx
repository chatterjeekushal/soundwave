
'use client'

import React from "react";
import { ImagesSliderDemo } from "@/components/shop_hero";
import ProductCard from "@/components/ui/product_card";
import { ComboboxDemo } from "@/components/ui/filter_compo";
import axios from "axios";
import { useEffect, useState } from "react";

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

    useEffect(() => {

        async function fetchData() {

            try {
                const response = await axios.get('/api/shop_page')
                if (response.data && response.data.products) {
                    // console.log("API Response:", response.data);
                    // console.log(response.data.products.length);
                    setProducts(response.data.products);

                } else {
                    console.error("Invalid API response format:", response.data);
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();


    }, [])



    return (
        <div className="container mx-auto px-4 md:px-8">
            {/* Hero Slider Section */}
            <div className="w-full">
                <ImagesSliderDemo />
            </div>

            {/* Filter and Sort Section */}
            <div className="mt-10 flex flex-wrap items-center justify-start gap-4">

                <ComboboxDemo />

                <ComboboxDemo />

            </div>

            {/* Product Grid Section */}
            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            src={product.images?.[0] || "/default-image.jpg"} // Fallback image
                            name={product.title}
                            price={product.price}
                            rating={product.rating.toString()}
                            description={product.description}
                            stars={product.rating}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
