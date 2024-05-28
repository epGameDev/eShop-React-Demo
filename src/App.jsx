import { useEffect } from "react";
import {Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fetchProductsStart } from "./store/product/product-actions.js";
import { setCurrentUser } from "./store/user/user-reducer.js";

import NavBar from "./routes/navigation/navbar-component";
import Home from "./routes/home/home-component";
import Shop from "./routes/shop/shop-component";
import Contact from "./routes/contact-us/contact-component";
import Account from "./routes/account/account-component";
import Checkout from "./routes/checkout/checkout-component";
import { createUserDocumentFromAuth, onAuthStateChangedListener} from "./utils/firebase/firebase-utils.js";

const App = () => {
  const dispatch = useDispatch();

  // Loads User State
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener( (user) => {
      if(user) {
        createUserDocumentFromAuth(user);
      }
      const userData = user && (({accessToken, email }) => ({ accessToken, email}))(user)
      dispatch(setCurrentUser(userData)); 
    });

    return unsubscribe;
    //!  prevents memory leaks if app is refreshed or unmounts.
  }, []);


  // Loads Products From Firebase
  useEffect(() => dispatch( fetchProductsStart() ) , []);


// ? The '*' in shop is a placeholder for any;
  return (
    <Routes>
      <Route path="/" element={<NavBar/>}>
        <Route index element={<Home/>}/>
        <Route path="/shop/*" element={<Shop/>}/> 
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Route>

    </Routes>
  );
};

export default App;
