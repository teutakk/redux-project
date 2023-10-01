import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/rockets/store';
import {PersistGate} from "redux-persist/integration/react"
import {persistStore} from "redux-persist"

const root = ReactDOM.createRoot(document.getElementById("root"));
let persistor = persistStore(store) 

root.render(
  <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
  </React.StrictMode>
);
