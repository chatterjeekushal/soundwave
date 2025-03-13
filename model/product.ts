
import mongoose, { Document } from "mongoose";


export interface Product extends Document{

    title: string;
    category: string;
    description: string;
    price: number;
    stockQuantity: number;
    condition: string;
    images: string[];
    language: string;
    manufacturer: string;
    lounchYear: number;
    rating: number;
    listed: boolean;
}

const productSchema = new mongoose.Schema<Product>({
    title: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    stockQuantity: {
      type: Number,
      required: true,
      min: 0
    },
    condition: {
      type: String,
      enum: ['New', 'Used'],
      default: 'New'
    },
    images: {
      type: [String], // Array of image URLs
      default: []
    },
    language: {
      type: String,
      default: 'English'
    },
    manufacturer: {
      type: String,
      trim: true
    },
    lounchYear: {
      type: Number
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0
    },
    listed: {
      type: Boolean,
      default: true
    },
  
  },{ timestamps: true });
  
 
  const ProductModel = (mongoose.models.Product as mongoose.Model<Product>) || mongoose.model<Product>('Product', productSchema);
  
  export default ProductModel;
  
  

  
