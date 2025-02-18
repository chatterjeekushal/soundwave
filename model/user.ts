
import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
    user_id: string;
    username: string;
    email: string;
    password: string;
    userImage: string;
    phone_no: string;
    user_status: string;

}

const userSchema = new Schema<User>({

    user_id: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    userImage: {
        type: String,

    },
    phone_no: {
        type: String,

    },
    user_status: {
        type: String,
        enum: ['normal', 'pro'],
    }
}, { timestamps: true });

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", userSchema);

export default UserModel;

