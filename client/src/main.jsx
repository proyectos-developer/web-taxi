import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'
import {Provider} from 'react-redux'
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'

import begindata from '../src/redux/slice/begindata'

const store = configureStore({
    reducer: ({
      begin: begindata
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    })
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
