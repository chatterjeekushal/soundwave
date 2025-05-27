
'use client';

import { useState, use, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { useDispatch } from "react-redux"
import { getaddtocartvalue } from "@/lib/store/features/slice"
import { useRouter } from 'next/navigation';
import { Card } from "@mantine/core";

interface Product {
  _id: string;
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

declare global {
  interface Window {
    Razorpay: any;
  }
}

const ProductPage = ({ params }: { params: Promise<{ producttitle: string }> }) => {
  const { producttitle } = use(params);
  const producttitle_data = decodeURIComponent(producttitle);
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState("");
  

  const dispatch = useDispatch() // Correct Redux dispatch usage
  const router = useRouter();

const handleAddToCartvalue = (productid: string) => {
  // go to onother url
  // and add the value to the cart
 router.push(`/add_to_card_view?product_id=${productid}&product_details=${productid}`);
    // Update cart value in localStorage
  const cartValue = JSON.parse(localStorage.getItem('cartValue') || '[]');
  cartValue.push((cartValue.length + 1)); // Assuming you want to add a new item with an incremented ID
  localStorage.setItem('cartValue', JSON.stringify(cartValue));
  // Dispatch action to update Redux store
  dispatch(getaddtocartvalue(cartValue));
  console.log("Product added to cart:", cartValue);
  // Optionally, you can show a success message or update UI
  alert("Product added to cart successfully!");
   
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/api/product_detail_view?producttitle_data=${producttitle_data}`);
        if (response.data?.product) {
          setProduct(response.data.product);
          if (response.data.product.images?.length > 0) {
            setSelectedImage(response.data.product.images[0]);
          }
        } else {
          console.error("Invalid API response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
  
    fetchData();
  }, [producttitle_data]);

 

  if (!product) {
    return <div className="bg-gray-100 pt-20 flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>;
  }

  return (
    <>
   
      <div className="p-4 mt-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="sticky top-20 bg-white p-4 rounded-lg shadow-md">
            <div className="flex flex-col gap-3">
              {product.images.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  width={100}
                  height={130}
                  alt={`Product Thumbnail ${index + 1}`}
                  className={`cursor-pointer border-2 rounded-md transition-transform transform ${
                    selectedImage === img ? 'border-blue-500 scale-105' : 'border-transparent'
                  }`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
            <div className="mt-4">
              <Image
                src={selectedImage || "/placeholder-product.jpg"}
                width={500}
                height={400}
                alt="Main Product"
                className="w-full rounded-lg shadow-lg object-cover"
                priority
              />
            </div>
          </div>

          {/* Product Details Section */}
          <div className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-gray-800">{product.title}</h3>
            <p className="text-gray-500">{product.description}</p>
            <div className="flex items-center gap-4 mt-4">
              <h4 className="text-2xl font-semibold text-gray-900">₹{product.price}</h4>
              <p className="text-gray-400 line-through">₹{product.price + 100}</p>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <span className="text-yellow-400">
                {'⭐'.repeat(Math.floor(product.rating))}
                {'☆'.repeat(5 - Math.floor(product.rating))}
              </span>
              <p className="text-gray-500 text-sm">{product.rating} ratings</p>
            </div>

            <div className="flex gap-4 mt-4">
              <button 
                onClick={() => handleAddToCartvalue(product._id)} 
                className="flex-1 bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
              >
                Add to Cart
              </button>

              <Link 
                href={`/buynow_page?product_id=${product._id}&product_details=${product._id}`} 
                // onClick={handlePayment} 
                // disabled={isProcessing || !razorpayLoaded}
                className="flex-1 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition text-center"
              >
               Buy Now
              </Link>
            </div>

            <hr className="my-4 border-gray-300" />

            <h4 className="text-xl font-semibold text-gray-800">Customer Reviews</h4>
            <div className="flex items-center gap-1 mt-2">
              {'⭐'.repeat(Math.floor(product.rating))}
              {'☆'.repeat(5 - Math.floor(product.rating))}
              <p className="text-gray-500 text-sm">(Based on {product.rating} ratings)</p>
            </div>

            <div className="flex items-start gap-3 mt-4">
              <Image
                src="https://readymadeui.com/team-2.webp"
                alt="Customer"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h5 className="font-semibold text-gray-800">John Doe</h5>
                <p className="text-gray-500 text-sm">2 months ago</p>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <Link href="#" className="text-blue-600 hover:underline mt-4 inline-block">
              Read all reviews
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;