import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import { spamFilter } from './redux/middleWare'
import { rootReducer } from './redux/rootReducer'

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk,
    spamFilter
  )
))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
