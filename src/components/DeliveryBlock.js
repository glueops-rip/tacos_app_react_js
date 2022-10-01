import React from "react";
import { UserContext, saveData } from "../contexts/UserContext";
import clock from "../assets/clock.svg"
import close from "../assets/close.svg"
import { formatMinutesTime, getDeliveryTime } from "../utils/utils";

class DeliveryBlock extends React.Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);

    this.state = {
      scheduleButtonHidden: false,
			deliveryTime: 5
    };
  }

  toggleScheduleArea() {
    const nextState = {
      ...this.state,
      scheduleButtonHidden: !this.state.scheduleButtonHidden,
    };
    this.setState(nextState);
  }

	updateDeliveryTime(deliveryDate) {
		const newState = {
			...this.state,
			deliveryTime: getDeliveryTime(deliveryDate)
		};
		this.setState(newState);

    const { dispatch } = this.context;
    saveData(dispatch, 'deliveryDate', deliveryDate);
	}

  render() {
    return (
      <div class="left-block" id="delivery-block">
        <h1 class="block-title">1. Delivery Time</h1>
        <hr />
        <div id="delivery-time-div">
          <img src={clock} alt="clock" />
          <label>Within next</label>
          <label>{ formatMinutesTime(this.state.deliveryTime) }</label>
        </div>
        <button
          hidden={this.state.scheduleButtonHidden}
          class="text-button"
          onClick={() => this.toggleScheduleArea()}
        >
          Schedule
        </button>
        <div id="delivery-time-input" style={{ display: this.state.scheduleButtonHidden ? 'grid' : 'none' }} class="input-div">
          <button id="close-delivery-time" onClick={() => this.toggleScheduleArea()}>
            <img src={close} alt="close" />
          </button>
          <input
						type="time"
						min={new Date()}
						step="300"
						onBlur={() => this.toggleScheduleArea()}
						onChange={(e) => this.updateDeliveryTime(e.target.valueAsDate)}
						/>
        </div>
      </div>
    );
  }
}

export default DeliveryBlock;
