import React from "react";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//Pages
import Header from './components/Header';
import { Router } from "@reach/router";
import { useThemeHook } from "./GlobalComponents/ThemeProvider";
import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';


function App() {
  const [theme] = useThemeHook();
  return (
    <main className={theme? 'bg-black': 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto'}}>
      <Header/>
      <Router>
        <Home path="/" />
        <MyAccount path="my-account" />
        <SignIn path="sign-in"/>
        <Register path="register"/>
        <ProductDetails path="product-details/:productId"/>
        <Cart path="/cart" />
      </Router>
    </main>
  );
}

export default App;
