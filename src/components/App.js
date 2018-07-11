import React from 'react';
import { getStore } from 'getStore';
import { QueryBuilder } from './QueryBuilder';
import { Provider } from 'react-redux'

export const App = () => (
  <Provider store={getStore()}>
    <QueryBuilder />
  </Provider>
);
