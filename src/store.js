import {createStore, combineReducers, applyMiddleware} from 'redux';

// middlewares
import promise from 'redux-promise-middleware';
import {createLogger} from "redux-logger";
const logger = createLogger({});

const middlewares = applyMiddleware(logger, promise());

//reducers
import {transactionReducer} from '~/reducers/transaction-reducer';
import {bankReducer} from '~/reducers/bank-reducer';
import {authReducer} from '~/reducers/auth-reducer';

const reducers = combineReducers({
  transactions: transactionReducer,
  banks: bankReducer,
  auth: authReducer
});

const store = createStore(reducers, middlewares);

export default store;