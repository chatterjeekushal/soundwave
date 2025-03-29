
'use client';

import React, { useCallback, useEffect, useState } from 'react';
import {
    BatteryFull,
    Volume2,
    Bluetooth,
    Mic,
    Sliders,
    Waves,
    Truck,
    Shield,
    RotateCcw,
    Headphones as Headset,
} from 'lucide-react';

import Image from 'next/image';
import { getCldImageUrl, getCldVideoUrl } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

const ProductShowcase = () => {
    const [ishover, setIshover] = useState(false);
    const [previewerror, setPreviewerror] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const publicurl = "https://res.cloudinary.com/dqhef4w9b/video/upload/v1739433432/8003613-uhd_2160_3840_25fps_fexbk9.mp4";
    const thamnelurl = "https://images.pexels.com/photos/10292808/pexels-photo-10292808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

    // Check screen size on component mount and resize
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1024); // Adjust breakpoint as needed
        };

        handleResize(); // Check on initial render
        window.addEventListener('resize', handleResize); // Add event listener for resize

        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup event listener
        };
    }, []);

    const getThamnalurl = useCallback((publicid: string) => {
        return getCldImageUrl({
            src: publicid,
            width: 400,
            height: 400,
            crop: 'fill',
            gravity: 'auto',
            format: 'jpg',
            quality: 'auto',
        });
    }, []);

    const getPreviewvideourl = useCallback((publicid: string) => {
        return getCldVideoUrl({
            src: publicid,
            width: 500,
            height: 500,
            format: 'auto',
            quality: 'auto',
        });
    }, []);

    const handleMouseEnter = () => {
        setIshover(true);
    };

    const handleMouseLeave = () => {
        setIshover(false);
    };

    return (
        <div className="w-full mx-auto mt-16 lg:mt-24 max-w-screen-2xl">
            {/* Main Product Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 w-full rounded-lg p-0 lg:p-12 lg:bg-slate-200 bg-neutral-200">
                <div className="order-2 lg:order-1 px-4 lg:px-0">
                    <span className="text-blue-600 font-semibold mb-4 block text-center 2xl:text-lg">Premium Quality</span>
                    <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold mb-6 text-center">Premium Noise Cancelling Headphones</h2>
                    <div className="space-y-4 mb-8 w-full 2xl:space-y-6">
                        {/* Product Features */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 2xl:w-14 2xl:h-14">
                                <BatteryFull className="text-blue-600 w-6 h-6 2xl:w-8 2xl:h-8" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1 2xl:text-xl">40H Battery Life</h3>
                                <p className="text-gray-600 2xl:text-lg">Extended playtime for uninterrupted listening experience</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 2xl:w-14 2xl:h-14">
                                <Volume2 className="text-blue-600 w-6 h-6 2xl:w-8 2xl:h-8" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1 2xl:text-xl">Active Noise Cancellation</h3>
                                <p className="text-gray-600 2xl:text-lg">Block out external noise for immersive sound</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 2xl:w-14 2xl:h-14">
                                <Bluetooth className="text-blue-600 w-6 h-6 2xl:w-8 2xl:h-8" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1 2xl:text-xl">Bluetooth 5.0</h3>
                                <p className="text-gray-600 2xl:text-lg">Stable connection with extended range</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 mb-8 ml-4 2xl:gap-6">
                        <div>
                            <span className="block text-3xl font-bold 2xl:text-4xl">$299.99</span>
                            <span className="text-green-600 2xl:text-lg">Free Shipping</span>
                        </div>
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors 2xl:px-10 2xl:py-4 2xl:text-lg">
                            Add to Cart
                        </button>
                    </div>
                    <div className="flex items-center gap-6 ml-2 mb-5 2xl:gap-8">
                        <div className="flex items-center gap-2">
                            <i className="fa-solid fa-star text-yellow-400 2xl:text-xl"></i>
                            <span className="font-semibold 2xl:text-xl">4.9/5.0</span>
                        </div>
                        <div className="flex -space-x-2">
                            <span className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-sm 2xl:w-10 2xl:h-10 2xl:text-base">+99</span>
                        </div>
                    </div>
                </div>
                <div className="order-1 lg:order-2 w-full border rounded-lg">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center border ">
                        <div className="relative w-full h-[500px] border rounded-lg 2xl:h-[900px]"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {/* Display video by default on small screens */}
                            {(isSmallScreen || ishover) ? (
                                <video
                                    src={getPreviewvideourl(publicurl)}
                                    autoPlay
                                    muted
                                    loop
                                    className="w-full h-full object-cover"
                                    onError={() => setPreviewerror(true)}
                                />
                            ) : (
                                <Image
                                    src={thamnelurl}
                                    alt="Product"
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover border rounded-lg"
                                />
                            )}
                            {previewerror && (
                                <Image
                                    src={thamnelurl}
                                    alt="Product"
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover absolute rounded-md"
                                />
                            )}
                            {/* Product Features Tooltips */}
                            {!isSmallScreen && !ishover && (
                                <>
                                    <div className="absolute top-1/4 left-1/4 bg-white p-3 rounded-xl shadow-lg 2xl:p-4">
                                        <Waves className="text-blue-600 w-5 h-5 2xl:w-6 2xl:h-6" />
                                        <span className="text-sm font-medium ml-2 2xl:text-base">Custom EQ</span>
                                    </div>
                                    <div className="absolute top-1/2 right-8 bg-white p-3 rounded-xl shadow-lg 2xl:p-4">
                                        <Sliders className="text-blue-600 w-5 h-5 2xl:w-6 2xl:h-6" />
                                        <span className="text-sm font-medium ml-2 2xl:text-base">Touch Controls</span>
                                    </div>
                                    <div className="absolute bottom-1/4 left-1/4 bg-white p-3 rounded-xl shadow-lg 2xl:p-4">
                                        <Mic className="text-blue-600 w-5 h-5 2xl:w-6 2xl:h-6" />
                                        <span className="text-sm font-medium ml-2 2xl:text-base">HD Voice</span>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-0 2xl:gap-8">
                <div className="bg-white p-6 rounded-xl text-center 2xl:p-8">
                    <Truck className="text-blue-600 w-8 h-8 mx-auto mb-4 2xl:w-10 2xl:h-10" />
                    <h3 className="font-semibold mb-2 2xl:text-xl">Fast Delivery</h3>
                    <p className="text-gray-600 text-sm 2xl:text-base">Free shipping on orders over $50</p>
                </div>
                <div className="bg-white p-6 rounded-xl text-center 2xl:p-8">
                    <Shield className="text-blue-600 w-8 h-8 mx-auto mb-4 2xl:w-10 2xl:h-10" />
                    <h3 className="font-semibold mb-2 2xl:text-xl">2 Years Warranty</h3>
                    <p className="text-gray-600 text-sm 2xl:text-base">Full coverage for peace of mind</p>
                </div>
                <div className="bg-white p-6 rounded-xl text-center 2xl:p-8">
                    <RotateCcw className="text-blue-600 w-8 h-8 mx-auto mb-4 2xl:w-10 2xl:h-10" />
                    <h3 className="font-semibold mb-2 2xl:text-xl">Easy Returns</h3>
                    <p className="text-gray-600 text-sm 2xl:text-base">30-day money-back guarantee</p>
                </div>
                <div className="bg-white p-6 rounded-xl text-center 2xl:p-8">
                    <Headset className="text-blue-600 w-8 h-8 mx-auto mb-4 2xl:w-10 2xl:h-10" />
                    <h3 className="font-semibold mb-2 2xl:text-xl">24/7 Support</h3>
                    <p className="text-gray-600 text-sm 2xl:text-base">Always here to help you</p>
                </div>
            </div>
        </div>
    );
};

export default ProductShowcase;