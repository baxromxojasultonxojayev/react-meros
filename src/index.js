import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
// import reportWebVitals from './reportWebVitals';
import App from './app'
import createI18n from "./i18n";
import Router from './Router'

createI18n()

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Router /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
