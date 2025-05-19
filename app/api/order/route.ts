
import Razorpay from "razorpay";
import { NextResponse } from "next/server";

// Initialize Razorpay with proper type checking
const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(request: Request) {
  try {
    // Parse the request body to get payment details
    const requestBody = await request.json();
    const { amount, currency = "INR", receipt, notes } = requestBody;

    // Validate required fields
    if (!amount) {
      return NextResponse.json(
        { error: "Amount is required" },
        { status: 400 }
      );
    }

    

    // Create Razorpay order
    const order = await razorpayInstance.orders.create({
      amount: amount * 100, // Convert to paise
      currency: currency.toUpperCase(), // Ensure uppercase currency code
      receipt: receipt || `order_rcpt_${Date.now()}`, // Generate receipt if not provided
      notes: notes || {}, // Use provided notes or empty object
    });

    // redirect to the payment page if the order is created successfully

    // Return the order details
    return NextResponse.json({
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      status: order.status,
      receipt: order.receipt,
      created_at: order.created_at,
    });

  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    
    // Handle specific error cases
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message || "Failed to create order" },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}