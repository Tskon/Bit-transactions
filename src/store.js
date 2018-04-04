import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from "redux-logger";

// middlewares
import promise from 'redux-promise-middleware';
const logger = createLogger({});

const middlewares = applyMiddleware(logger, promise());

//reducers
import {transactionReducer} from '~/reducers/transaction-reducer';
import {bankReducer} from '~/reducers/bank-reducer';

const reducers = combineReducers({
  transactions: transactionReducer,
  banks: bankReducer
});

const store = createStore(reducers, middlewares);

export default store;