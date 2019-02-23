import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {AnyAction, Store} from "redux";
import Home from "./components/Home";

const App = ({store}: {store: Store<State, AnyAction>}) => (
    <Provider store={store}>
      <Router>
        <Route path="/:categoryId?" component={Home} />
      </Router>
    </Provider>
);

export default App;
