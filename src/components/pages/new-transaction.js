import React from 'react';
import {connect} from 'react-redux';
import {fetchBanks} from "~/actions/bank-actions";
// import {addTransaction} from "~/actions/transaction-actions";
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class NewTransaction extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {
      amount: 100,
      bankId: 1
    };

    this.props.dispatch(fetchBanks());
    this.addTransactionHandler = this.addTransactionHandler.bind(this);
    this.bankHandleChange = this.bankHandleChange.bind(this);
    this.amountHandleChange = this.amountHandleChange.bind(this);
  }

  amountHandleChange(e) {
    this.setState({amount: e.target.value});
  }

  bankHandleChange(e) {
    this.setState({bankId: e.target.value});
  }

  addTransactionHandler(e) {
    e.preventDefault();
    if (this.state.amount !== '' && !isNaN(parseFloat(this.state.amount)) && isFinite(this.state.amount)) {
      // this.props.dispatch(addTransaction(
      //   {
      //     amount: this.state.amount,
      //     bankId: this.state.bankId
      //   }
      // ));
      axios.get('http://localhost:8090/add/transaction', {
        params: {
          amount: this.state.amount,
          bankId: this.state.bankId
        }
      });
      alert('Success!')
    } else {
      alert('Input number!')
    }
  }

  render() {
    let submit;
    let banks = [];
    if (this.props.banks.banks.length > 0) {
      submit = <input type="submit" value="Add"/>;
      banks = this.props.banks.banks.map((bank, i) => {
        return(
          <option key={i} value={bank.id}>
            {bank.name}
          </option>
          )
      });
    }

    return (
      <div className="new-transaction">
        <form onSubmit={this.addTransactionHandler}>
          <input type="text" placeholder="amount"  onChange={this.amountHandleChange} value={this.state.amount}/>
          <select name="bank" onChange={this.bankHandleChange}>
            {banks}
          </select>
          {submit}
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    banks: state.banks
  }
}

export default withRouter(connect(mapStateToProps)(NewTransaction));