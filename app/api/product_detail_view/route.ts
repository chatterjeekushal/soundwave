
import dbConnect from "@/lib/dbConnect";
import Product from "@/model/product";


export async function GET(req: Request) {
    await dbConnect();
    
 // get data url 

    const { searchParams } = new URL(req.url);
    const producttitle = searchParams.get("producttitle_data");

    // console.log(producttitle, "producttitle")

    try {
        
        // fached product by product title

        const product = await Product.findOne({title: producttitle});

        return Response.json({message: "product successfully", product: product},{status: 200});

    } catch (error) {
        
        return Response.json({message: "product failed", data: error},{status: 500});
    }

}