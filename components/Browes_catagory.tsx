
import React from 'react';
import { Wifi, VolumeX, Volume, Speaker, Headphones, Gamepad, ArrowLeft, ArrowRight } from 'lucide-react';

const Categories = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 pt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Browse Categories</h2>
        <p className="text-gray-600">Find the perfect headphones for your lifestyle</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Wireless Category */}
        <div className="bg-slate-200 rounded-xl p-6 text-center shadow-lg hover:bg-blue-100 hover:text-black transition-all duration-300">
          <div className="h-24 flex items-center justify-center mb-4">
            <Wifi className="text-5xl text-blue-600" />
          </div>
          <h3 className="font-bold mb-2">Wireless</h3>
          <p className="text-gray-600 text-sm mb-4">Freedom of movement</p>
          <a href="#" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
            Shop Now
            <ArrowRight className="ml-2" />
          </a>
        </div>

        {/* Noise Cancelling Category */}
        <div className="bg-slate-200 rounded-xl p-6 text-center shadow-lg  hover:bg-blue-100 hover:text-black transition-all duration-300">
          <div className="h-24 flex items-center justify-center mb-4">
            <VolumeX className="text-5xl text-blue-600" />
          </div>
          <h3 className="font-bold mb-2">Noise Cancelling</h3>
          <p className="text-gray-600 text-sm mb-4">Pure audio experience</p>
          <a href="#" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
            Shop Now
            <ArrowRight className="ml-2" />
          </a>
        </div>

        {/* Sport Category */}
        <div className="bg-slate-200 rounded-xl p-6 text-center shadow-lg  hover:bg-blue-100 hover:text-black transition-all duration-300">
          <div className="h-24 flex items-center justify-center mb-4">
            <Volume className="text-5xl text-blue-600" />
          </div>
          <h3 className="font-bold mb-2">Sport</h3>
          <p className="text-gray-600 text-sm mb-4">Built for action</p>
          <a href="#" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
            Shop Now
            <ArrowRight className="ml-2" />
          </a>
        </div>

        {/* Studio Category */}
        <div className="bg-slate-200 rounded-xl p-6 text-center shadow-lg  hover:bg-blue-100 hover:text-black transition-all duration-300">
          <div className="h-24 flex items-center justify-center mb-4">
            <Speaker className="text-5xl text-blue-600" />
          </div>
          <h3 className="font-bold mb-2">Studio</h3>
          <p className="text-gray-600 text-sm mb-4">Professional grade</p>
          <a href="#" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
            Shop Now
            <ArrowRight className="ml-2" />
          </a>
        </div>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {/* Special Category Banner 1 */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Premium Collection</h3>
              <p className="mb-4">Experience studio-quality sound</p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300">
                Explore
              </button>
            </div>
            <div className="text-6xl">
              <Headphones />
            </div>
          </div>
        </div>

        {/* Special Category Banner 2 */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Gaming Series</h3>
              <p className="mb-4">Immersive gaming experience</p>
              <button className="bg-white text-purple-600 px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300">
                Explore
              </button>
            </div>
            <div className="text-6xl">
              <Gamepad />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
