import React from "react";
import { saveData, UserContext } from "../contexts/UserContext";
import creditCard from "../assets/credit-card.svg"

class PaymentBlock extends React.Component {
  static contextType = UserContext;

  render() {
    const { dispatch } = this.context;
    
    return (
      <div class="left-block" id="payment-block">
        <h1 class="block-title">3. Payment</h1>
        <hr />
        <div class="input-div">
          <img src={creditCard} alt="credit-card" />
          <input
            type="text"
            name="cardId"
            onChange={(e) => saveData(dispatch, e.target.name, e.target.value)}
          />
        </div>
        <button class="text-button" type="button">
          Add promo code
        </button>
      </div>
    );
  }
}

export default PaymentBlock;
