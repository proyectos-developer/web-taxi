import React from 'react'

import logo from '../assets/icono_taxi_512.png'
import play_store_white from '../assets/tiendas/play_store_white.png'
import app_store_white from '../assets/tiendas/app_store_white.png'

import { useNavigate } from 'react-router-dom'

export default function FooterPrincipalTablet({proporcional}) {

    const navigate = useNavigate ()

    return (
        <div className='' 
            style={{width: '100%', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 120 / proporcional, paddingRight: 120 / proporcional,
                    background: 'black'}}>
            <div className='d-flex justify-content-center' style={{width: '100%', marginBottom: 20 / proporcional}}>
                <img src={logo} style={{width: 320 / proporcional, height: 320 / proporcional}}/>
            </div>
            <div className='d-flex' style={{width: '100%'}}>
                <div style={{width: '50%', paddingTop: 35 / proporcional, paddingBottom: 35 / proporcional}}>
                    <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, color: 'white', fontWeight: 500, cursor: 'pointer', marginBottom: 10 / proporcional}}
                        onClick={() => {navigate ('/conductor'); window.scrollTo(0, 0)}}>
                        Conductor
                    </p>
                    <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, color: 'white', fontWeight: 500, cursor: 'pointer', marginBottom: 10 / proporcional}}
                        onClick={() => {navigate ('/pasajero'); window.scrollTo(0, 0)}}>
                        Viajero
                    </p>
                    <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, color: 'white', fontWeight: 500, cursor: 'pointer', marginBottom: 10 / proporcional}}
                        onClick={() => {navigate ('/registro'); window.scrollTo(0, 0)}}>
                        Registro
                    </p>
                    <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, color: 'white', fontWeight: 500, cursor: 'pointer', marginBottom: 10 / proporcional}}
                        onClick={() => {navigate ('/politica-privacidad'); window.scrollTo(0, 0)}}>
                        Política y privacidad
                    </p>
                </div>
                <div style={{width: '50%', paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional}}>
                    <p style={{fontSize: 24 / proporcional, lineHeight: `${40 / proporcional}px`, color: 'white', fontWeight: 500, cursor: 'pointer', marginBottom: 10 / proporcional,
                        textAlign: 'center'}}>
                        Encuentranos en:
                    </p>
                    <div className='d-flex justify-content-center' style={{marginBottom: 10 / proporcional}}>
                        <img src={play_store_white} style={{width: 320 / proporcional}}/>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <img src={app_store_white} style={{width: 320 / proporcional}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}