import {Routes, Route } from "react-router-dom";

import NavBar from "./routes/navigation/navbar-component";
import Home from "./routes/home/home-component";
import Shop from "./routes/shop/shop-component";
import Contact from "./routes/contact-us/contact-component";
import Account from "./routes/account/account-component";

const App = () => {


  return (
    <Routes>
      <Route path="/" element={<NavBar/>}>
        <Route index element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/account" element={<Account/>}/>
      </Route>
    </Routes>
  );
};

export default App;
