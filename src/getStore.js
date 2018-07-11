import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as appReducer from 'reducers';
import { initSagas } from './initSagas';
import { defaultState } from './defaultState';

export const getStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(combineReducers(appReducer), defaultState, applyMiddleware(sagaMiddleware));
  initSagas(sagaMiddleware);
  return store;
};

