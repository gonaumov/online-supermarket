import React from "react";
import ReactDOM from "react-dom";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import App from "./App";
import initialState from "./initialState";
import supermarket from "./reducers/supermarket";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const store = createStore(supermarket, initialState,  applyMiddleware(thunk));
  ReactDOM.render(<App store={store}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
