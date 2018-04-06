import React from 'react';
import {connect} from 'react-redux';
import {fetchBanks} from "~/actions/bank-actions";
import {addTransaction} from "~/actions/transaction-actions";
import {withRouter} from 'react-router-dom';

class NewTransaction extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {
      amount: 100,
      bankId: null
    };

    this.props.dispatch(fetchBanks())
      .then(() => {
      let firstBankId;
      for (let bankId in this.props.banks.banks) {
        if (!firstBankId) {
          firstBankId = bankId;
          break;
        }
        console.log(bankId)
      }
      this.setState({bankId: firstBankId})
    });
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
      this.props.dispatch(addTransaction(
        {
          amount: this.state.amount,
          bankId: this.state.bankId
        }
      ));
      alert('Success!')
    } else {
      alert('Input number!')
    }
  }

  render() {
    let submit;
    let banks = [];
    if (Object.keys(this.props.banks.banks).length > 0) {
      for (let bankId in this.props.banks.banks) {
        banks.push(
          <option key={bankId} value={bankId}>
            {this.props.banks.banks[bankId]}
          </option>
        )
      }

      submit = <input type="submit" value="Add"/>;
    }

    return (
      <div className="new-transaction">
        <form onSubmit={this.addTransactionHandler}>
          <input type="text" placeholder="amount" onChange={this.amountHandleChange} value={this.state.amount}/>
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