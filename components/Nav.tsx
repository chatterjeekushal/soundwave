
'use client';

import React, { useState, useEffect } from 'react';
import { Menu, ShoppingCart } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';
import { NavigationMenuDemo } from "@/components/ui/style_nav_manu";
import { Search_component } from "@/components/Search";
import { useUser } from '@clerk/nextjs';
import Link from "next/link"
 
import { Button } from "@/components/ui/button"


const  Navbar =  () => {


  const [scrolling, setScrolling] = useState(false);
  
  const { user, isLoaded } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolling ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">SoundWave</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="shop_page" className="text-gray-700 hover:text-gray-900">Shop</a>
            <NavigationMenuDemo />
            <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Search for Large Screens */}
            <div className="hidden md:block">
              <Search_component />
            </div>

           

            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <ShoppingCart className="text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                3
              </span>
            </button>

            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
              <Menu className="text-gray-700" />
            </button>

{/* // if user is exist then show userbutton else show login button */}
            { user ? (
              <UserButton />
            ) : (
              <Button asChild>
              <Link href="/sign-in">Login</Link>
            </Button>
              
            )}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
