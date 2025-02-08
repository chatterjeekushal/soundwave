
import React from 'react';
import { Menu, ShoppingCart, User, Search } from 'lucide-react';
import {  UserButton } from '@clerk/nextjs'


const Navbar = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-900">SoundWave</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Shop</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Categories</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Search className="text-gray-700" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <User className="text-gray-700" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
            <ShoppingCart className="text-gray-700" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">3</span>
          </button>
          <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
            <Menu className="text-gray-700" />
          </button>
          <UserButton/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
