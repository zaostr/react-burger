import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
//import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { compose, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import rootReducer from './services/reducers';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose; 

const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = configureStore({
  reducer: rootReducer, 
  enhancer
});

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
