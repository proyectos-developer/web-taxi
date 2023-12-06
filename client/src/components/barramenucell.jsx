import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import icono_menu from '../assets/iconos/icono_menu_white.png'

export default function BarraMenuCell({proporcional}) {

    const navigate = useNavigate()

    const [open_menu, setOpenMenu] = useState (false)

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
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white', marginBottom: 0, 
                            paddingLeft: 50 / proporcional, paddingRight: 50 / proporcional, paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional,
                            fontWeight: 500, cursor: 'pointer'}} onClick={() => {navigate('pasajero'); setOpenMenu(false)}}>
                            Pasajero
                        </p>  
                        <p className='rounded-pill' style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white',
                            marginBottom: 0,  fontWeight: 500, cursor: 'pointer', 
                            paddingLeft: 50 / proporcional, paddingRight: 50 / proporcional, paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional}} 
                            onClick={() => {navigate('conductor'); setOpenMenu(false)}}>
                            Conductor
                        </p>
                        <p className='rounded-pill' style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white',
                            marginBottom: 0,  fontWeight: 500, cursor: 'pointer', 
                            paddingLeft: 50 / proporcional, paddingRight: 50 / proporcional, paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional}} 
                            onClick={() => {navigate('sesion'); setOpenMenu(false)}}>
                            Iniciar sesión
                        </p>
                        <p className='rounded-pill' style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white',
                            marginBottom: 0,  fontWeight: 500, cursor: 'pointer', 
                            paddingLeft: 50 / proporcional, paddingRight: 50 / proporcional, paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional}} 
                            onClick={() => {navigate('registro'); setOpenMenu(false)}}>
                            Regístrarse
                        </p>  
                    </div>
                ) : null
            }
      </div>
    )
}
