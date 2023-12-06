import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import icono_view from '../../assets/iconos/icono_view.png'
import icono_hide from '../../assets/iconos/icono_hide.png'
import box_uncheck from '../../assets/iconos/box_uncheck.png'
import box_check from '../../assets/iconos/box_check.png'

import { useNavigate } from 'react-router-dom'

import { beginConstants } from '../../uri/begin-constants'
import {begindata} from '../../redux/slice/begindata'

export default function SesionPanel({proporcional}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [correo, setCorreo] = useState ('')
    const [password, setPassword] = useState ('')
    const [tipo_usuario, setTipoUsuario] = useState ('')
    
    const [ecorreo, setECorreo] = useState (false)
    const [epassword, setEPassword] = useState (false)
    const [etipo_usuario, setETipoUsuario] = useState ('')

    const [hide_password, setHidePassword] = useState (false)

    const [boton_sesion, setBotonSesion] = useState (false)

    const {login_viajero, login_conductor} = useSelector(({begin}) => begin)

    useEffect (() => {
        if (login_viajero && login_viajero.success === true && login_viajero.user){
            window.localStorage.setItem('session_id', login_viajero.user.session_id)
            dispatch (begindata(beginConstants({}, true, 0).login_viajero))
            navigate ('/')
        }
    }, [login_viajero])

    useEffect (() => {
        if (login_conductor && login_conductor.success === true && login_conductor.user){
            window.localStorage.setItem('session_id', login_conductor.user.session_id)
            dispatch (begindata(beginConstants({}, true, 0).login_conductor))
            navigate ('/')
        }
    }, [login_conductor])
    
    const iniciar_sesion = () => {
        if (correo === '' || password === '' || tipo_usuario === ''){
            setECorreo(correo === '' ? true : false)
            setEPassword(password === '' ? true : false)
            setETipoUsuario(tipo_usuario === '' ? '¡Debe seleccionar si es viajero o conductor!' : '')
        }else{
            setECorreo (false)
            setEPassword (false)
            setETipoUsuario (false)
            const data_sesion = {
                correo: correo,
                password: password
            }
            if (tipo_usuario === 'viajero'){
                dispatch (begindata(beginConstants(data_sesion, false, 0).login_viajero))
            }else{
                dispatch (begindata(beginConstants(data_sesion, false, 0).login_conductor))
            }
        }
    }

    return (
        <div className='justify-content-center d-flex' style={{width: '100%', paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional}}>
            <div className='shadow rounded' style={{width: '40%', padding: 20 / proporcional}}>
                <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 20 / proporcional, color: '#212121',
                            textAlign: 'center', fontWeight: 700}}>
                    Inicia sesión
                </p>
                <div style={{paddingLeft: 100 / proporcional, paddingRight: 100 / proporcional}}>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: '#212121',
                                textAlign: '', fontWeight: 700, marginBottom: 5 / proporcional}}>
                        Correo o número de teléfono
                    </p>
                    <div className='rounded' style={{width: 540 / proporcional, border: !ecorreo ? '1px solid rgba(158,158,158, 0.6)' : '1px solid red', 
                                marginBottom: 20 / proporcional}}>
                        <input type='email'
                            className='form-control border-0'
                            value={correo}
                            onChange={(event) => setCorreo(event.target.value)}
                            style={{width: 538 / proporcional, height: 50 / proporcional, 
                                fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`}}
                            placeholder='Correo o número de teléfono'
                        />
                    </div>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: '#212121',
                                textAlign: '', fontWeight: 700, marginBottom: 5 / proporcional}}>
                        Contraseña
                    </p>
                    <div className='d-flex rounded' style={{width: 540 / proporcional, border: !epassword ? '1px solid rgba(158,158,158, 0.6)' : '1px solid red', 
                                marginBottom: 20 / proporcional}}>
                        <input type={!hide_password ? 'password' : 'default'}
                            className='form-control border-0'
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            style={{width: 488 / proporcional, height: 50 / proporcional,
                                fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`}}
                            placeholder='******'
                        />
                        <img src={hide_password ? icono_hide : icono_view} style={{width: 30 / proporcional, height: 30 / proporcional, margin: 10 / proporcional, cursor: 'pointer'}}
                            onClick={() => setHidePassword(!hide_password)}/>
                    </div>
                    <div className='d-flex' style={{width: 540 / proporcional, height: 40 / proporcional, marginBottom: 10 / proporcional}}>
                        <div className='d-flex' style={{width: 270 / proporcional, height: 40 / proporcional}}
                            onClick={() => setTipoUsuario('viajero')}>
                            <img src={tipo_usuario === 'viajero' ? box_check : box_uncheck} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 8 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: '#212121',
                                        textAlign: '', fontWeight: 500}}>
                                Soy viajero
                            </p>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: 270 / proporcional, height: 40 / proporcional}}
                            onClick={() => setTipoUsuario('conductor')}>
                            <img src={tipo_usuario === 'conductor' ? box_check : box_uncheck} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 8 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: '#212121',
                                        textAlign: '', fontWeight: 500}}>
                                Soy conductor
                            </p>
                        </div>
                    </div>
                    {
                        etipo_usuario !== '' ? (
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0 / proporcional, color: 'red',
                                                textAlign: '', fontWeight: 500, marginBottom: 10 / proporcional}}>
                                {etipo_usuario}
                            </p>
                        ) : null
                    }
                    <div className='d-flex justify-content-start' style={{width: 540 / proporcional, marginBottom: 10 / proporcional}}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: '#212121',
                                    textAlign: '', fontWeight: 500, marginRight: 10 / proporcional}}>
                            ¿Has olvidado tu contraseña? 
                        </p>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: '#212121',
                                    textAlign: '', fontWeight: 700, cursor: 'pointer'}} onClick={() => navigate('/recuperar-contraseña')}>
                            Recuperala aquí 
                        </p>
                    </div>
                    <div className='d-flex justify-content-end' style={{width: 540 / proporcional, marginBottom: 10 / proporcional}}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: '#212121',
                                    textAlign: '', fontWeight: 500, marginRight: 10 / proporcional}}>
                            ¿Aún no tienes una cuenta? 
                        </p>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: '#212121',
                                    textAlign: '', fontWeight: 700, cursor: 'pointer'}} onClick={() => navigate('/registro')}>
                            Regístrate 
                        </p>
                    </div>
                    <button className='btn rounded-pill' style={{width: boton_sesion ? 538 / proporcional : 540 / proporcional, 
                        fontSize: 24 / proporcional, lineHeight: `${50 / proporcional}px`,
                        background: '#212121', color: 'white', marginBottom: 0, fontWeight: boton_sesion ? 600 : 700}} onClick={() => iniciar_sesion()}
                        onMouseOver={() => setBotonSesion(true)} onMouseLeave={() => setBotonSesion(false)}>
                        Ingresar
                    </button>
                </div>
            </div>
        </div>
    )
}