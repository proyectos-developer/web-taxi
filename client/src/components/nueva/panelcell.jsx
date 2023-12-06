import React, { useState } from 'react'
import {useDispatch} from 'react-redux'

import { useNavigate } from 'react-router-dom'

import icono_view from '../../assets/iconos/icono_view.png'
import icono_hide from '../../assets/iconos/icono_hide.png'

export default function NuevaContraseñaCell({proporcional}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [password, setPassword] = useState ('')
    const [confirmar_password, setConfirmarPassword] = useState ('')

    const [epassword, setEPassword] = useState (false)
    const [econfirmar_password, setEConfirmarPassword] = useState (false)
    
    const [boton_cambiar, setBotonCambiar] = useState (false)

    const [hide_password, setHidePassword] = useState (false)
    const [hide_confirmar, setHideConfirmar] = useState (false)
    
    const cambiar_contraseña = () => {
        if (password === '' || confirmar_password === '' || password !== confirmar_password){
            setEPassword(password === '' ? true : false)
            setEConfirmarPassword(confirmar_password === '' ? true : false)
        }else{

        }
    }

    return (
        <div className='justify-content-center d-flex' style={{width: '100%', paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional}}>
            <div className='shadow rounded' style={{width: '80%', padding: 20 / proporcional}}>
                <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 20 / proporcional, color: '#212121',
                            textAlign: 'center', fontWeight: 700}}>
                    Nueva contraseña
                </p>
                <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, color: '#212121',
                            textAlign: '', fontWeight: 500, marginBottom: 20 / proporcional, textAlign: 'justify'}}>
                    Ingresa tu nueva contraseña.
                </p>
                <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: '#212121',
                            textAlign: '', fontWeight: 700, marginBottom: 5 / proporcional}}>
                    Contraseña
                </p>
                <div className='d-flex rounded' style={{width: 360 / proporcional, border: !epassword ? '1px solid rgba(158,158,158, 0.6)' : '1px solid red', 
                            marginBottom: 20 / proporcional}}>
                    <input type={!hide_password ? 'password' : 'default'}
                        className='form-control border-0'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        style={{width: 358 / proporcional, height: 50 / proporcional,
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
                <div className='d-flex rounded' style={{width: 360 / proporcional, border: !econfirmar_password ? '1px solid rgba(158,158,158, 0.6)' : '1px solid red', 
                            marginBottom: 20 / proporcional}}>
                    <input type={!hide_confirmar ? 'password' : 'default'}
                        className='form-control border-0'
                        value={confirmar_password}
                        onChange={(event) => setConfirmarPassword(event.target.value)}
                        style={{width: 358 / proporcional, height: 50 / proporcional, 
                            fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`}}
                        placeholder='******'
                    />
                    <img src={hide_confirmar ? icono_hide : icono_view} style={{width: 30 / proporcional, height: 30 / proporcional, margin: 10 / proporcional, cursor: 'pointer'}}
                        onClick={() => setHideConfirmar(!hide_confirmar)}/>
                </div>
                <button className='btn rounded-pill' style={{width: boton_cambiar ? 358 / proporcional : 360 / proporcional, 
                    fontSize: 24 / proporcional, lineHeight: `${50 / proporcional}px`,
                    background: '#212121', color: 'white', marginBottom: 0, fontWeight: boton_cambiar ? 600 : 700}} onClick={() => cambiar_contraseña()}
                    onMouseOver={() => setBotonCambiar(true)} onMouseLeave={() => setBotonCambiar(false)}>
                    Cambiar contraseña
                </button>
            </div>
        </div>
    )
}