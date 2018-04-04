export function authReducer(state = {user: {}, isFetching: false}, action) {
  switch (action.type) {
    case 'GET_USER_PENDING': {
      state = {...state, isFetching: true};
      break;
    }
    case 'GET_USER_FULFILLED': {
      state = {...state, isFetching: false, user: {...action.payload.data, isAuth: true}};
      break;
    }
    case 'GET_USER_REJECTED': {
      state = {...state, isFetching: false, errorMessage: action.payload.message};
      break;
    }
    case 'LOG_OUT': {
      state = {...state, user: {isAuth: false}};
      break;
    }
    // case 'SET_USER': {
    //   break;
    // }
  }

  return state;
}