import { createLogger } from 'redux-logger';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { auth } from './reducers/auth';
import { application } from './reducers/application';
import { appeals } from './reducers/appeals';
import { appraisals } from './reducers/appraisals';
import { rating } from './reducers/rating';
import { streets } from './reducers/streets';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(
  combineReducers({ application, auth, appeals, appraisals, rating, streets }),
  applyMiddleware(thunk, logger),
);
