import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'
import {Provider} from 'react-redux'
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'

import conductordata from '../src/redux/slice/conductordata'
import calificacionesdata from '../src/redux/slice/calificacionesdata'
import carrosdata from '../src/redux/slice/carrosdata'
import viajerodata from '../src/redux/slice/viajerodata'
import begindata from '../src/redux/slice/begindata'
import viajesdata from '../src/redux/slice/viajesdata'
import datareducer from '../src/redux/reducers/datareducer'

const store = configureStore({
    reducer: ({
      calificaciones: calificacionesdata,
      carros: carrosdata,
      begin: begindata,
      viajes: viajesdata,
      viajero: viajerodata,
      conductor: conductordata,
      data: datareducer
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    })
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
