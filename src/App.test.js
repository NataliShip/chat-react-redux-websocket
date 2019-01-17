import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {combineReducers, createStore} from 'redux';
import App from './App';
import * as reducers from './store/reducers';

let store = createStore(combineReducers(reducers));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , div);
});
