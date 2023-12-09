import React, { useEffect, useState } from 'react'

import icono_panel from '../../assets/iconos/icono_panel_96.png'
import icono_registro_viajes from '../../assets/iconos/icono_registro_viajes_96.png'
import icono_ingresos from '../../assets/iconos/icono_ingresos_96.png'
import icono_calificaciones from '../../assets/iconos/icono_calificaciones_96.png'
import { useLocation, useNavigate } from 'react-router-dom'

export default function DocumentosConductorCell({proporcional}) {

  const [seleccion_card, setSeleccionCard] = useState ('')
  
  const navigate = useNavigate()
  const location = useLocation ()

  return (
    <div className='' style={{width: '100%', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, 
            paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
            <div style={{width: 459 / proporcional, marginBottom: 20 / proporcional, background: `rgba(39, 39, 39, ${seleccion_card === 'perfil' ? 0.6 : 0.8})`, 
                    padding: seleccion_card === 'perfil' ? 15 / proporcional :  10 / proporcional,
                    borderRadius: 16 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionCard ('perfil')} onMouseLeave={() => setSeleccionCard('')}
                    onClick={() => navigate (`/conductor/${location.pathname.split('/')[3]}`)}>
                <div className='d-flex justify-content-center'>
                    <img src={icono_panel} style={{width: 96 / proporcional, height: 96 / proporcional, marginBottom: 20 / proporcional}}/>
                </div>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 600, textAlign: 'center', marginBottom: 20 / proporcional}}>
                    Panel
                </p>
            </div>
            <div style={{width: 459 / proporcional, marginBottom: 20 / proporcional, background: `rgba(39, 39, 39, ${seleccion_card === 'viajes' ? 0.6 : 0.8})`, 
                    padding: seleccion_card === 'viajes' ? 15 / proporcional :  10 / proporcional,
                    borderRadius: 16 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionCard ('viajes')} onMouseLeave={() => setSeleccionCard('')}
                    onClick={() => navigate (`/conductor/viajes/${location.pathname.split('/')[3]}`)}>
                <div className='d-flex justify-content-center'>
                    <img src={icono_registro_viajes} style={{width: 96 / proporcional, height: 96 / proporcional, marginBottom: 20 / proporcional}}/>
                </div>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 600, textAlign: 'center', marginBottom: 20}}>
                    Mi registro de viajes
                </p>
            </div>
            <div style={{width: 459 / proporcional, marginBottom: 20 / proporcional, background: `rgba(39, 39, 39, ${seleccion_card === 'gastos' ? 0.6 : 0.8})`, 
                    padding: seleccion_card === 'gastos' ? 15 / proporcional :  10 / proporcional,
                    borderRadius: 16 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionCard ('gastos')} onMouseLeave={() => setSeleccionCard('')}
                    onClick={() => navigate (`/conductor/ingresos/${location.pathname.split('/')[3]}`)}>
                <div className='d-flex justify-content-center'>
                    <img src={icono_ingresos} style={{width: 96 / proporcional, height: 96 / proporcional, marginBottom: 20 / proporcional}}/>
                </div>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 600, textAlign: 'center', marginBottom: 20}}>
                    Mis ingresos
                </p>
            </div>
            <div style={{width: 459 / proporcional, marginBottom: 20 / proporcional, background: `rgba(39, 39, 39, ${seleccion_card === 'cupones' ? 0.6 : 0.8})`, 
                    padding: seleccion_card === 'cupones' ? 15 / proporcional :  10 / proporcional,
                    borderRadius: 16 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionCard ('cupones')} onMouseLeave={() => setSeleccionCard('')}
                    onClick={() => navigate (`/conductor/calificaciones/${location.pathname.split('/')[3]}`)}>
                <div className='d-flex justify-content-center'>
                    <img src={icono_calificaciones} style={{width: 96 / proporcional, height: 96 / proporcional, marginBottom: 20 / proporcional}}/>
                </div>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 600, textAlign: 'center', marginBottom: 20}}>
                    Mis calificaciones
                </p>
            </div>
            <div className='d-flex justify-content-center' style={{width: 459 / proporcional, marginBottom: 50 / proporcional}}>
                <div style={{marginLeft: 15 / proporcional, marginRight: 15 / proporcional, cursor: 'pointer'}}
                    onClick={() => navigate (`/conductor/perfil/${location.pathname.split('/')[3]}`)}>
                    <p style={{width: 'auto', fontSize: 18 / proporcional, lineHeight: `${25 / proporcional}px`, color: 'black', marginBottom: 5 / proporcional,
                            fontWeight: location.pathname.split('/')[2] === 'perfil' ? 700 : 400}}>
                        MI PERFIL
                    </p>
                    {
                        location.pathname.split('/')[2] === 'perfil' ? (
                            <div className='rounded-pill' style={{width: '100%', height: 5 / proporcional, background: 'black'}}/>
                        ) : null
                    }
                </div>
                <div style={{marginLeft: 15 / proporcional, marginRight: 15 / proporcional, cursor: 'pointer'}}
                    onClick={() => navigate (`/conductor/vehiculo/${location.pathname.split('/')[3]}`)}>
                    <p style={{width: 'auto', fontSize: 18 / proporcional, lineHeight: `${25 / proporcional}px`, color: 'black', marginBottom: 5 / proporcional,
                            fontWeight: location.pathname.split('/')[2] === 'vehiculo' ? 700 : 400}}>
                        MI VEHÍCULO
                    </p>
                    {
                        location.pathname.split('/')[2] === 'vehiculo' ? (
                            <div className='rounded-pill' style={{width: '100%', height: 5 / proporcional, background: 'black'}}/>
                        ) : null
                    }
                </div>
                <div style={{marginLeft: 15 / proporcional, marginRight: 15 / proporcional, cursor: 'pointer'}}
                    onClick={() => navigate (`/conductor/documentos/${location.pathname.split('/')[3]}`)}>
                    <p style={{width: 'auto', fontSize: 18 / proporcional, lineHeight: `${25 / proporcional}px`, color: 'black', marginBottom: 5 / proporcional,
                            fontWeight: location.pathname.split('/')[2] === 'documentos' ? 700 : 400}}>
                        MIS DOCUMENTOS
                    </p>
                    {
                        location.pathname.split('/')[2] === 'documentos' ? (
                            <div className='rounded-pill' style={{width: '100%', height: 5 / proporcional, background: 'black'}}/>
                        ) : null
                    }
                </div>
            </div>
      </div>
  )
}