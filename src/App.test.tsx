import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import supermarket from "./reducers/supermarket";
import initialState from "./initialState";

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = createStore(supermarket, initialState)
  ReactDOM.render(<App store={store}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
