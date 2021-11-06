import React from 'react'
import StripeCheckout from 'react-stripe-checkout';



//stripe wants the price in cents
const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Jsve2GSoG3dHnbdouHjntjqy6oIU3Oo9Dg4K3ORL2cAViAtfrUur4Jcmp3Wmuw90bFyEHrvxZQ8IydEXxhS0Tup00QbHF1BSJ';

   const  onToken = token => {
        console.log(token);
        alert('Payment successful')
    }

    return  (
        <StripeCheckout
            label='Pay Now'
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}/>
    )

}

export default StripeCheckoutButton