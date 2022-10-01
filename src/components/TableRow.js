import React from "react";

class TableRow extends React.Component {
    render() {
        return (
            <tr>
							<td>{ this.props.index }</td>
              <td>{ this.props.order.id }</td>
              <td>{ this.props.order.location }</td>
              <td>{ this.props.order.apt }</td>
              <td>{ this.props.order.deliveryOption }</td>
              <td>{ this.props.order.deliveryNote }</td>
              <td>{ this.props.order.orderDate }</td>
              <td>{ this.props.order.deliveryDate }</td>
              <td>{ this.props.order.quantity }</td>
              <td>{ 0.95 * this.props.order.quantity }</td>
              <td>{ this.props.order.orderNote }</td>
              <td>{ this.props.order.cardId }</td>
            </tr>
        )
    }
}

export default TableRow;
