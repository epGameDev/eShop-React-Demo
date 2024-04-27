import { useEffect } from "react";
import {Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { onAuthStateChangedListener, createUserDocumentFromAuth, getCategoriesAndDocuments } from "./utils/firebase/firebase-utils";
import { setCurrentUser } from "./store/user/user-action";
import { setProducts } from "./store/product/product-actions";
import NavBar from "./routes/navigation/navbar-component";
import Home from "./routes/home/home-component";
import Shop from "./routes/shop/shop-component";
import Contact from "./routes/contact-us/contact-component";
import Account from "./routes/account/account-component";
import Checkout from "./routes/checkout/checkout-component";

const App = () => {
  const dispatch = useDispatch();

  // Loads User State
  useEffect( () => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
        if (user) await createUserDocumentFromAuth(user);
        dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  // Loads Products From Firebase
  useEffect( () => {
    const fetchData = async () => {
        const data = await getCategoriesAndDocuments();
        dispatch(setProducts(data));
    }
    fetchData();
}, []);


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
