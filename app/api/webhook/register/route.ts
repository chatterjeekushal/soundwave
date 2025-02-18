
import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";

import UserModel from "@/model/user";
import dbConnect from "@/lib/dbConnect";



export async function POST(req: Request) {

    const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

    if (!WEBHOOK_SECRET) {
        throw new Error(
            "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
        );
    }

    const headerPayload = await headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");


    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response("Error occurred -- no svix headers", {
            status: 400,
        });
    }

    const payload = await req.json() as object;
    const body = JSON.stringify(payload);


    const wh = new Webhook(WEBHOOK_SECRET);
    let evt: WebhookEvent;

    try {
        evt = wh.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        }) as WebhookEvent;
    } catch (err) {
        console.error("Error verifying webhook:", err);
        return new Response("Error occurred", {
            status: 400,
        });
    }

    const { id } = evt.data;
    const eventType = evt.type;

    console.log(`Webhook with an ID of ${id} and type of ${eventType}`);
    console.log("Webhook body:", body);

    // Handling 'user.created' event

    if (eventType == 'user.created') {

        try {

            await dbConnect();

            const { email_addresses, primary_email_address_id } = evt.data;

            // console.log(evt.data);

            // Safely find the primary email address
            const primaryEmail = email_addresses.find(
                (email) => email.id === primary_email_address_id
            );

            console.log("Primary email:", primaryEmail);
            console.log("Email addresses:", primaryEmail?.email_address);

            if (!primaryEmail) {
                console.error("No primary email found");
                return new Response("No primary email found", { status: 400 });
            }

            // Create the user in the database from mongoose model

            const user = new UserModel({
                user_id: evt.data.id,
                username: evt.data.username,
                email: primaryEmail.email_address,
                password: "password",
                userImage: evt.data.image_url,
                phone_no: evt.data.phone_numbers[0].phone_number,
                user_status: "normal"
            });

           const userdata = await user.save();
          
            // console.log("User created:", userdata);
        } catch (error) {
            console.error("Error creating user in database:", error);
            return new Response("Error creating user", { status: 500 });
        }

    }

    return new Response("Webhook received successfully", { status: 200 });
}