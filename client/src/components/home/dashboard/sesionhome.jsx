import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import fondo_home_3 from '../../../assets/images/fondo_home_3.png'

import icono_dot from '../../../assets/iconos/icono_dot.png'
import iniciar_sesion from '../../../assets/images/iniciar_sesion.png'
import registro from '../../../assets/images/registro.png'

import logo from '../../../assets/icono_taxi_512.png'


export default function SesionHome({proporcional}) {

    const navigate = useNavigate()

    return (
        <div className='' 
            style={{width: 1440 / proporcional, marginLeft: 240 / proporcional, marginRight: 240 / proporcional, borderRadius: 64 / proporcional, 
                    border: '20px solid rgba(39, 39, 39, 0.8)'}}>
            <div style={{background: 'rgba(39, 39, 39, 0.8)', borderRadius: 32 / proporcional}}>
                <div className='position-relative'>
                    <img src={fondo_home_3} style={{width: 1400 / proporcional, borderRadius: 32 / proporcional, marginBottom: 20 / proporcional}}/>
                    <div className='position-absolute' style={{left: 64 / proporcional, top: 64 / proporcional, opacity: 0.8}}>
                        <img src={logo} style={{width: 192 / proporcional, height: 192 / proporcional}}/>
                    </div>
                </div>
                <div className='d-flex' style={{width: 1400 / proporcional, borderRadius: 32 / proporcional}}>
                    <div style={{width: 680 / proporcional, marginRight: 20 / proporcional, background: 'rgba(39, 39, 39, 0.8)', padding: 50 / proporcional, 
                                borderRadius: 32 / proporcional}}>
                        <div className='d-flex justify-content-center' style={{marginBottom: 10 / proporcional}}>
                            <img src={iniciar_sesion} style={{width: 350 / proporcional}}/>
                        </div>
                        <p style={{fontSize: 30 / proporcional, color: 'white', textAlign: 'center', fontWeight: 600, lineHeight: `${40 / proporcional}px`}}>¿Ya tienes una cuenta? <br/>Inicia sesión</p>
                        <div className='d-flex'>
                            <img src={icono_dot} style={{width: 22 / proporcional, height: 22 / proporcional, marginRight: 10 / proporcional, marginTop: 4 / proporcional, marginBottom: 4 / proporcional}}/> 
                            <p style={{fontSize: 22 / proporcional, color: 'white', textAlign: 'justify', fontWeight: 500, lineHeight: `${30 / proporcional}px`}}>Como usuario y pide tu taxi.</p>
                        </div>
                        
                        <div className='d-flex'>
                            <img src={icono_dot} style={{width: 22 / proporcional, height: 22 / proporcional, marginRight: 10 / proporcional, marginTop: 4 / proporcional, marginBottom: 4 / proporcional}}/> 
                            <p style={{fontSize: 22 / proporcional, color: 'white', textAlign: 'justify', fontWeight: 500, lineHeight: `${30 / proporcional}px`}}>Como conductor y traslada al usuario.</p>
                        </div>
                    </div>
                    <div style={{width: 680 / proporcional, marginLeft: 20 / proporcional, background: 'rgba(39, 39, 39, 0.8)', padding: 50 / proporcional, 
                                borderRadius: 32 / proporcional}}>
                        <div className='d-flex justify-content-center' style={{marginBottom: 10 / proporcional}}>
                            <img src={registro} style={{width: 350 / proporcional}}/>
                        </div>
                        <p style={{fontSize: 30 / proporcional, color: 'white', textAlign: 'center', fontWeight: 600, lineHeight: `${40 / proporcional}px`}}>¿Aún no tienes una cuenta? <br/>Regístrate</p>
                        <div className='d-flex'>
                            <img src={icono_dot} style={{width: 22 / proporcional, height: 22 / proporcional, marginRight: 10 / proporcional, marginTop: 4 / proporcional, marginBottom: 4 / proporcional}}/> 
                        <p style={{fontSize: 22 / proporcional, color: 'white', textAlign: 'justify', fontWeight: 500, lineHeight: `${30 / proporcional}px`}}>Como usuario y pide tu taxi.</p>
                        </div>
                        
                        <div className='d-flex'>
                            <img src={icono_dot} style={{width: 22 / proporcional, height: 22 / proporcional, marginRight: 10 / proporcional, marginTop: 4 / proporcional, marginBottom: 4 / proporcional}}/> 
                        <p style={{fontSize: 22 / proporcional, color: 'white', textAlign: 'justify', fontWeight: 500, lineHeight: `${30 / proporcional}px`}}>Como conductor y traslada al usuario.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}