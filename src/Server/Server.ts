import express from "express";
import Stripe from "stripe";
import cors from "cors";
import dotenv from "dotenv";
import { Request, Response } from "express";

dotenv.config();
const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
});

app.use(express.json());
app.use(cors({origin: "http://localhost:5173"}));
app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
  });
  
app.post("/create-payment-intent", async (req: Request, res: Response) => {
    const { price, quantity, productId, productName } = req.body;
    const amount = Math.round(price * quantity * 100);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        productId: productId,
        productName,
        quantity: quantity
      },
    });
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating PaymentIntent", error);
    res.status(500).json({ error: "Failed to create payment" });
  }
});
