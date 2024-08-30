import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

export const StripeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string);
    return (
        <Elements stripe={stripePromise}>
            {children}
        </Elements>
    )
}