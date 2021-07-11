import { createLogger } from 'redux-logger';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/auth';
import { application } from './reducers/application';
import { appeals } from './reducers/appeals';
import { appraisals } from './reducers/appraisals';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(
  combineReducers({ application, authReducer, appeals, appraisals }),
  applyMiddleware(thunk, logger),
);
