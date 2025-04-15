
import mongoose, { Document, Schema } from "mongoose";

// Interface for AddToCart document
export interface AddToCartItem extends Document {
  user_id: string;
  product_id: string;
  product_details: mongoose.Types.ObjectId; // reference to actual product
}

// Schema
const addToCartSchema = new Schema<AddToCartItem>(
  {
    user_id: {
      type: String,
      required: true,
    },
    product_id: {
      type: String,
      required: true,
    },
    product_details: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product", // Assuming you have a separate Product model
      required: true,
    },
  },
  { timestamps: true }
);



// Model
const AddToCartModel =
  mongoose.models.AddToCart || mongoose.model<AddToCartItem>("AddToCart", addToCartSchema);

export default AddToCartModel;
