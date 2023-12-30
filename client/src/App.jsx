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

import DashboardConductor from './components/conductor/dashboard.jsx'
import DashboardConductorTablet from './components/conductor/dashboardtablet.jsx'
import DashboardConductorCell from './components/conductor/dashboardcell.jsx'

import PerfilConductor from './components/conductor/perfil.jsx'
import PerfilConductorTablet from './components/conductor/perfiltablet.jsx'
import PerfilConductorCell from './components/conductor/perfilcell.jsx'

import VehiculoConductor from './components/conductor/vehiculo.jsx'
import VehiculoConductorTablet from './components/conductor/vehiculotablet.jsx'
import VehiculoConductorCell from './components/conductor/vehiculocell.jsx'

import DocumentosConductor from './components/conductor/documentos.jsx'
import DocumentosConductorTablet from './components/conductor/documentostablet.jsx'
import DocumentosConductorCell from './components/conductor/documentoscell.jsx'

import ViajesConductor from './components/conductor/viajes.jsx'
import ViajesConductorTablet from './components/conductor/viajestablet.jsx'
import ViajesConductorCell from './components/conductor/viajescell.jsx'

import IngresosConductor from './components/conductor/ingresos.jsx'
import IngresosConductorTablet from './components/conductor/ingresostablet.jsx'
import IngresosConductorCell from './components/conductor/ingresoscell.jsx'

import CalificacionesConductor from './components/conductor/calificaciones.jsx'
import CalificacionesConductorTablet from './components/conductor/calificacionestablet.jsx'
import CalificacionesConductorCell from './components/conductor/calificacionescell.jsx'

import PanelPasajero from './components/pasajero/panel.jsx'
import PanelPasajeroTablet from './components/pasajero/paneltablet.jsx'
import PanelPasajeroCell from './components/pasajero/panelcell.jsx'

import DashboardPasajero from './components/pasajero/dashboard.jsx'
import DashboardPasajeroTablet from './components/pasajero/dashboardtablet.jsx'
import DashboardPasajeroCell from './components/pasajero/dashboardcell.jsx'

import PerfilPasajero from './components/pasajero/perfil.jsx'
import PerfilPasajeroTablet from './components/pasajero/perfiltablet.jsx'
import PerfilPasajeroCell from './components/pasajero/perfilcell.jsx'

import ViajesPasajero from './components/pasajero/viajes.jsx'
import ViajesPasajeroTablet from './components/pasajero/viajestablet.jsx'
import ViajesPasajeroCell from './components/pasajero/viajescell.jsx'

import GastosPasajero from './components/pasajero/gastos.jsx'
import GastosPasajeroTablet from './components/pasajero/gastostablet.jsx'
import GastosPasajeroCell from './components/pasajero/gastoscell.jsx'

import CuponesPasajero from './components/pasajero/cupones.jsx'
import CuponesPasajeroTablet from './components/pasajero/cuponestablet.jsx'
import CuponesPasajeroCell from './components/pasajero/cuponescell.jsx'

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

import EliminacionCuenta from './components/eliminacion/main.jsx'
import EliminacionCuentaTablet from './components/eliminacion/maintablet.jsx'
import EliminacionCuentaCell from './components/eliminacion/maincell.jsx'

import DashboardEliminacion from './components/eliminacion/eliminacion.jsx'
import DashboardEliminacionTablet from './components/eliminacion/eliminaciontablet.jsx'
import DashboardEliminacionCell from './components/eliminacion/eliminacioncell.jsx'

import ConfirmacionEliminacion from './components/eliminacion/confirmacion.jsx'
import ConfirmacionEliminacionTablet from './components/eliminacion/confirmaciontablet.jsx'
import ConfirmacionEliminacionCell from './components/eliminacion/confirmacioncell.jsx'

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

                <Route path='pasajero/:pasajero' element={width < 500 ? <DashboardPasajeroCell   proporcional={499 / width}/> : 
                                                          width < 991 ? <DashboardPasajeroTablet proporcional={991 / width}/> : 
                                                                        <DashboardPasajero       proporcional={1920 / width} />}/>
                                                                        
                <Route path='pasajero/perfil/:pasajero' element={width < 500 ? <PerfilPasajeroCell   proporcional={499 / width}/> : 
                                                                 width < 991 ? <PerfilPasajeroTablet proporcional={991 / width}/> : 
                                                                               <PerfilPasajero       proporcional={1920 / width} />}/>
                                                                        
                <Route path='pasajero/viajes/:pasajero' element={width < 500 ? <ViajesPasajeroCell   proporcional={499 / width}/> : 
                                                                 width < 991 ? <ViajesPasajeroTablet proporcional={991 / width}/> : 
                                                                               <ViajesPasajero       proporcional={1920 / width} />}/>
                                                                               
                <Route path='pasajero/gastos/:pasajero' element={width < 500 ? <GastosPasajeroCell   proporcional={499 / width}/> : 
                                                                 width < 991 ? <GastosPasajeroTablet proporcional={991 / width}/> : 
                                                                               <GastosPasajero       proporcional={1920 / width} />}/>
                                                                               
                <Route path='pasajero/cupones/:pasajero' element={width < 500 ? <CuponesPasajeroCell   proporcional={499 / width}/> : 
                                                                  width < 991 ? <CuponesPasajeroTablet proporcional={991 / width}/> : 
                                                                                <CuponesPasajero       proporcional={1920 / width} />}/>

                <Route path='conductor' element={width < 500 ? <PanelConductorCell   proporcional={499 / width}/> : 
                                                 width < 991 ? <PanelConductorTablet proporcional={991 / width}/> : 
                                                               <PanelConductor       proporcional={1920 / width} />}/>
                                                               
                <Route path='conductor/:conductor' element={width < 500 ? <DashboardConductorCell   proporcional={499 / width}/> : 
                                                            width < 991 ? <DashboardConductorTablet proporcional={991 / width}/> : 
                                                                          <DashboardConductor       proporcional={1920 / width} />}/>
                                                                        
                <Route path='conductor/perfil/:conductor' element={width < 500 ? <PerfilConductorCell   proporcional={499 / width}/> : 
                                                                   width < 991 ? <PerfilConductorTablet proporcional={991 / width}/> : 
                                                                                 <PerfilConductor       proporcional={1920 / width} />}/>
                                                                                 
                <Route path='conductor/vehiculo/:conductor' element={width < 500 ? <VehiculoConductorCell   proporcional={499 / width}/> : 
                                                                     width < 991 ? <VehiculoConductorTablet proporcional={991 / width}/> : 
                                                                                   <VehiculoConductor       proporcional={1920 / width} />}/>
                                                                        
                <Route path='conductor/documentos/:conductor' element={width < 500 ? <DocumentosConductorCell   proporcional={499 / width}/> : 
                                                                       width < 991 ? <DocumentosConductorTablet proporcional={991 / width}/> : 
                                                                                     <DocumentosConductor       proporcional={1920 / width} />}/>
                                                                        
                <Route path='conductor/viajes/:conductor' element={width < 500 ? <ViajesConductorCell   proporcional={499 / width}/> : 
                                                                   width < 991 ? <ViajesConductorTablet proporcional={991 / width}/> : 
                                                                                 <ViajesConductor       proporcional={1920 / width} />}/>
                                                                               
                <Route path='conductor/ingresos/:conductor' element={width < 500 ? <IngresosConductorCell   proporcional={499 / width}/> : 
                                                                     width < 991 ? <IngresosConductorTablet proporcional={991 / width}/> : 
                                                                                   <IngresosConductor       proporcional={1920 / width} />}/>
                                                                                   
                <Route path='conductor/calificaciones/:conductor' element={width < 500 ? <CalificacionesConductorCell   proporcional={499 / width}/> : 
                                                                           width < 991 ? <CalificacionesConductorTablet proporcional={991 / width}/> : 
                                                                                         <CalificacionesConductor       proporcional={1920 / width} />}/>

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

                                                               
                  <Route path='app/eliminacion-cuenta' element={width < 500 ? <EliminacionCuentaCell   proporcional={499 / width}/> : 
                                                                width < 991 ? <EliminacionCuentaTablet proporcional={991 / width}/> : 
                                                                              <EliminacionCuenta       proporcional={1920 / width} />}>
                                                                    
                      <Route index element={width < 500 ? <DashboardEliminacionCell   proporcional={499 / width}/> : 
                                            width < 991 ? <DashboardEliminacionTablet proporcional={991 / width}/> : 
                                                          <DashboardEliminacion       proporcional={1920 / width} />}/>
                                                                    
                      <Route path='confirmacion' element={width < 500 ? <ConfirmacionEliminacionCell   proporcional={499 / width}/> : 
                                                          width < 991 ? <ConfirmacionEliminacionTablet proporcional={991 / width}/> : 
                                                                        <ConfirmacionEliminacion       proporcional={1920 / width} />}/>

                  </Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
