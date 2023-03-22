import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Modal from './Components/Modal'
import './index.css'
import Login from './Login';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Login/>
  </BrowserRouter>,
);
