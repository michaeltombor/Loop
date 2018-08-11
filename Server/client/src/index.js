import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

//assign a reducer to the store.
//The first argument are the reducers
//Second argument is the initial state
//Third is the applyMiddleware
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

//takes two arguments. Root component & where we are rendering component inside of DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

console.log("STRIPE KEY IS", process.env.REACT_APP_STRIPE_KEY);
console.log("Environment is", process.env.NODE_ENV);
