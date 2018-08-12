import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Loopd"
        description="$5 for 5 email surveys"
        amount={500}
        //token expects to receive a callback function that will be called
        //after we have received a token representing the charge.
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      />
    );
  }
}

export default Payments;
