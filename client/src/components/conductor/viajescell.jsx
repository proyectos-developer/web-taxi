import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import icono_perfil from '../../assets/iconos/icono_perfil_96.png'
import icono_panel from '../../assets/iconos/icono_panel_96.png'
import icono_ingresos from '../../assets/iconos/icono_ingresos_96.png'
import icono_calificaciones from '../../assets/iconos/icono_calificaciones_96.png'

import { useDispatch, useSelector } from 'react-redux'
import {viajesdata} from '../../redux/slice/viajesdata'
import { viajesConstants } from '../../uri/viajes-constants'

export default function ViajesConductorCell({proporcional}) {

    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    const [seleccion_card, setSeleccionCard] = useState ('')
    const [lista_viaje, setListaViajes] = useState([])

    const {get_viajes_conductor, get_viaje_conductor} = useSelector (({viajes}) => viajes)

    useEffect (() => {
        dispatch (viajesdata(viajesConstants({}, false, 0, location.pathname.split ('/')[3]).get_viajes_conductor))
    }, [])

    useEffect(() => {
        if (get_viajes_conductor && get_viajes_conductor.success === true && get_viajes_conductor.viajes){
            setListaViajes(get_viajes_conductor.viajes)
        }
    }, [get_viajes_conductor])
    
    return (
        <div className='' style={{width: '100%', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, 
                paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
            <div style={{width: 459 / proporcional, marginBottom: 20 / proporcional, background: `rgba(39, 39, 39, ${seleccion_card === 'perfil' ? 0.6 : 0.8})`, 
                    padding: seleccion_card === 'perfil' ? 15 / proporcional :  10 / proporcional,
                    borderRadius: 16 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionCard ('perfil')} onMouseLeave={() => setSeleccionCard('')}
                    onClick={() => navigate (`/conductor/perfil/${location.pathname.split('/')[3]}`)}>
                <div className='d-flex justify-content-center'>
                    <img src={icono_perfil} style={{width: 96 / proporcional, height: 96 / proporcional, marginBottom: 20 / proporcional}}/>
                </div>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 600, textAlign: 'center', marginBottom: 20 / proporcional}}>
                    Mi perfil
                </p>
            </div>
            <div style={{width: 459 / proporcional, marginBottom: 20 / proporcional, background: `rgba(39, 39, 39, ${seleccion_card === 'viajes' ? 0.6 : 0.8})`, 
                    padding: seleccion_card === 'viajes' ? 15 / proporcional :  10 / proporcional,
                    borderRadius: 16 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionCard ('viajes')} onMouseLeave={() => setSeleccionCard('')}
                    onClick={() => navigate (`/conductor/${location.pathname.split('/')[3]}`)}>
                <div className='d-flex justify-content-center'>
                    <img src={icono_panel} style={{width: 96 / proporcional, height: 96 / proporcional, marginBottom: 20 / proporcional}}/>
                </div>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 600, textAlign: 'center', marginBottom: 20}}>
                    Panel
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
                <p style={{width: 'auto', fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, color: 'black', fontWeight: 700}}>
                    MI HITORIAL DE VIAJES
                </p>
            </div>
        </div>
    )
}