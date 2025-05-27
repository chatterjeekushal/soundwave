


'use client'

import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import axios from 'axios'
import Image from 'next/image'


import { useToast } from "@/hooks/use-toast"



interface ProductDetails {
  _id: string
  title: string
  category: string
  description: string
  price: number
  condition: string
  images: string[]
  language: string
  listed: boolean
  lounchYear: number
  manufacturer: string
  rating: number
  stockQuantity: number
}

interface Product {
  _id: string
  product_id: string
  product_details: ProductDetails
  user_id: string
  createdAt: string
  updatedAt: string
  __v: number
}

function Add_to_card_full_page() {


  const searchParams = useSearchParams()

  const { toast } = useToast()

  const productid = searchParams.get('product_id')
  const product_details = searchParams.get('product_details')

  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState<string | null>(null)
  const [quantities, setQuantities] = useState<{ [productId: string]: number }>({})
  const [subtotalprice, setSubtotal] = useState<number>(0)
  const [deliveryTotalprice, setDeliveryTotal] = useState<number>(0)
  const [grandTotalprice, setGrandTotal] = useState<number>(0)

  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()

    const sendToApi = async () => {
      if (!productid || !product_details) return

      try {
        const response = await axios.post(
          `/api/addtocard?product_id=${productid}&product_details=${product_details}`,
          {},
          { signal: controller.signal }
        )

        if (isMounted) {
          const data = response.data?.data
          if (Array.isArray(data)) {
            setProducts(data)
            const initialQuantities: { [productId: string]: number } = {}
            data.forEach((item) => {
              initialQuantities[item._id] = 1
            })
            setQuantities(initialQuantities)
          } else {
            setError('Invalid API response format')
          }
        }
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error('Error:', error)
          setError('Something went wrong')
        }
      }
    }

    sendToApi()

    return () => {
      isMounted = false
      controller.abort()
    }
  }, [productid, product_details])

  const handleQuantityChange = (id: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta)
    }))
  }

  useEffect(() => {
    const subtotal = products.reduce((total, item) => {
      const quantity = quantities[item._id] || 1
      return total + item.product_details.price * quantity
    }, 0)

    const delivery = products.length * 15
    const grand = subtotal + delivery

    setSubtotal(subtotal)
    setDeliveryTotal(delivery)
    setGrandTotal(grand)

    // console.log('Subtotal:', subtotal)
    // console.log('Delivery:', delivery)
    // console.log('Grand Total:', grand)

  }, [products, quantities])


  const handleRemoveProduct = async (id: string) => {
    console.log('Removing product with ID:', id)

    try {

      const responce = await axios.post(`/api/remove_product_card`,
        { id },


      )
      // console.log('Product removed successfully:', responce.data)

      setProducts(responce.data?.data)

      toast({
        title: `${responce.data?.message}`,
        description: `${Date.now()}`,
      })

    } catch (error) {

      console.error('Error removing product:', error)
      setError('Failed to remove product')
    }

  }


 


  return (

    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
        <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
          Shopping Cart
        </h2>

        <div className="hidden lg:grid grid-cols-2 py-6">
          <div className="font-normal text-xl leading-8 text-gray-500">Product</div>
          <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
            <span className="w-full max-w-[200px] text-center">Delivery Charge</span>
            <span className="w-full max-w-[260px] text-center">Quantity</span>
            <span className="w-full max-w-[200px] text-left">Total</span>
          </p>
        </div>

        {products.map((item) => {
          const quantity = quantities[item._id] || 1;
          const total = item.product_details.price * quantity;

          return (
            <div
              key={item._id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 border-t border-gray-200 py-6"
            >
              {/* Image and text block for mobile */}
              <div className="flex flex-col lg:flex-row gap-6 w-full">
                <Image
                  src={item.product_details.images[0]}
                  alt={item.product_details.title}
                  className="w-[500px] lg:w-[200px] rounded-xl object-cover mx-auto lg:mx-0"
                  width={140}
                  height={140}
                />
                <div>
                  <h5 className="font-semibold text-xl text-black">{item.product_details.title}</h5>
                  <p className="text-gray-500 my-2">{item.product_details.description}</p>
                  <h6 className="text-indigo-600 font-medium text-lg">${item.product_details.price.toFixed(2)}</h6>


                </div>
              </div>

              {/* Delivery, quantity and total block */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                <h6 className="font-bold text-2xl text-black text-center lg:text-left">
                  $15.00 <span className="text-sm text-gray-400">(Delivery)</span>
                </h6>

                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(item._id, -1)}
                    className="px-4 py-2 border border-gray-300"
                  >-</button>
                  <input
                    type="text"
                    className="w-16 text-center border-y border-gray-300 outline-none"
                    value={quantity}
                    readOnly
                  />
                  <button
                    onClick={() => handleQuantityChange(item._id, 1)}
                    className="px-4 py-2 border border-gray-300"
                  >+</button>
                </div>

                <h6 className="font-bold text-2xl text-indigo-600 text-center lg:text-right">
                  ${total.toFixed(2)}
                </h6>
                {/* Remove Button */}
                <button
                  onClick={() => handleRemoveProduct(item._id)}
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
              </div>

            </div>

          )
        })}


        {/* Summary */}
        <div className="bg-gray-50 rounded-xl p-6 mt-10">
          <div className="flex justify-between mb-4">
            <span className="text-gray-500 text-xl">Subtotal</span>
            <span className="text-gray-900 font-semibold text-xl">${subtotalprice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-4 mb-4">
            <span className="text-gray-500 text-xl">Delivery</span>
            <span className="text-gray-900 font-semibold text-xl">${deliveryTotalprice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-2xl text-black">Total</span>
            <span className="font-medium text-2xl text-indigo-600">${grandTotalprice.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
        <button
          className="rounded-full py-4 w-full max-w-[280px]  flex items-center bg-indigo-50 justify-center transition-all duration-500 hover:bg-indigo-100">
          <span className="px-2 font-semibold text-lg leading-8 text-indigo-600">Add Coupon Code</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998" stroke="#4F46E5" strokeWidth="1.6"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700">Continue
          to Payment
          <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22"
            fill="none">
            <path d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998" stroke="white" strokeWidth="1.6"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          onClick={() => window.location.href = '/shop_page'}
          className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-red-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-red-700">Go To Shop
          <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22"
            fill="none">
            <path d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998" stroke="white" strokeWidth="1.6"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

      </div>
    </section>



  )
}

export default Add_to_card_full_page
