import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import supermarket from "./reducers/supermarket";
import initialState from "./initialState";
import thunk from 'redux-thunk'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = createStore(supermarket, initialState,  applyMiddleware(thunk))
  ReactDOM.render(<App store={store}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
