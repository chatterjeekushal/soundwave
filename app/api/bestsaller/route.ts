
import dbConnect from "@/lib/dbConnect";
import Product from "@/model/product";

export async function GET(req: Request) {

    await dbConnect();

    try {
        
        // feached product which rating is more than 4.5

        const products = await Product.find({rating: {$gte: 4.5}}).sort({createdAt: -1})


        return Response.json({message: "bestseller products successfully", products: products},{status: 200});

    } catch (error) {
        
        return Response.json({message: "bestseller products failed", data: error},{status: 500});

    }

}