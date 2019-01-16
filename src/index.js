import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import createSagaMiddleware from "redux-saga";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import App from './App';
import * as reducers from "./store/reducers";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers(reducers),
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ ?
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() :
      compose,
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App dispatch={store.dispatch} />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
