import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/compat/app";

firebase.initializeApp({
  apiKey: "AIzaSyC8pfggaIbDBkTTpMxltiSsTapIuH3HAds",
  authDomain: "lum-life.firebaseapp.com",
  projectId: "lum-life",
  storageBucket: "lum-life.appspot.com",
  messagingSenderId: "519945489402",
  appId: "1:519945489402:web:cb35f539440a277c483243",
  measurementId: "G-K654JE47RN"
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
