import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './styles.css'

import PanelHome from './components/home/panel.jsx'
import PanelHomeTablet from './components/home/paneltablet.jsx'
import PanelHomeCell from './components/home/panelcell.jsx'

import DashboardHome from './components/home/dashboard/dashboard.jsx'
import DashboardHomeTablet from './components/home/dashboard/dashboardtablet.jsx'
import DashboardHomeCell from './components/home/dashboard/dashboardcell.jsx'

import PanelConductor from './components/conductor/panel.jsx'
import PanelConductorTablet from './components/conductor/paneltablet.jsx'
import PanelConductorCell from './components/conductor/panelcell.jsx'

import PanelPasajero from './components/pasajero/panel.jsx'
import PanelPasajeroTablet from './components/pasajero/paneltablet.jsx'
import PanelPasajeroCell from './components/pasajero/panelcell.jsx'

import RegistroPanel from './components/registro/panel.jsx'
import RegistroPanelTablet from './components/registro/paneltablet.jsx'
import RegistroPanelCell from './components/registro/panelcell.jsx'

import SesionPanel from './components/sesion/panel.jsx'
import SesionPanelTablet from './components/sesion/paneltablet.jsx'
import SesionPanelCell from './components/sesion/panelcell.jsx'

import RecuperarContraseña from './components/recuperar/panel.jsx'
import RecuperarContraseñaTablet from './components/recuperar/paneltablet.jsx'
import RecuperarContraseñaCell from './components/recuperar/panelcell.jsx'

import NuevaContraseña from './components/nueva/panel.jsx'
import NuevaContraseñaTablet from './components/nueva/paneltablet.jsx'
import NuevaContraseñaCell from './components/nueva/panelcell.jsx'

import PoliticaPrivacidad from './components/politica/main.jsx'
import PoliticaPrivacidadTablet from './components/politica/maintablet.jsx'
import PoliticaPrivacidadCell from './components/politica/maincell.jsx'

function App() {
  const [width, setWidth] = useState (window.outerWidth)

  useEffect(() => {
    window.addEventListener('resize', handle_resize)

    return () => {
      window.removeEventListener('resize', handle_resize)
    }
  }, [])

  const handle_resize = () => {
    setWidth(window.outerWidth)
  }

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={width < 500 ? <PanelHomeCell   proporcional={499 / width}/> : 
                                     width < 991 ? <PanelHomeTablet proporcional={991 / width}/> : 
                                                   <PanelHome       proporcional={1920 / width} />}>

                <Route index element={width < 500 ? <DashboardHomeCell   proporcional={499 / width}/> : 
                                      width < 991 ? <DashboardHomeTablet proporcional={991 / width}/> : 
                                                    <DashboardHome       proporcional={1920 / width} />}/>

                <Route path='pasajero' element={width < 500 ? <PanelPasajeroCell   proporcional={499 / width}/> : 
                                                width < 991 ? <PanelPasajeroTablet proporcional={991 / width}/> : 
                                                              <PanelPasajero       proporcional={1920 / width} />}/>

                <Route path='conductor' element={width < 500 ? <PanelConductorCell   proporcional={499 / width}/> : 
                                                 width < 991 ? <PanelConductorTablet proporcional={991 / width}/> : 
                                                               <PanelConductor       proporcional={1920 / width} />}/>

                <Route path='registro' element={width < 500 ? <RegistroPanelCell   proporcional={499 / width}/> : 
                                                width < 991 ? <RegistroPanelTablet proporcional={991 / width}/> : 
                                                              <RegistroPanel       proporcional={1920 / width} />}/>

                <Route path='sesion' element={width < 500 ? <SesionPanelCell   proporcional={499 / width}/> : 
                                              width < 991 ? <SesionPanelTablet proporcional={991 / width}/> : 
                                                            <SesionPanel       proporcional={1920 / width} />}/>

                <Route path='recuperar-contraseña' element={width < 500 ? <RecuperarContraseñaCell   proporcional={499 / width}/> : 
                                                            width < 991 ? <RecuperarContraseñaTablet proporcional={991 / width}/> : 
                                                                          <RecuperarContraseña       proporcional={1920 / width} />}/>
                                                                          
                <Route path='nueva-contraseña' element={width < 500 ? <NuevaContraseñaCell   proporcional={499 / width}/> : 
                                                        width < 991 ? <NuevaContraseñaTablet proporcional={991 / width}/> : 
                                                                      <NuevaContraseña       proporcional={1920 / width} />}/>
                                                               
                <Route path='politica-privacidad' element={width < 500 ? <PoliticaPrivacidadCell   proporcional={499 / width}/> : 
                                                           width < 991 ? <PoliticaPrivacidadTablet proporcional={991 / width}/> : 
                                                                         <PoliticaPrivacidad       proporcional={1920 / width} />}/>

            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
