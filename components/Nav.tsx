
'use client';

import React, { useState, useEffect } from 'react';
import { Menu, ShoppingCart } from 'lucide-react';
import { UserButton, useUser } from '@clerk/nextjs';
import { NavigationMenuDemo } from "@/components/ui/style_nav_manu";
import { Search_component } from "@/components/Search";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/lib/store/hooks";



const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const { user } = useUser();

const [cartItemCount, setCartItemCount] = useState(0);

// Retrieve cart item count from localStorage on initial render
const cartValue = useAppSelector((state) => state.getaddtocartvalue.value);

// console.log("Cart Value:", cartValue);

useEffect(() => {
  if (typeof window !== 'undefined') {
    const storedCart = localStorage.getItem('cartValue');
    const cartValue = storedCart ? JSON.parse(storedCart) : [];
    setCartItemCount(cartValue.length);
  }
}, []);
 

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
            <Link href="#" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link href="/shop_page" className="text-gray-700 hover:text-gray-900">Shop</Link>
            <NavigationMenuDemo />
            <Link href="#" className="text-gray-700 hover:text-gray-900">About</Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900">Contact</Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search (Desktop Only) */}
            <div className="hidden md:block">
              <Search_component />
            </div>

            {/* Cart Icon */}
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <ShoppingCart className="text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
               {cartValue==0?cartItemCount: cartValue.length}
              </span>
            </button>

            {/* Mobile Menu Icon */}
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
              <Menu className="text-gray-700" />
            </button>

            {/* User or Login Button */}
            {user ? (
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
