import axios from "axios";
import React from "react";
import withRouter from "../contexts/routing";
import { saveData, UserContext } from "../contexts/UserContext";
import { getDeliveryTime, getEndpoint } from "../utils/utils";

class RightSection extends React.Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);

    this.deliveryFees = 5;
    this.unitPrice = 0.95;
    this.state = {
      quantity: 1,
    };
  }

  getSubtotal() {
    return this.state.quantity * this.unitPrice;
  }

  getTotal() {
    return this.deliveryFees + this.getSubtotal();
  }

  formatCurrency(value) {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return formatter.format(value);
  }

  saveQuantity(name, value) {
    const { dispatch } = this.context;

    this.setState({
      ...this.state,
      quantity: value
    });

    saveData(dispatch, name, value)
  }

  placeOrder() {
    const { state } = this.context;

    axios
      .post(getEndpoint('/orders/create'), state.data)
      .then(res => {
        this.props.navigate("/order/confirmation", {
          state: {
            orderId: res.data.orderId,
            deliveryTime: getDeliveryTime(new Date(res.data.deliveryDate))
          }});
      })
      .catch(error => this.props.navigate('/error'));
  }

  render() {
    const { dispatch } = this.context;

    return (
      <section id="right-section">
        {/* Order block start */}
        <div class="right-block" id="order-block">
          <label>Your order from</label>
          <h1>Antonio's Tacos</h1>
          <button
            type="button"
            onClick={() => this.placeOrder()}>Place Order</button>
        </div>
        {/* Order block end */}

        {/* Quantity block start */}
        <div class="right-block" id="quantity-block">
          <div>
            <input
              type="number"
              name="quantity"
              min="1"
              value={this.state.quantity}
              onChange={(e) => this.saveQuantity(e.target.name, e.target.value)}
            />
            <label>Tacos</label>
          </div>
          <label id="tacos-price">
            {this.formatCurrency(this.getSubtotal())}
          </label>
        </div>
        {/* Quantity block end */}

        {/* Quote block start */}
        <div class="right-block" id="quote-block">
          <textarea
            name="orderNote"
            cols="30"
            rows="1"
            placeholder="Add note"
            onChange={(e) => saveData(dispatch, e.target.name, e.target.value)}
          ></textarea>
          <div class="quote-row">
            <label>Subtotal</label>
            <label>{this.formatCurrency(this.getSubtotal())}</label>
          </div>
          <div class="quote-row">
            <label>Delivery fee</label>
            <label>{this.formatCurrency(this.deliveryFees)}</label>
          </div>
          <div class="quote-row">
            <label>Total</label>
            <label>{this.formatCurrency(this.getTotal())}</label>
          </div>
        </div>
        {/* Quote block end */}
      </section>
    );
  }
}

export default withRouter(RightSection);
