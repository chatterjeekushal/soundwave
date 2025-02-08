
import * as React from "react";
import ProductCard from "./ui/product_card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
   
} from "@/components/ui/carousel";

export function CarouselSize() {
    const products = [
        {
            name: "Pro Wireless Max",
            rating: 4.5,
            price: "$299.99",
            description: "Active Noise Cancelling",
            stars: 4.5,
            src:
                "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            name: "Studio Pro",
            rating: 5,
            price: "$399.99",
            description: "Professional Studio Quality",
            stars: 5,
            src:
                "https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            name: "Sport Elite",
            rating: 4,
            price: "$199.99",
            description: "Waterproof & Sweatproof",
            stars: 4,
            src:
                "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            name: "Sport Elite",
            rating: 4,
            price: "$199.99",
            description: "Waterproof & Sweatproof",
            stars: 4,
            src:
                "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ];

    return (
        <>

            <div className="max-w-screen-xl mx-auto px-4 pt-16">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold">Best Sellers</h2>
                    <div className="flex gap-2">
                        <button className="bestseller-prev w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition-colors">
                            <i className="fa-solid fa-arrow-left text-gray-600"></i>
                        </button>
                        <button className="bestseller-next w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition-colors">
                            <i className="fa-solid fa-arrow-right text-gray-600"></i>
                        </button>
                    </div>
                </div>
                <p className="text-gray-600 max-w-2xl">Our most popular headphones that customers love and keep coming back for.</p>
            </div>

            <Carousel opts={{ align: "start" }} className="max-w-full md:pl-8 pt-5 lg:pt-7">
                <CarouselContent className="w-full -ml-2 md:-ml-4">
                    {products.map((product, index) => (
                        <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3 pl-2 md:pl-4">
                            <div className="p-5">
                                <ProductCard
                                    name={product.name}
                                    rating={product.rating}
                                    price={product.price}
                                    description={product.description}
                                    src={product.src} // Pass the source image URL
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

            </Carousel>

        </>
    );
}
