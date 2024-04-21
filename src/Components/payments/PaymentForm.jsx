import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import axios from "axios"
import { useState } from "react"
import "./PaymentForm.css"

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": {
                color: "#fce883"
            },
            "::placeholder": {
                color: "#87bbfd"
            }
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    
    } 
    
}

const PaymentForm = () => {

    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (event) => {
        event.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
    

    if (!error) {
        try {
            const { id } = paymentMethod
            const response = await axios.post("http://localhost:1119/payment", {
                amount: 1000,
                id
            })
            if (response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
            }
        } catch (error) {
            console.log("Error", error)
        }
    }else{
        console.log(error.message)
    }

}

    
   return (
    <>
        <h1 className="title display-4 mb-3">Stripe Checkout</h1>
        {!success ? (
            <form onSubmit={handleSubmit}>
                <fieldset className="FormGroup">
                    <div className="FormRow mb-3">
                        <CardElement options={CARD_OPTIONS} />
                    </div>
                </fieldset>
                <button type="submit" className="btn btn-primary " disabled={!stripe}>Pay</button>
            </form>
        ) : (
            <div className="alert alert-success" role="alert">
                <h2 className="alert-heading">You have successfully paid</h2>
            </div>
        )}
    </>
//     <>
//         <h1 className="title">Stripe Checkout</h1>
//         { !success ? (
//             <form onSubmit={handleSubmit}>
//                 <fieldset className="FormGroup">
//                     <div className="FormRow">
//                         <CardElement options={CARD_OPTIONS} />
//                     </div>
//                 </fieldset>
//                 <button>Pay</button>
//             </form>
//         ) : (
//             <div>
//                 <h2>You have successfully paid</h2>
//             </div>
//         )}
//     </>
   )    


}



export default PaymentForm