import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KO5AoJ35KjNsnqLCvFqs6aKBseVxgcSNsXffoU35JgptK1oXm2deOMwr0L2aWDFJSg8HDnRXkHJH3yxjaAOWQHK00Mgn2cNmp";

  const onToken = (token) => {
    console.log(token);
    alert("Paymen Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
