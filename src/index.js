import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';
import "bootstrap/dist/css/bootstrap.min.css"
import "jquery/dist/jquery.min.js"
import "popper.js/dist/umd/popper.min.js"
import "bootstrap/dist/js/bootstrap.min.js"
import "@fortawesome/fontawesome-free/css/all.min.css"
import {BrowserRouter} from "react-router-dom"
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/#/">
    <App />
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);


