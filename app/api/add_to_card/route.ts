
import dbConnect from "@/lib/dbConnect"
import add_to_card_model from "@/model/add_to_card"
import { auth } from '@clerk/nextjs/server'
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  
    await dbConnect()

    const { userId } = await auth()
    
    if (!userId) return NextResponse.json({ message: "Unauthorized" }, { status: 401 })

    const { searchParams } = new URL(req.url)
    const product_id = searchParams.get("product_id")
    const product_details = searchParams.get("product_details")


    // console.log("Product ID:", product_id)
    // console.log("Product Details:", product_details)
    //  console.log("User ID:", userId) 

    if (!product_id || !product_details) {
        return NextResponse.json({ message: "Product ID or details missing" }, { status: 400 })
    }

    // Check if the product already exists in the user's cart
    const existingProduct = await add_to_card_model.findOne({ user_id: userId, product_id })

    // console.log("Existing Product:", existingProduct)

    if (existingProduct) {
        // If it exists, update the product details
        existingProduct.product_details = product_details
        await existingProduct.save()
        const populatedProduct = await add_to_card_model.findById(existingProduct._id).populate("product_details")
        return NextResponse.json({ message: "Product updated in cart", product: populatedProduct }, { status: 200 })
    }else {
        // If it doesn't exist, add the product to the cart
        const newProduct = await add_to_card_model.create({
            user_id: userId,
            product_id,
            product_details
        })
        
        // console.log("New Product:", newProduct._id)

        const populatedProduct = await add_to_card_model.findById(newProduct._id).populate("product_details")

        return NextResponse.json({ message: "Product added to cart", product: populatedProduct }, { status: 201 })
    }

   
}
