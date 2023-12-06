import React, { useState } from 'react'
import {useDispatch} from 'react-redux'

import { useNavigate } from 'react-router-dom'

export default function RecuperarContraseña({proporcional}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [correo, setCorreo] = useState ('')
    
    const [ecorreo, setECorreo] = useState (false)

    const [boton_enviar, setBotonEnviar] = useState (false)
    
    const enviar_correo = () => {
        if (correo === ''){
            setECorreo(correo === '' ? true : false)
        }else{

        }
    }

    return (
        <div className='justify-content-center d-flex' style={{width: '100%', paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional}}>
            <div className='shadow rounded' style={{width: '40%', padding: 20 / proporcional}}>
                <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 20 / proporcional, color: '#212121',
                            textAlign: 'center', fontWeight: 700}}>
                    Recupera tu contraseña
                </p>
                <div style={{paddingLeft: 100 / proporcional, paddingRight: 100 / proporcional}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, color: '#212121',
                                textAlign: '', fontWeight: 500, marginBottom: 20 / proporcional, textAlign: 'justify'}}>
                        Ingresa tu correo electrónico y te enviaremos un enlace para recuperar tu contraseña.
                    </p>
                    <div className='rounded' style={{width: 540 / proporcional, border: !ecorreo ? '1px solid rgba(158,158,158, 0.6)' : '1px solid red', 
                                marginBottom: 20 / proporcional}}>
                        <input type='email'
                            className='form-control border-0'
                            value={correo}
                            onChange={(event) => setCorreo(event.target.value)}
                            style={{width: 538 / proporcional, height: 50 / proporcional, 
                                fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`}}
                            placeholder='Correo electrónico'
                        />
                    </div>
                    <button className='btn rounded-pill' style={{width: boton_enviar ? 538 / proporcional : 540 / proporcional, 
                        fontSize: 24 / proporcional, lineHeight: `${50 / proporcional}px`,
                        background: '#212121', color: 'white', marginBottom: 0, fontWeight: boton_enviar ? 600 : 700}} onClick={() => enviar_correo()}
                        onMouseOver={() => setBotonEnviar(true)} onMouseLeave={() => setBotonEnviar(false)}>
                        Enviar correo
                    </button>
                </div>
            </div>
        </div>
    )
}