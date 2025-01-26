
import React from 'react';
import { Star, StarHalf, StarOff } from 'lucide-react';

interface ProductCardProps {
  name: string;
  rating: number;
  price: string;
  description: string;
  src: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, rating, price, description, src }) => {
  // Function to generate stars based on rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    const starElements = [];

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      starElements.push(<Star key={`full-${i}`} className="text-yellow-400" />);
    }

    // Add half star if necessary
    if (halfStar) {
      starElements.push(<StarHalf key="half" className="text-yellow-400" />);
    }

   

    return starElements;
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="h-64 bg-gray-100 flex items-center justify-center">
        <img src={src} alt={name} className="object-contain h-full" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <div className="flex items-center mb-2">
          <div className="flex">{renderStars(rating)}</div>
          <span className="text-gray-500 ml-2">{`(${rating})`}</span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">{price}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
