import { createLogger } from 'redux-logger';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import application from './reducers/application';
import users from './reducers/users';
import {authReducer} from './reducers/auth';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(
  combineReducers({ application, users, authReducer }),
  applyMiddleware(thunk, logger),
);
