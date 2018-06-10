import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';

//assign a reducer to the store. 
//The first argument is an array, 
//Second argument is the initial state
//Third is the applyMiddleware 
const store = createStore(() => [], {}, applyMiddleware());

//takes two arguments. Root component & where we are rendering component inside of DOM
ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.querySelector('#root')
);
