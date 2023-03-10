import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import App from './App'
import './index.css'

import {store, Persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
            <PersistGate loading={null} persistor={Persistor}>
                <App />
            </PersistGate>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
)
