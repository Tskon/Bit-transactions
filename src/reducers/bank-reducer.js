export function bankReducer(state = {banks: [], isFetching: false}, action) {
  switch (action.type) {
    case 'FETCH_BANKS_PENDING': {
      state = {...state, isFetching: true};
      break;
    }
    case 'FETCH_BANKS_FULFILLED': {
      state = {...state, isFetching: false, banks: action.payload.data};
      break;
    }
    case 'FETCH_BANKS_REJECTED': {
      state = {...state, isFetching: false, errorMessage: action.payload.message};
      break;
    }
  }

  return state;
}