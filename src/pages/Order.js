import React from "react";
import DeliveryBlock from "../components/DeliveryBlock";
import LocationBlock from "../components/LocationBlock";
import PaymentBlock from "../components/PaymentBlock";
import RightSection from "../components/RightSection";
import { UserProvider } from "../contexts/UserContext";
import "./Order.css"

class Order extends React.Component {
	render() {
		return (
			<UserProvider>
				<div id="main">
					<section id="left-section">
						<DeliveryBlock data></DeliveryBlock>
						<LocationBlock></LocationBlock>
						<PaymentBlock></PaymentBlock>
					</section>

					<RightSection></RightSection>
				</div>
			</UserProvider>
		)
	}
}

export default Order;
