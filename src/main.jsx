import React from 'react';
import { render } from 'react-dom';
import App from './App';
import "./index.css"
import { CartProvider } from 'react-use-cart';
import { ThemeProvider } from './GlobalComponents/ThemeProvider';

render(
  <React.StrictMode>
    <ThemeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>
, document.getElementById('root'));