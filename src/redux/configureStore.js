import { createLogger } from 'redux-logger';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/auth';
import { appeals } from './reducers/appeals'
import { application } from './reducers/application'




const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(
  combineReducers({ application, authReducer, appeals }),
  applyMiddleware(thunk, logger),
);
