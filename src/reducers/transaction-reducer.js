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
    case 'DEL_TRANSACTION': {
      const transactions = [...state.transactions];
      transactions.forEach((item, i, arr) => {
        if (item.id === action.payload) arr.splice(i, 1);
      });
      state = {...state, transactions: transactions};
      break;
    }
    // case 'ADD_TRANSACTION': {
    //   const transactions = [...state.transactions];
    //   transactions.push({
    //     ...action.payload,
    //     id: (transactions.length > 0) ? transactions[transactions.length - 1].id + 1 : 1
    //   });
    //   state = {...state, transactions};
    //   break;
    // }
  }

  return state;
}