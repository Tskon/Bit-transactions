import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

import {delTransaction} from "~/actions/transaction-actions";

class Transaction extends React.Component {
  constructor() {
    super(...arguments);
    this.delTransactionHandler = this.delTransactionHandler.bind(this);
  }

  delTransactionHandler(e) {
    e.preventDefault();
    this.props.dispatch(delTransaction(this.props.id))
  }

  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.amount}</td>
        <td>{this.props.bankName}</td>
        <td><a href="#" onClick={this.delTransactionHandler}>
          Del
        </a>
        </td>
      </tr>
    )
  }
}

export default withRouter(connect()(Transaction));