import axios from "axios";
import React from "react";
import TableRow from "../components/TableRow";
import withRouter from "../contexts/routing";
import "./Admin.css"

class Admin extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
      orders: []
    };
	}

  componentDidMount() {
    axios
      .get('http://localhost:3001/orders')
      .then(res => {
        this.setState({...this.state, orders: res.data.orders});
      })
      .catch(error => this.props.navigate('/error'));
  }

  render() {
    return (
      <>
        <h1>All Orders</h1>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Order Id</th>
              <th>Location</th>
              <th>Apt</th>
              <th>Delivery Option</th>
              <th>Delivery Note</th>
              <th>Order Date</th>
              <th>Delivery Date</th>
              <th>Quantity</th>
              <th>Total Quote</th>
              <th>Order Note</th>
              <th>Card Id</th>
            </tr>
          </thead>
          <tbody>
            { this.state.orders.map((order, index) => <TableRow index={index} order={order}/>) }
          </tbody>
          <tfoot>
            <tr>
              <th>Rank</th>
              <th>Order Id</th>
              <th>Location</th>
              <th>Apt</th>
              <th>Delivery Option</th>
              <th>Delivery Note</th>
              <th>Order Date</th>
              <th>Delivery Date</th>
              <th>Quantity</th>
              <th>Total Quote</th>
              <th>Order Note</th>
              <th>Card Id</th>
            </tr>
          </tfoot>
        </table>
      </>
    );
  }
}

export default withRouter(Admin);
