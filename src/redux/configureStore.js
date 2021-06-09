import { createLogger } from 'redux-logger';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import application from './ducks/application';
import clients from './ducks/clients';
import users from './ducks/users';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(
  combineReducers({ application, clients, users }),
  applyMiddleware(thunk, logger),
);
