import express, { Request, Response } from 'express';
import cors from 'cors';
import Stripe from 'stripe';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-06-20',
});

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/create-checkout-session', async (req: Request, res: Response) => {
  try {
    const { amount, currency, quantity, productName } = req.body;

    // Create a Checkout Session with Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: currency || 'usd',
            product_data: {
              name: productName,
            },
            unit_amount: amount,
          },
          quantity: quantity,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    // Send the session ID to the client
    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
