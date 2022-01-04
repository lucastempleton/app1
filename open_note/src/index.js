import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import App from './App';
import './index.css';
import NoAuthApp from './NoAuthApp';
import reportWebVitals from './reportWebVitals';
import getAuthState from 'App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
