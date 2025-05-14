
'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, ShoppingCart } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import axios from 'axios';

// get clerk user
import { useUser } from '@clerk/nextjs';

interface ProductDetails {
  _id: string;
  title: string;
  category: string;
  description: string;
  price: number;
  condition: string;
  images: string[];
  language: string;
  listed: boolean;
  lounchYear: number;
  manufacturer: string;
  rating: number;
  stockQuantity: number;
}

interface Product {
  _id: string;
  product_id: string;
  product_details: ProductDetails;
  user_id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

function Buynow_page() {
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const { user } = useUser();

  const productid = searchParams.get('product_id');

  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [platformFee] = useState<number>(3);
  const [deliveryCharge, setDeliveryCharge] = useState<number>(0);
  const [subtotal, setSubtotal] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/buynowpage?product_id=${productid}`);
        const data = response.data.data;

        // Check if product details exist
        if (!data?.product_details) {
          setProduct({
            ...data,
            product_details: {
              ...data,
              images: data.images || [],
            },
          });
        } else {
          setProduct(data);
        }

        setSubtotal(data.product_details?.price || 0);
        setDeliveryCharge(40); // hardcoded or replace with logic
      } catch (error) {
        console.error('Error fetching product:', error);
        setError('Failed to fetch product');
      }
    };

    if (productid) {
      fetchProduct();
    }
  }, [productid]);

  useEffect(() => {
    if (product) {
      const price = product.product_details.price * quantity;
      setSubtotal(price);
      setTotal(price + deliveryCharge + platformFee);
    }
  }, [product, quantity, deliveryCharge, platformFee]);

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  if (error) return <p className="text-red-500">{error}</p>;
  if (!product) return <p className="text-gray-600">Loading...</p>;

  const { product_details } = product;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        {/* Header */}
        <div className="flex items-center mb-6">
          <span className="text-blue-500 font-bold text-xl mr-2">SoundWave</span>
          <span className="text-xs text-yellow-400 border border-yellow-400 rounded px-1">Join Plus</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">1. LOGIN</span>
              </div>
              <Button variant="link" size="sm" className="text-blue-500">CHANGE</Button>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{user?.fullName} ({user?.phoneNumbers[0].phoneNumber})</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">2. DELIVERY ADDRESS</span>
              </div>
              <Button variant="link" size="sm" className="text-blue-500">CHANGE</Button>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Kushal Chatterjee, R.N.C road, Rajpur Sonarpur, WB - 700147
            </p>

            <div className="flex items-center">
              <ShoppingCart className="text-blue-500 mr-2" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">3. ORDER SUMMARY</span>
            </div>
            <div className="flex items-center border-t border-gray-200 dark:border-gray-700 pt-4">
              <img
                src={product_details.images?.[0] || 'https://via.placeholder.com/80x80'}
                alt="Product"
                className="w-20 h-20 rounded mr-4"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{product_details.title}</p>
                <div className="flex items-center mt-2">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white mr-2">₹{product_details.price}</span>
                  <span className="text-xs text-green-500">Special Price</span>
                </div>
              </div>
              <div className="flex items-center ml-4 space-x-2">
                <Button variant="outline" size="sm" onClick={() => handleQuantityChange(-1)}>-</Button>
                <span className="text-sm">{quantity}</span>
                <Button variant="outline" size="sm" onClick={() => handleQuantityChange(1)}>+</Button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">PRICE DETAILS</h3>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Price ({quantity} item{quantity > 1 ? 's' : ''})</span>
                  <span className="font-medium">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className="font-medium text-green-500">₹{deliveryCharge} FREE</span>
                </div>
                <div className="flex justify-between">
                  <span>Platform Fee</span>
                  <span className="font-medium">₹{platformFee}</span>
                </div>
              </div>
              <div className="border-t mt-2 pt-2 flex justify-between text-sm font-semibold">
                <span>Total Payable</span>
                <span className="font-bold">₹{total}</span>
              </div>
              
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-xs text-gray-600 dark:text-gray-400">
              <p><span className="font-medium">Safe and Secure Payments. </span>Easy returns. 100% Authentic products.</p>
              <p className="mt-2">
                By continuing, you agree to Flipkart's <a href="#" className="text-blue-500 underline">Terms</a> and <a href="#" className="text-blue-500 underline">Privacy Policy</a>.
              </p>
            </div>

            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium">
              CONTINUE
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-6 text-xs text-gray-500 dark:text-gray-400">
          <div className="flex flex-wrap gap-4 mb-2 sm:mb-0">
            <span>Returns Policy</span>
            <span>Terms of Use</span>
            <span>Security</span>
            <span>Privacy</span>
            <span>© 2007-2025 Flipkart.com</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <span>Need help? <a href="#" className="text-blue-500 underline">Help Center</a></span>
            <span>or <a href="#" className="text-blue-500 underline">Contact Us</a></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buynow_page;
