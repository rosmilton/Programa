import React from 'react';
import ReactDOM from 'react-dom';
import LayoutProdocto from './Productos/LayoutProducto';
import reportWebVitals from './reportWebVitals';
import 'bulma/css/bulma.min.css';
import "./index.css";


ReactDOM.render(
  <React.StrictMode>
    <LayoutProdocto />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();