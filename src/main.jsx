import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripe/stripe-utils.js';

import { Provider } from 'react-redux';
import { store } from "./store/store.js";

import { PersistGate } from 'redux-persist/integration/react';
import { persister } from './store/store.js';

import App from './App.jsx';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
