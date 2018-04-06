export function bankReducer(state = {banks: [], isFetching: false}, action) {
  switch (action.type) {
    case 'FETCH_BANKS_PENDING': {
      state = {...state, isFetching: true};
      break;
    }
    case 'FETCH_BANKS_FULFILLED': {
      let banks = {};
      action.payload.data.forEach((bank) => {
        if (bank.id && bank.name) banks[bank.id] = bank.name;
      });
      state = {...state, isFetching: false, banks: banks};
      break;
    }
    case 'FETCH_BANKS_REJECTED': {
      state = {...state, isFetching: false, errorMessage: action.payload.message};
      break;
    }
  }

  return state;
}