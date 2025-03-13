
import dbConnect from "@/lib/dbConnect";
import Product from "@/model/product";

export async function GET(req: Request) {
    await dbConnect();

    try {
        
        // feach last 3 products of database

        const products = await Product.find().sort({ createdAt: -1 }).limit(3);

       return Response.json({message: "feached products successfully", products: products},{status: 200});

    } catch (error) {
        
        return Response.json({message: "feached products failed", data: error},{status: 500});
    }

}