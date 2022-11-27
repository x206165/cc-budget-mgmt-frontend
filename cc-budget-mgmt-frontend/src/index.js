import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TestAxios from './testAislado/TestAxios';
import LoginFormik from './views/LoginFormik';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <TestAxios /> 
    {/* aqui puse mi header * /}  
    {/* de aqui en adelante puedo llamar los siguientes componentes */ }
    <LoginFormik />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
