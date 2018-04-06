export function authReducer(state = {user: {}, isFetching: false}, action) {
  switch (action.type) {
    case 'GET_USER_PENDING': {
      state = {...state, isFetching: true};
      break;
    }
    case 'GET_USER_FULFILLED': {
      state = {...state, isFetching: false, user: {...action.payload.data}};
      break;
    }
    case 'GET_USER_REJECTED': {
      state = {...state, isFetching: false, errorMessage: action.payload.message};
      break;
    }
    case 'LOG_OUT_PENDING': {
      state = {...state, isFetching: true};
      break;
    }
    case 'LOG_OUT_FULFILLED': {
      state = {...state, isFetching: false, user: {isAuth: false}};
      break;
    }
    case 'LOG_OUT_REJECTED': {
      state = {...state, isFetching: false, errorMessage: action.payload.message};
      break;
    }
    case 'SET_USER_PENDING': {
      state = {...state, isFetching: true};
      break;
    }
    case 'SET_USER_FULFILLED': {
      state = {...state, isFetching: false, user: {...action.payload, isAuth: true}};
      break;
    }
    case 'SET_USER_REJECTED': {
      state = {...state, isFetching: false, errorMessage: action.payload.message};
      break;
    }
  }

  return state;
}