
import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import addtoCardmodel from "@/model/addtocard";
import { auth } from '@clerk/nextjs/server'


export async function POST(req: Request) {
    await dbConnect();

    const { userId } = await auth();

    if (!userId) {
        return NextResponse.json(
            { message: "Unauthorized" }, 
            { status: 401 }
        );
    }

  


    try {
        const { searchParams } = new URL(req.url);
        const product_id = searchParams.get("product_id");
        const product_details = searchParams.get("product_details");

        if (!product_id || !product_details) {
            return NextResponse.json(
                { message: "Product ID and details are required" }, 
                { status: 400 }
            );
        }

        // Check if the product already exists in the cart for the user
        const existingProduct = await addtoCardmodel.findOne({
            product_id,
            user_id: userId,
        });


        

        if (existingProduct) {

          
            const allProducts = await addtoCardmodel.find({ user_id: userId }).populate("product_details");

            return NextResponse.json(
                { message: "Product already exists in cart", data: allProducts }, 
                { status: 200 }
            );
        }

        const newProduct = new addtoCardmodel({
            product_id,
            product_details,
            user_id: userId,
        });

        const savedProduct = await newProduct.save();

        
        

       // get all products from the database with populate
        const allProducts = await addtoCardmodel.find({ user_id: userId }).populate("product_details");
        
        

        return NextResponse.json(
            { message: "Product added to cart", data: allProducts }, 
            { status: 201 }
        );
      

    } catch (error) {
        console.error("Error in save & delete operation:", error);
        return NextResponse.json(
            { message: "Internal Server Error" }, 
            { status: 500 }
        );
    }
}