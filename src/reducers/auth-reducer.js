export function authReducer(state = {user: {}, isFetching: false}, action) {
  switch (action.type) {
    case 'ISAUTH_PENDING': {
      state = {...state, isFetching: true};
      break;
    }
    case 'ISAUTH_FULFILLED': {
      state = {...state, isFetching: false, banks: action.payload.data};
      break;
    }
    case 'ISAUTH_REJECTED': {
      state = {...state, isFetching: false, errorMessage: action.payload.message};
      break;
    }
  }

  return state;
}