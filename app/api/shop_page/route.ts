


import dbConnect from "@/lib/dbConnect";
import Product from "@/model/product";


export async function GET(req: Request) {

    await dbConnect();

    const { searchParams } = new URL(req.url);
    const price = searchParams.get("price");
    const catagory = searchParams.get("catagory");

    // console.log(price, "price data")
    

    
      // default value for price is "all"

    try {
        
       // fetch database all data last to first

       if (price === "all" && catagory === "all") {

        const products = await Product.find().sort({ createdAt: -1 });  // sort by createdAt in descending order       

        return Response.json({message: "all products successfully", products: products},{status: 200}); 


       }else if (price=="100-200") {

        const products = await Product.find({price: {$gte: 100, $lte: 200}}).sort({createdAt: -1});  // sort by createdAt in descending order       

        return Response.json({message: "all products successfully", products: products},{status: 200}); 

       }else if (price === "300-400") {

        const products = await Product.find({price: {$gte: 300, $lte: 400}}).sort({createdAt: -1});  // sort by createdAt in descending order       

        return Response.json({message: "all products successfully", products: products},{status: 200}); 

       }else if (price === "500-600") {

        const products = await Product.find({price: {$gte: 500, $lte: 600}}).sort({createdAt: -1});  // sort by createdAt in descending order       

        return Response.json({message: "all products successfully", products: products},{status: 200}); 

       }else{
              return Response.json({message: "Invalid data range"}, {status: 400});
       }

      


    } catch (error) {
        
        
        return Response.json({message: "all products failed", data: error},{status: 500});

    }

}