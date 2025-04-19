
import mongoose, { Document } from "mongoose";

export interface AddToCard extends Document {
    product_id: string;
    product_details: mongoose.Schema.Types.ObjectId; // Assuming product_details is an ObjectId referencing another collection
    user_id: string;
}

const addToCardSchema = new mongoose.Schema<AddToCard>({
    product_id: {
        type: String,
        required: true,
        unique: true,
    },
    product_details: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product", // Assuming you have a Product model to reference
        required: true,
        unique: true,
    },
    user_id: {
        type: String,
        required: true,
    },
},{timestamps: true});




// Ensure that the model is only created once to avoid "OverwriteModelError"
if (mongoose.models.AddToCard) {
    (mongoose.models.AddToCard as mongoose.Model<AddToCard>).deleteMany({}); // Delete all existing documents before creating new ones
}

 const addtoCardmodel= (mongoose.models.AddToCard as mongoose.Model<AddToCard>) || mongoose.model<AddToCard>("AddToCard", addToCardSchema);

export default addtoCardmodel;