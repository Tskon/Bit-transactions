import axios from 'axios';

export function fetchTransactions() {
  return {
    type: 'FETCH_TRANSACTIONS',
    payload: axios.post('http://localhost:8090/get/transactions')
  }
}

export function delTransaction(id) {
  return {
    type: 'DEL_TRANSACTION',
    payload: axios.get('http://localhost:8090/del/transaction', {
      params: {
        id: id
      }
    })
  }
}

export function addTransaction(obj) {
  return {
    type: 'ADD_TRANSACTION',
    payload: axios.get('http://localhost:8090/add/transaction', {
      params: {
        amount: obj.amount,
        bankId: obj.bankId
      }
    })
  }
}