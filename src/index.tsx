import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
//import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
/*import { compose, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import rootReducer from './services/reducers';*/
import { BrowserRouter as Router } from 'react-router-dom';
import { store as storeF } from './services/store';
/*
const composeEnhancers =
// @ts-ignore
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  // @ts-ignore
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose; 

const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = configureStore({
  reducer: rootReducer, 
  // @ts-ignore
  enhancer
});*/

const root = ReactDOM.createRoot(
  // @ts-ignore
  document.getElementById('root')
);
root.render(
    <Provider store={storeF}>
      <Router>
        <App />
      </Router>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();