import axios from 'axios';

export function fetchTransactions() {
  return {
    type: 'FETCH_TRANSACTIONS',
    payload: axios.post('http://localhost:8090/get/transactions')
  }
}

export function delTransaction(id) {
  axios.get('http://localhost:8090/del/transaction', {
    params: {
      id: id
    }
  });
  return {
    type: 'DEL_TRANSACTION',
    payload: id
  }
}

export function addTransaction(obj) {
  axios.get('http://localhost:8090/add/transaction', {
    params: {
      amount: obj.amount,
      bankId: obj.bankId
    }
  });
  return {
    type: 'ADD_TRANSACTION',
    payload: obj
  }
}