
import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import addtoCardmodel from "@/model/addtocard";
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation'; 

export async function POST(req: Request) {
  await dbConnect();

  const { userId } = await auth();



  if (!userId) {
    return NextResponse.json(
      { message: "Unauthorized" }, 
      { status: 401 }
    );
  }

  const body = await req.json();
  const id = body.id;

  console.log(id, "ID for delete product");

  if (!id) {
    return NextResponse.json(
      { message: "Product ID is required" }, 
      { status: 400 }
    );
  }

  const existingProduct = await addtoCardmodel.findOneAndDelete({
    _id: id,
    user_id: userId,
  });

  if (!existingProduct) {
    return NextResponse.json(
      { message: "Product not found in cart" }, 
      { status: 404 }
    );
  }

  const allProducts = await addtoCardmodel.find({ user_id: userId }).populate("product_details");

  return NextResponse.json(
    { message: "Product deleted from cart", data: allProducts }, 
    { status: 200 }
  );
}
