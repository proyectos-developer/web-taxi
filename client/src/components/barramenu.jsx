import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import icono_logout_black from '../assets/iconos/icono_logout_black.png'
import icono_logout_white from '../assets/iconos/icono_logout_white.png'
import {begindata} from '../redux/slice/begindata'
import { beginConstants } from '../uri/begin-constants'
import { set_user_authenticated } from '../redux/actions/dataactions'

export default function BarraMenu({proporcional}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()

    const [color, setColor] = useState (false)
    const [menu, setMenu] = useState ('')
    const [sub_menu, setSubMenu] = useState (false)

    const {user_authenticated} = useSelector(({data}) => data)
    const {log_out} = useSelector (({begin}) => begin)

    useEffect(() => {
      if (log_out && log_out.success === true){
        dispatch(begindata(beginConstants({}, true, 0).log_out))
        dispatch(set_user_authenticated(false))
        window.localStorage.removeItem ('session_id')
        navigate ('/')
      }
    }, [log_out])

    useEffect(() => {
      setColor (location.pathname === '/sesion' || location.pathname === '/registro' || location.pathname === '/recuperar-contrase%C3%B1a'
                || location.pathname === '/nueva-contrase%C3%B1a' || location.pathname === '/' ? true : false)
    }, [location.pathname])

    const cerrar_sesion = () => {
      dispatch(begindata(beginConstants({}, false, 0).log_out))
    }

    return (
        <div style={{width: '100%', height: 75 / proporcional, background: color ? 'black' : 'white', paddingLeft: 120 / proporcional, 
                   paddingRight: 120 / proporcional, paddingTop: 12.5 / proporcional, paddingBottom: 12.5 / proporcional}}>
          <div className='d-flex justify-content-between' style={{width: '100%', height: 50 / proporcional,
              cursor: 'pointer'}}>
              <p style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, color: color ? 'white' : 'black', marginBottom: 0,
                fontWeight: 700}} onClick={() => navigate ('/')}>
                TAXI 24/7
              </p>  
              <div className='d-flex justify-content-end'>
                {
                  user_authenticated  && user_authenticated === true ? (  
                    <div className='d-flex justify-content-end'>
                        <p className='rounded-pill' style={{width: 150 / proporcional, textAlign: 'center', fontSize: 20 / proporcional, lineHeight: `${40 / proporcional}px`, color: 'black',
                          marginBottom: 0,  fontWeight: menu === 'pasajero' ? 700 : 500, background: 'white', paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional,
                          marginRight: 20 / proporcional, cursor: 'pointer', marginTop: 5 / proporcional, marginBottom: 5 / proporcional}} onClick={() => navigate('pasajero')}
                          onMouseOver={() => setMenu('pasajero')} onMouseLeave={() => setMenu('')}>
                          Pasajero
                        </p>   
                        <p className='rounded-pill' style={{width: 150 / proporcional, textAlign: 'center', fontSize: 20 / proporcional, lineHeight: `${40 / proporcional}px`, color: 'black',
                          marginBottom: 0,  fontWeight: menu === 'registro' ? 700 : 500, background: 'white', paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional,
                          marginLeft: 20 / proporcional, marginRight: 20 / proporcional, cursor: 'pointer', marginTop: 5 / proporcional, marginBottom: 5 / proporcional}} 
                          onClick={() => navigate('conductor')}
                          onMouseOver={() => setMenu('registro')} onMouseLeave={() => setMenu('')}>
                          Conductor
                        </p> 
                        <div className='rounded-pill position-relative' style={{width: 150 / proporcional, height: 40 / proporcional, background: 'white', paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional,
                          marginLeft: 20 / proporcional, marginRight: 20 / proporcional, cursor: 'pointer', marginTop: 5 / proporcional, marginBottom: 5 / proporcional }}> 
                          <p className='rounded-pill' style={{textAlign: 'center', fontSize: 20 / proporcional, lineHeight: `${40 / proporcional}px`,  color: 'black',
                            marginBottom: 0,  fontWeight: menu === 'panel' ? 700 : 500}} onClick={() => setSubMenu(!sub_menu)}
                            onMouseOver={() => setMenu('panel')} onMouseLeave={() => setMenu('')}>
                            Mi panel
                          </p>  
                          {
                            sub_menu && window.localStorage.getItem ('tipo_usuario') === 'conductor' ? (
                              <div className='position-absolute rounded shadow-lg' 
                                   style={{width: 250 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, background: 'white', 
                                   top: 40 / proporcional, left: -50, zIndex: 99999, paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional}}>
                                   <p className='rounded-pill' style={{textAlign: 'justify', fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`,  color: 'black',
                                     marginBottom: 0,  fontWeight: menu === 'dashboard' ? 600 : 500}} 
                                     onClick={() => {navigate (`/conductor/${window.localStorage.getItem('usuario')}`); setSubMenu(false)}}
                                     onMouseOver={() => setMenu('dashboard')} onMouseLeave={() => setMenu('')}>
                                     Panel
                                   </p> 
                                  <div style={{width: 210 / proporcional, height: 2 / proporcional, background: 'rgba(39, 39, 39, 0.4)', marginBottom: 5 / proporcional}}/> 
                                  <p className='rounded-pill' style={{textAlign: 'justify', fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`,  color: 'black',
                                    marginBottom: 0,  fontWeight: menu === 'perfil' ? 600 : 500}}
                                    onClick={() => {navigate (`/conductor/perfil/${window.localStorage.getItem('usuario')}`); setSubMenu(false)}}
                                    onMouseOver={() => setMenu('perfil')} onMouseLeave={() => setMenu('')}>
                                    Mi perfil
                                  </p> 
                                  <div style={{width: 210 / proporcional, height: 2 / proporcional, background: 'rgba(39, 39, 39, 0.4)', marginBottom: 5 / proporcional}}/>  
                                  <p className='rounded-pill' style={{textAlign: 'justify', fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`,  color: 'black',
                                    marginBottom: 0,  fontWeight: menu === 'viajes' ? 600 : 500}}
                                    onClick={() => {navigate (`/conductor/viajes/${window.localStorage.getItem('usuario')}`); setSubMenu(false)}}
                                    onMouseOver={() => setMenu('viajes')} onMouseLeave={() => setMenu('')}>
                                    Mis viajes
                                  </p> 
                                  <div style={{width: 210 / proporcional, height: 2 / proporcional, background: 'rgba(39, 39, 39, 0.4)', marginBottom: 5 / proporcional}}/>  
                                  <p className='rounded-pill' style={{textAlign: 'justify', fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`,  color: 'black',
                                    marginBottom: 0,  fontWeight: menu === 'ingresos' ? 600 : 500}}
                                    onClick={() => {navigate (`/conductor/ingresos/${window.localStorage.getItem('usuario')}`); setSubMenu(false)}}
                                    onMouseOver={() => setMenu('ingresos')} onMouseLeave={() => setMenu('')}>
                                    Mis ingresos
                                  </p> 
                                  <div style={{width: 210 / proporcional, height: 2 / proporcional, background: 'rgba(39, 39, 39, 0.4)', marginBottom: 5 / proporcional}}/>  
                                  <p className='rounded-pill' style={{textAlign: 'justify', fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`,  color: 'black',
                                    marginBottom: 0,  fontWeight: menu === 'calificaciones' ? 600 : 500}}
                                    onClick={() => {navigate (`/conductor/calificaciones/${window.localStorage.getItem('usuario')}`); setSubMenu(false)}}
                                    onMouseOver={() => setMenu('calificaciones')} onMouseLeave={() => setMenu('')}>
                                    Mis calificaciones
                                  </p> 
                                  <div style={{width: 210 / proporcional, height: 2 / proporcional, background: 'rgba(39, 39, 39, 0.4)', marginBottom: 5 / proporcional}}/> 
                                  <p className='rounded-pill' style={{textAlign: 'justify', fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`,  color: 'black',
                                    marginBottom: 0,  fontWeight: menu === 'logout' ? 600 : 500}} onClick={() => {cerrar_sesion(); setSubMenu(false)}}
                                    onMouseOver={() => setMenu('logout')} onMouseLeave={() => setMenu('')}>
                                    Cerrar seión
                                  </p> 
                                  <div style={{width: 210 / proporcional, height: 2 / proporcional, background: 'rgba(39, 39, 39, 0.4)', marginBottom: 5 / proporcional}}/> 
                              </div>
                            ) : sub_menu && window.localStorage.getItem('tipo_usuario') === 'viajero' ? (
                              <div className='position-absolute rounded shadow-lg' 
                                   style={{width: 250 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, background: 'white', 
                                   top: 40 / proporcional, left: -50, zIndex: 99999, paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional}}>
                                   <p className='rounded-pill' style={{textAlign: 'justify', fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`,  color: 'black',
                                     marginBottom: 0,  fontWeight: menu === 'dashboard' ? 600 : 500}} 
                                     onClick={() => {navigate (`/pasajero/${window.localStorage.getItem('usuario')}`); setSubMenu(false)}}
                                     onMouseOver={() => setMenu('dashboard')} onMouseLeave={() => setMenu('')}>
                                     Panel
                                   </p> 
                                  <div style={{width: 210 / proporcional, height: 2 / proporcional, background: 'rgba(39, 39, 39, 0.4)', marginBottom: 5 / proporcional}}/> 
                                  <p className='rounded-pill' style={{textAlign: 'justify', fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`,  color: 'black',
                                    marginBottom: 0,  fontWeight: menu === 'perfil' ? 600 : 500}}
                                    onClick={() => {navigate (`/pasajero/perfil/${window.localStorage.getItem('usuario')}`); setSubMenu(false)}}
                                    onMouseOver={() => setMenu('perfil')} onMouseLeave={() => setMenu('')}>
                                    Mi perfil
                                  </p> 
                                  <div style={{width: 210 / proporcional, height: 2 / proporcional, background: 'rgba(39, 39, 39, 0.4)', marginBottom: 5 / proporcional}}/>  
                                  <p className='rounded-pill' style={{textAlign: 'justify', fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`,  color: 'black',
                                    marginBottom: 0,  fontWeight: menu === 'viajes' ? 600 : 500}}
                                    onClick={() => {navigate (`/pasajero/viajes/${window.localStorage.getItem('usuario')}`); setSubMenu(false)}}
                                    onMouseOver={() => setMenu('viajes')} onMouseLeave={() => setMenu('')}>
                                    Mis viajes
                                  </p> 
                                  <div style={{width: 210 / proporcional, height: 2 / proporcional, background: 'rgba(39, 39, 39, 0.4)', marginBottom: 5 / proporcional}}/>  
                                  <p className='rounded-pill' style={{textAlign: 'justify', fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`,  color: 'black',
                                    marginBottom: 0,  fontWeight: menu === 'gastos' ? 600 : 500}}
                                    onClick={() => {navigate (`/pasajero/gastos/${window.localStorage.getItem('usuario')}`); setSubMenu(false)}}
                                    onMouseOver={() => setMenu('gastos')} onMouseLeave={() => setMenu('')}>
                                    Mis gastos
                                  </p> 
                                  <div style={{width: 210 / proporcional, height: 2 / proporcional, background: 'rgba(39, 39, 39, 0.4)', marginBottom: 5 / proporcional}}/>  
                                  <p className='rounded-pill' style={{textAlign: 'justify', fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`,  color: 'black',
                                    marginBottom: 0,  fontWeight: menu === 'cupones' ? 600 : 500}}
                                    onClick={() => {navigate (`/pasajero/cupones/${window.localStorage.getItem('usuario')}`); setSubMenu(false)}}
                                    onMouseOver={() => setMenu('cupones')} onMouseLeave={() => setMenu('')}>
                                    Mis cupones
                                  </p> 
                                  <div style={{width: 210 / proporcional, height: 2 / proporcional, background: 'rgba(39, 39, 39, 0.4)', marginBottom: 5 / proporcional}}/> 
                                  <p className='rounded-pill' style={{textAlign: 'justify', fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`,  color: 'black',
                                    marginBottom: 0,  fontWeight: menu === 'logout' ? 600 : 500}} onClick={() => {cerrar_sesion(); setSubMenu(false)}}
                                    onMouseOver={() => setMenu('logout')} onMouseLeave={() => setMenu('')}>
                                    Cerrar seión
                                  </p> 
                                  <div style={{width: 210 / proporcional, height: 2 / proporcional, background: 'rgba(39, 39, 39, 0.4)', marginBottom: 5 / proporcional}}/> 
                              </div>
                            ) : null
                          }
                        </div>
                    </div>
                  ) : (
                    <div className='d-flex justify-content-end'>
                        <p className='rounded-pill' style={{width: 150 / proporcional, textAlign: 'center', fontSize: 20 / proporcional, lineHeight: `${40 / proporcional}px`, color: 'black',
                          marginBottom: 0,  fontWeight: menu === 'pasajero' ? 700 : 500, background: 'white', paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional,
                          marginRight: 20 / proporcional, cursor: 'pointer', marginTop: 5 / proporcional, marginBottom: 5 / proporcional}} onClick={() => navigate('pasajero')}
                          onMouseOver={() => setMenu('pasajero')} onMouseLeave={() => setMenu('')}>
                          Pasajero
                        </p>   
                        <p className='rounded-pill' style={{width: 150 / proporcional, textAlign: 'center', fontSize: 20 / proporcional, lineHeight: `${40 / proporcional}px`, color: 'black',
                          marginBottom: 0,  fontWeight: menu === 'registro' ? 700 : 500, background: 'white', paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional,
                          marginLeft: 20 / proporcional, marginRight: 20 / proporcional, cursor: 'pointer', marginTop: 5 / proporcional, marginBottom: 5 / proporcional}} onClick={() => navigate('conductor')}
                          onMouseOver={() => setMenu('registro')} onMouseLeave={() => setMenu('')}>
                          Conductor
                        </p>  
                        <p className='rounded-pill' style={{width: 150 / proporcional, textAlign: 'center', fontSize: 20 / proporcional, lineHeight: `${40 / proporcional}px`, color: 'black',
                          marginBottom: 0,  fontWeight: menu === 'login' ? 700 : 500, background: 'white', paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional,
                          marginLeft: 20 / proporcional, cursor: 'pointer', marginTop: 5 / proporcional, marginBottom: 5 / proporcional}} onClick={() => navigate('sesion')}
                          onMouseOver={() => setMenu('login')} onMouseLeave={() => setMenu('')}>
                          Iniciar sesión
                        </p>
                    </div>
                  )
                }
              </div>
          </div>
      </div>
    )
}
