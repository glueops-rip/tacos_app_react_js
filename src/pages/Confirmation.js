import React from "react";
import withRouter from "../contexts/routing";
import "./Confirmation.css";
import arrowLeft from "../assets/arrow-left.svg"
import { formatMinutesTime } from "../utils/utils";

class Confirmation extends React.Component {
	render() {
		const { orderId, deliveryTime } = this.props.location.state;

		return (
			<>
				<p>
					Congratulations, your Order { orderId } has been successfully placed! Expect your tacos in { formatMinutesTime(deliveryTime) } or they are on us!
				</p>
				<div>
					<img src={arrowLeft} alt="arrow-left"/>
					<button 
						onClick={() => this.props.navigate('/order/create')}
					>Back</button>
				</div>
			</>
		)
	}
}

export default withRouter(Confirmation);
