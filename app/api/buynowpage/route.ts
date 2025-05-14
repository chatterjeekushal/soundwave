
import dbConnect from "@/lib/dbConnect";
import Product from "@/model/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    const productId = req.nextUrl.searchParams.get("product_id");

    if (!productId) {
      return NextResponse.json({ message: "Product ID is required" }, { status: 400 });
    }

    const product = await Product.findById(productId);

    if (!product) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Fetched product successfully", data: product },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { message: "Fetching product failed", error: error instanceof Error ? error.message : error },
      { status: 500 }
    );
  }
}
