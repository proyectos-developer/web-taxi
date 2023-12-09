import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import icono_logout_black from '../assets/iconos/icono_logout_black.png'
import icono_logout_white from '../assets/iconos/icono_logout_white.png'
import icono_menu from '../assets/iconos/icono_menu_white.png'

import {begindata} from '../redux/slice/begindata'
import { beginConstants } from '../uri/begin-constants'
import { set_user_authenticated } from '../redux/actions/dataactions'

export default function BarraMenuCell({proporcional}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()

    const [open_menu, setOpenMenu] = useState (false)

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

    const cerrar_sesion = () => {
      dispatch(begindata(beginConstants({}, false, 0).log_out))
      setOpenMenu(false)
    }

    return (
      <div className='position-relative' style={{width: '100%', height: 75 / proporcional, background: 'black', paddingLeft: 50 / proporcional, 
                   paddingRight: 50 / proporcional, paddingTop: 12.5 / proporcional, paddingBottom: 12.5 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 50 / proporcional}}>
                <p style={{fontSize: 30 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white', marginBottom: 0,
                    fontWeight: 700}} onClick={() => {navigate ('/'); setOpenMenu(false)}}>
                    TAXI 24/7
                </p>  
                <div style={{width: 50 / proporcional, height: 50 / proporcional, padding: 10 / proporcional}} 
                        onClick={() => setOpenMenu (!open_menu)}>
                    <img src={icono_menu} style={{width: 30 / proporcional, height: 30 / proporcional}}/>
                </div>
            </div>
            {
                open_menu ? (
                    <div className='position-absolute end-0 vh-100 shadow-lg' style={{top: 75 / proporcional, width: '75%', background: 'rgba(39, 39, 39, 1)', zIndex: 99999}}>
                        {
                            user_authenticated && user_authenticated === true ? (
                                <div style={{width: '100%'}}>
                                    <p style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white', marginBottom: 0, 
                                        paddingLeft: 50 / proporcional, paddingRight: 50 / proporcional, paddingTop: 2 / proporcional, paddingBottom: 2 / proporcional,
                                        fontWeight: 500, cursor: 'pointer'}} onClick={() => {navigate('pasajero'); setOpenMenu(false)}}>
                                        Pasajero
                                    </p>  
                                    <p className='rounded-pill' style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white',
                                        marginBottom: 0,  fontWeight: 500, cursor: 'pointer', 
                                        paddingLeft: 50 / proporcional, paddingRight: 50 / proporcional, paddingTop: 2 / proporcional, paddingBottom: 2 / proporcional}} 
                                        onClick={() => {navigate('conductor'); setOpenMenu(false)}}>
                                        Conductor
                                    </p>  
                                    {
                                        window.localStorage.getItem ('tipo_usuario') === 'conductor' ? (
                                            <div className='' 
                                                style={{paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional}}>
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white', marginBottom: 0, 
                                                    paddingLeft: 50 / proporcional, paddingRight: 50 / proporcional, paddingTop: 2 / proporcional, paddingBottom: 2 / proporcional,
                                                    fontWeight: 500, cursor: 'pointer'}} 
                                                    onClick={() => {setOpenMenu(false); navigate (`/conductor/${window.localStorage.getItem('usuario')}`) }}>
                                                    Panel
                                                </p> 
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white', marginBottom: 0, 
                                                    paddingLeft: 50 / proporcional, paddingRight: 50 / proporcional, paddingTop: 2 / proporcional, paddingBottom: 2 / proporcional,
                                                    fontWeight: 500, cursor: 'pointer'}}
                                                    onClick={() => {setOpenMenu(false); navigate (`/conductor/perfil/${window.localStorage.getItem('usuario')}`) }}>
                                                    Mi perfil
                                                </p> 
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white', marginBottom: 0, 
                                                    paddingLeft: 50 / proporcional, paddingRight: 50 / proporcional, paddingTop: 2 / proporcional, paddingBottom: 2 / proporcional,
                                                    fontWeight: 500, cursor: 'pointer'}}
                                                    onClick={() => {setOpenMenu(false); navigate (`/conductor/viajes/${window.localStorage.getItem('usuario')}`) }}>
                                                    Mis viajes
                                                </p> 
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white', marginBottom: 0, 
                                                    paddingLeft: 50 / proporcional, paddingRight: 50 / proporcional, paddingTop: 2 / proporcional, paddingBottom: 2 / proporcional,
                                                    fontWeight: 500, cursor: 'pointer'}}
                                                    onClick={() => {setOpenMenu(false); navigate (`/conductor/ingresos/${window.localStorage.getItem('usuario')}`) }}>
                                                    Mis ingresos
                                                </p> 
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white', marginBottom: 0, 
                                                    paddingLeft: 50 / proporcional, paddingRight: 50 / proporcional, paddingTop: 2 / proporcional, paddingBottom: 2 / proporcional,
                                                    fontWeight: 500, cursor: 'pointer'}}
                                                    onClick={() => {setOpenMenu(false); navigate (`/conductor/calificaciones/${window.localStorage.getItem('usuario')}`) }}>
                                                    Mis calificaciones
                                                </p> 
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white', marginBottom: 0, 
                                                    paddingLeft: 50 / proporcional, paddingRight: 50 / proporcional, paddingTop: 2 / proporcional, paddingBottom: 2 / proporcional,
                                                    fontWeight: 500, cursor: 'pointer'}}
                                                    onClick={() => {cerrar_sesion()}}>
                                                    Cerrar seión
                                                </p> 
                                            </div>
                                        ) : window.localStorage.getItem('tipo_usuario') === 'viajero' ? (
                                            <div className='' 
                                                style={{paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional}}>
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white', marginBottom: 0, 
                                                    paddingLeft: 50 / proporcional, paddingRight: 50 / proporcional, paddingTop: 2 / proporcional, paddingBottom: 2 / proporcional,
                                                    fontWeight: 500, cursor: 'pointer'}}
                                                    onClick={() => {setOpenMenu(false); navigate (`/pasajero/${window.localStorage.getItem('usuario')}`) }}>
                                                    Panel
                                                </p> 
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white', marginBottom: 0, 
                                                    paddingLeft: 50 / proporcional, paddingRight: 50 / proporcional, paddingTop: 2 / proporcional, paddingBottom: 2 / proporcional,
                                                    fontWeight: 500, cursor: 'pointer'}}
                                                    onClick={() => {setOpenMenu(false); navigate (`/pasajero/perfil/${window.localStorage.getItem('usuario')}`) }}>
                                                    Mi perfil
                                                </p> 
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white', marginBottom: 0, 
                                                    paddingLeft: 50 / proporcional, paddingRight: 50 / proporcional, paddingTop: 2 / proporcional, paddingBottom: 2 / proporcional,
                                                    fontWeight: 500, cursor: 'pointer'}}
                                                    onClick={() => {setOpenMenu(false); navigate (`/pasajero/viajes/${window.localStorage.getItem('usuario')}`) }}>
                                                    Mis viajes
                                                </p> 
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white', marginBottom: 0, 
                                                    paddingLeft: 50 / proporcional, paddingRight: 50 / proporcional, paddingTop: 2 / proporcional, paddingBottom: 2 / proporcional,
                                                    fontWeight: 500, cursor: 'pointer'}}
                                                    onClick={() => {setOpenMenu(false); navigate (`/pasajero/gastos/${window.localStorage.getItem('usuario')}`) }}>
                                                    Mis gastos
                                                </p> 
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white', marginBottom: 0, 
                                                    paddingLeft: 50 / proporcional, paddingRight: 50 / proporcional, paddingTop: 2 / proporcional, paddingBottom: 2 / proporcional,
                                                    fontWeight: 500, cursor: 'pointer'}}
                                                    onClick={() => {setOpenMenu(false); navigate (`/pasajero/cupones/${window.localStorage.getItem('usuario')}`) }}>
                                                    Mis cupones
                                                </p> 
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white', marginBottom: 0, 
                                                    paddingLeft: 50 / proporcional, paddingRight: 50 / proporcional, paddingTop: 2 / proporcional, paddingBottom: 2 / proporcional,
                                                    fontWeight: 500, cursor: 'pointer'}}
                                                     onClick={() => {cerrar_sesion() }}>
                                                    Cerrar seión
                                                </p> 
                                            </div>
                                        ) : null
                                    }
                                </div>
                            ) : (
                                <div style={{width: '100%'}}>
                                    <p style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white', marginBottom: 0, 
                                        paddingLeft: 50 / proporcional, paddingRight: 50 / proporcional, paddingTop: 2 / proporcional, paddingBottom: 2 / proporcional,
                                        fontWeight: 500, cursor: 'pointer'}}
                                        onClick={() => {navigate('pasajero'); setOpenMenu(false)}}>
                                        Pasajero
                                    </p>   
                                    <p style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white', marginBottom: 0, 
                                        paddingLeft: 50 / proporcional, paddingRight: 50 / proporcional, paddingTop: 2 / proporcional, paddingBottom: 2 / proporcional,
                                        fontWeight: 500, cursor: 'pointer'}}
                                        onClick={() => {navigate('conductor'); setOpenMenu(false)}}>
                                        Conductor
                                    </p>  
                                    <p style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white', marginBottom: 0, 
                                        paddingLeft: 50 / proporcional, paddingRight: 50 / proporcional, paddingTop: 2 / proporcional, paddingBottom: 2 / proporcional,
                                        fontWeight: 500, cursor: 'pointer'}}
                                        onClick={() => {navigate('sesion'); setOpenMenu(false)}}>
                                        Iniciar sesión
                                    </p>                                    
                                </div>
                            )
                        }
                    </div>
                ) : null
            }
      </div>
    )
}
