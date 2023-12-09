import React, { useState } from 'react'

import icono_perfil from '../../assets/iconos/icono_perfil_96.png'
import icono_registro_viajes from '../../assets/iconos/icono_registro_viajes_96.png'
import icono_ingresos from '../../assets/iconos/icono_ingresos_96.png'
import icono_calificaciones from '../../assets/iconos/icono_calificaciones_96.png'

import { useLocation, useNavigate } from 'react-router-dom'

export default function DashboardConductorTablet({proporcional}) {

    const location = useLocation()
    const navigate = useNavigate()
    
    const [seleccion_card, setSeleccionCard] = useState ('')
    
    return ( 
        <div className='' style={{width: '100%', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, 
                paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
            <div className='' style={{width: 871 / proporcional, top: 50}}>
                <p style={{width: 'auto', fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'black', fontWeight: 700, textAlign: 'center', marginBottom: 20 / proporcional}}>
                    MI PANEL
                </p>
            </div>
            <div className='d-flex ' style={{width: 871 / proporcional, marginBottom: 20 / proporcional}}>
                <div style={{width: 395.5 / proporcional, marginRight: 20 / proporcional, background: `rgba(39, 39, 39, ${seleccion_card === 'perfil' ? 0.6 : 0.8})`, 
                        padding: seleccion_card === 'perfil' ? 25 / proporcional :  20 / proporcional,
                        borderRadius: 16 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionCard ('perfil')} onMouseLeave={() => setSeleccionCard('')}
                        onClick={() => navigate (`/conductor/perfil/${location.pathname.split ('/')[2]}`)}>
                    <div className='d-flex justify-content-center'>
                        <img src={icono_perfil} style={{width: 96 / proporcional, height: 96 / proporcional, marginBottom: 20 / proporcional}}/>
                    </div>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 600, textAlign: 'center', marginBottom: 20 / proporcional}}>
                        Mi perfil
                    </p>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, color: 'white', fontWeight: 500, textAlign: 'justify', marginBottom: 0}}>
                        ¡Ten tus datos al día!
                    </p>
                </div>
                <div style={{width: 395.5 / proporcional, marginLeft: 20 / proporcional, background: `rgba(39, 39, 39, ${seleccion_card === 'viajes' ? 0.6 : 0.8})`, 
                        padding: seleccion_card === 'viajes' ? 25 / proporcional :  20 / proporcional,
                        borderRadius: 16 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionCard ('viajes')} onMouseLeave={() => setSeleccionCard('')}
                        onClick={() => navigate (`/conductor/viajes/${location.pathname.split('/')[2]}`)}>
                    <div className='d-flex justify-content-center'>
                        <img src={icono_registro_viajes} style={{width: 96 / proporcional, height: 96 / proporcional, marginBottom: 20 / proporcional}}/>
                    </div>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 600, textAlign: 'center', marginBottom: 20}}>
                        Mi registro de viajes
                    </p>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, color: 'white', fontWeight: 500, textAlign: 'justify', marginBottom: 0}}>
                        Mira tu historial de viajes finalizados.
                    </p>
                </div>
            </div>
            <div className='d-flex ' style={{width: 871 / proporcional}}>
                <div style={{width: 395.5 / proporcional, marginRight: 20 / proporcional, background: `rgba(39, 39, 39, ${seleccion_card === 'gastos' ? 0.6 : 0.8})`, 
                        padding: seleccion_card === 'gastos' ? 25 / proporcional :  20 / proporcional,
                        borderRadius: 16 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionCard ('gastos')} onMouseLeave={() => setSeleccionCard('')}
                        onClick={() => navigate (`/conductor/ingresos/${location.pathname.split('/')[2]}`)}>
                    <div className='d-flex justify-content-center'>
                        <img src={icono_ingresos} style={{width: 96 / proporcional, height: 96 / proporcional, marginBottom: 20 / proporcional}}/>
                    </div>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 600, textAlign: 'center', marginBottom: 20}}>
                        Mis ingresos
                    </p>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 600, textAlign: 'justify', marginBottom: 0}}>
                        ¡Ten control de tus viajes realizados por viaje!
                    </p>
                </div>
                <div style={{width: 395.5 / proporcional, marginLeft: 20 / proporcional, background: `rgba(39, 39, 39, ${seleccion_card === 'cupones' ? 0.6 : 0.8})`, 
                        padding: seleccion_card === 'cupones' ? 25 / proporcional :  20 / proporcional,
                        borderRadius: 16 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionCard ('cupones')} onMouseLeave={() => setSeleccionCard('')}
                        onClick={() => navigate (`/conductor/calificaciones/${location.pathname.split('/')[2]}`)}>
                    <div className='d-flex justify-content-center'>
                        <img src={icono_calificaciones} style={{width: 96 / proporcional, height: 96 / proporcional, marginBottom: 20 / proporcional}}/>
                    </div>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 600, textAlign: 'center', marginBottom: 20}}>
                        Mis calificaciones
                    </p>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 600, textAlign: 'justify', marginBottom: 0}}>
                        Mira como te han calificado.
                    </p>
                </div>
            </div>
        </div>
    )
}
