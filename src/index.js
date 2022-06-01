import React from 'react';
import ReactDOM from 'react-dom/client';
import Routing from './router'
import 'bootstrap';
import './css/index.css';
import './css/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);