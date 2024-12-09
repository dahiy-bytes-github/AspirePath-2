//import dotenv from 'dotenv';  // Import dotenv to load environment variables
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Configure dotenv to load environment variables from .env file
//require("dotenv").config();


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
