export function transactionReducer(state = {transactions: [], isFetching: false}, action) {
  switch (action.type) {
    case 'FETCH_TRANSACTIONS_PENDING': {
      state = {...state, isFetching: true};
      break;
    }
    case 'FETCH_TRANSACTIONS_FULFILLED': {
      state = {...state, isFetching: false, transactions: action.payload.data};
      break;
    }
    case 'FETCH_TRANSACTIONS_REJECTED': {
      state = {...state, isFetching: false, errorMessage: action.payload.message};
      break;
    }

    case 'DEL_TRANSACTION_PENDING': {
      state = {...state, isFetching: true};
      break;
    }
    case 'DEL_TRANSACTION_FULFILLED': {
      state = {...state, isFetching: false, transactions: action.payload.data};
      break;
    }
    case 'DEL_TRANSACTION_REJECTED': {
      state = {...state, isFetching: false, errorMessage: action.payload.message};
      break;
    }

    case 'ADD_TRANSACTION_PENDING': {
      state = {...state, isFetching: true};
      break;
    }
    case 'ADD_TRANSACTION_FULFILLED': {
      console.log(action.payload.data);
      state = {...state, isFetching: false, transactions: action.payload.data};
      break;
    }
    case 'ADD_TRANSACTION_REJECTED': {
      state = {...state, isFetching: false, errorMessage: action.payload.message};
      break;
    }
  }

  return state;
}