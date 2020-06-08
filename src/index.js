import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer  from './redux/rootReducer';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider >,
  document.getElementById('root')
);
