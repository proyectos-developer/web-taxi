import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import icono_view from '../../assets/iconos/icono_view.png'
import icono_hide from '../../assets/iconos/icono_hide.png'
import box_uncheck from '../../assets/iconos/box_uncheck.png'
import box_check from '../../assets/iconos/box_check.png'

import { useNavigate } from 'react-router-dom'
import {begindata} from '../../redux/slice/begindata'
import { beginConstants } from '../../uri/begin-constants'

export default function RegistroPanelCell({proporcional}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [nombres, setNombres] = useState ('')
    const [correo, setCorreo] = useState ('')
    const [nro_telefono, setNroTelfono] = useState ('')
    const [password, setPassword] = useState ('')
    const [confirmar_password, setConfirmarPassword] = useState ('')
    const [tipo_usuario, setTipoUsuario] = useState ('')
    
    const [enombres, setENombres] = useState (false)
    const [ecorreo, setECorreo] = useState (false)
    const [enro_telefono, setENroTelfono] = useState (false)
    const [epassword, setEPassword] = useState (false)
    const [econfirmar_password, setEConfirmarPassword] = useState (false)
    const [etipo_usuario, setETipoUsuario] = useState ('')

    const [hide_password, setHidePassword] = useState (false)
    const [hide_confirmar, setHideConfirmar] = useState (false)

    const [boton_registro, setBotonRegistro] = useState (false)

    const {register_conductor, register_viajero} = useSelector(({begin}) => begin)

    useEffect(() => {
        if (register_viajero && register_viajero.success === true && register_viajero.user){
            window.localStorage.setItem('session_id', register_viajero.user.session_id)
            dispatch (begindata(beginConstants({}, true, 0).register_viajero))
            navigate ('/')
        }
    }, [register_viajero])

    useEffect(() => {
        if (register_conductor && register_conductor.success === true && register_conductor.user){
            window.localStorage.setItem('session_id', register_conductor.user.session_id)
            dispatch (begindata(beginConstants({}, true, 0).register_conductor))
            navigate ('/')
        }
    }, [register_conductor])
    
    const registrarme = () => {
        if (nombres === '' || correo === '' || nro_telefono === '' || password === '' || confirmar_password === '' ||
            (password !== confirmar_password || tipo_usuario === '')){
            setENombres(nombres === '' ? true : false)
            setECorreo(correo === '' ? true : false)
            setENroTelfono(nro_telefono === '' ? true : false)
            setEPassword(password === '' ? true : false)
            setEConfirmarPassword(confirmar_password === '' || password !== confirmar_password ? true : false)
            setETipoUsuario(tipo_usuario === '' ? '¡Debe seleccionar si es viajero o conductor!' : '')
        }else{
            setENombres(false)
            setECorreo(false)
            setENroTelfono(false)
            setEPassword(false)
            setEConfirmarPassword(false)
            setETipoUsuario('')
            const data_user = {
                correo: correo,
                password: password,
                usuario: correo.split('@')[0],
                nro_telefono: nro_telefono
            }
            if (tipo_usuario === 'viajero'){
                dispatch(begindata(beginConstants(data_user, false, 0).register_viajero))
            }else{
                dispatch(begindata(beginConstants(data_user, false, 0).register_conductor))
            }
        }
    }

    return (
        <div className='justify-content-center d-flex' style={{width: '100%', paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional}}>
            <div className='shadow rounded' style={{width: '80%', padding: 20 / proporcional}}>
                <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 20 / proporcional, color: '#212121',
                            textAlign: 'center', fontWeight: 700}}>
                    Ingresa tus datos de registro
                </p>
                <div style={{paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: '#212121',
                                textAlign: '', fontWeight: 700, marginBottom: 5 / proporcional}}>
                        Nombres
                    </p>
                    <div className='rounded' style={{width: 320 / proporcional, border: !enombres ? '1px solid rgba(158,158,158, 0.6)' : '1px solid red', 
                                marginBottom: 20 / proporcional}}>
                        <input type='default'
                            className='form-control border-0'
                            value={nombres}
                            onChange={(event) => setNombres(event.target.value)}
                            style={{width: 318 / proporcional, height: 50 / proporcional,
                                fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`}}
                            placeholder='Ej. Jorge P...'
                        />
                    </div>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: '#212121',
                                textAlign: '', fontWeight: 700, marginBottom: 5 / proporcional}}>
                        Correo electrónico
                    </p>
                    <div className='rounded' style={{width: 320 / proporcional, border: !ecorreo ? '1px solid rgba(158,158,158, 0.6)' : '1px solid red', 
                                marginBottom: 20 / proporcional}}>
                        <input type='email'
                            className='form-control border-0'
                            value={correo}
                            onChange={(event) => setCorreo(event.target.value)}
                            style={{width: 318 / proporcional, height: 50 / proporcional, 
                                fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`}}
                            placeholder='Ej. nombres@dominio.com'
                        />
                    </div>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: '#212121',
                                textAlign: '', fontWeight: 700, marginBottom: 5 / proporcional}}>
                        Número teléfono
                    </p>
                    <div className='rounded' style={{width: 320 / proporcional, border: !enro_telefono ? '1px solid rgba(158,158,158, 0.6)' : '1px solid red', 
                                marginBottom: 20 / proporcional}}>
                        <input type='number'
                            className='form-control border-0'
                            value={nro_telefono}
                            onChange={(event) => setNroTelfono(event.target.value)}
                            style={{width: 318 / proporcional, height: 50 / proporcional,
                                fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`}}
                            placeholder='Ej. 968...'
                        />
                    </div>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: '#212121',
                                textAlign: '', fontWeight: 700, marginBottom: 5 / proporcional}}>
                        Contraseña
                    </p>
                    <div className='d-flex rounded' style={{width: 320 / proporcional, border: !epassword ? '1px solid rgba(158,158,158, 0.6)' : '1px solid red', 
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
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: '#212121',
                                textAlign: '', fontWeight: 700, marginBottom: 5 / proporcional}}>
                        Confirmar contraseña
                    </p>
                    <div className='d-flex rounded' style={{width: 320 / proporcional, border: !econfirmar_password ? '1px solid rgba(158,158,158, 0.6)' : '1px solid red', 
                                marginBottom: 20 / proporcional}}>
                        <input type={!hide_confirmar ? 'password' : 'default'}
                            className='form-control border-0'
                            value={confirmar_password}
                            onChange={(event) => setConfirmarPassword(event.target.value)}
                            style={{width: 488 / proporcional, height: 50 / proporcional, 
                                fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`}}
                            placeholder='******'
                        />
                        <img src={hide_confirmar ? icono_hide : icono_view} style={{width: 30 / proporcional, height: 30 / proporcional, margin: 10 / proporcional, cursor: 'pointer'}}
                            onClick={() => setHideConfirmar(!hide_confirmar)}/>
                    </div>
                        <div className='d-flex' style={{height: 40 / proporcional}}
                            onClick={() => setTipoUsuario('viajero')}>
                            <img src={tipo_usuario === 'viajero' ? box_check : box_uncheck} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 8 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: '#212121',
                                        textAlign: '', fontWeight: 500}}>
                                Soy viajero
                            </p>
                        </div>
                        <div className='d-flex justify-content-start' style={{height: 40 / proporcional}}
                            onClick={() => setTipoUsuario('conductor')}>
                            <img src={tipo_usuario === 'conductor' ? box_check : box_uncheck} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 8 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: '#212121',
                                        textAlign: '', fontWeight: 500}}>
                                Soy conductor
                            </p>
                        </div>
                    {
                        etipo_usuario !== '' ? (
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0 / proporcional, color: 'red',
                                                textAlign: '', fontWeight: 500, marginBottom: 10 / proporcional}}>
                                {etipo_usuario}
                            </p>
                        ) : null
                    }
                    <div className='d-flex justify-content-end' style={{width: 320 / proporcional, marginBottom: 10 / proporcional}}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: '#212121',
                                    textAlign: '', fontWeight: 500, marginRight: 10 / proporcional}}>
                            ¿Ya tienes una cuenta? 
                        </p>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: '#212121',
                                    textAlign: '', fontWeight: 700, cursor: 'pointer'}} onClick={() => navigate('/sesion')}>
                            Inicia sesión 
                        </p>
                    </div>
                    <button className='btn rounded-pill' style={{width: boton_registro ? 318 / proporcional : 320 / proporcional, 
                        fontSize: 24 / proporcional, lineHeight: `${50 / proporcional}px`,
                        background: '#212121', color: 'white', marginBottom: 0, fontWeight: boton_registro ? 600 : 700}} onClick={() => registrarme()}
                        onMouseOver={() => setBotonRegistro(true)} onMouseLeave={() => setBotonRegistro(false)}>
                        Registrarme
                    </button>
                </div>
            </div>
        </div>
    )
}