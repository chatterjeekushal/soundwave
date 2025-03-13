


import dbConnect from "@/lib/dbConnect";
import Product from "@/model/product";

export async function GET(req: Request) {

    await dbConnect();

    try {
        
       // fetch database all data last to first

        const products = await Product.find().sort({ createdAt: -1 });  // sort by createdAt in descending order       


        return Response.json({message: "all products successfully", products: products},{status: 200}); 

    } catch (error) {
        
        
        return Response.json({message: "all products failed", data: error},{status: 500});

    }

}