import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "./store/store.js";

import App from './App.jsx';
import { UserProvider } from "./contexts/user.context.jsx";
import { ProductsProvider } from './contexts/product-context.jsx';
import { CartProvider } from './contexts/cart-context.jsx';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode store={store}>
    <Provider>
      <BrowserRouter>
        <UserProvider>
          <ProductsProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </ProductsProvider>
        </UserProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
