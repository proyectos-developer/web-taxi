import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import icono_perfil from '../../assets/iconos/icono_perfil_96.png'
import icono_panel from '../../assets/iconos/icono_panel_96.png'
import icono_gastos from '../../assets/iconos/icono_gastos_96.png'
import icono_cupones from '../../assets/iconos/icono_cupones_96.png'
import { useDispatch, useSelector } from 'react-redux'
import {viajesdata} from '../../redux/slice/viajesdata'
import { viajesConstants } from '../../uri/viajes-constants'

export default function ViajesPasajero({proporcional}) {

    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    const [seleccion_card, setSeleccionCard] = useState ('')
    const [lista_viaje, setListaViajes] = useState([])

    const {get_viajes, get_viaje} = useSelector (({viajes}) => viajes)

    useEffect (() => {
        dispatch (viajesdata(viajesConstants({}, false, 0, location.pathname.split ('/')[3]).get_viajes))
    }, [])

    useEffect(() => {
        if (get_viajes && get_viajes.success === true && get_viajes.viajes){
            setListaViajes(get_viajes.viajes)
        }
    }, [get_viajes])
    
    return (
        <div className='' style={{width: '100%', paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional, 
                paddingLeft: 240 / proporcional, paddingRight: 240 / proporcional}}>
            <div className='d-flex ' style={{width: 1440 / proporcional, marginBottom: 20 / proporcional}}>
                <div style={{width: 340 / proporcional, marginRight: 20 / proporcional, background: `rgba(39, 39, 39, ${seleccion_card === 'perfil' ? 0.6 : 0.8})`, 
                        padding: seleccion_card === 'perfil' ? 15 / proporcional :  10 / proporcional,
                        borderRadius: 16 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionCard ('perfil')} onMouseLeave={() => setSeleccionCard('')}
                        onClick={() => navigate (`/pasajero/perfil/${location.pathname.split('/')[3]}`)}>
                    <div className='d-flex justify-content-center'>
                        <img src={icono_perfil} style={{width: 96 / proporcional, height: 96 / proporcional, marginBottom: 20 / proporcional}}/>
                    </div>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 600, textAlign: 'center', marginBottom: 20 / proporcional}}>
                        Mi perfil
                    </p>
                </div>
                <div style={{width: 340 / proporcional, marginLeft: 20 / proporcional, marginRight: 20 / proporcional, background: `rgba(39, 39, 39, ${seleccion_card === 'viajes' ? 0.6 : 0.8})`, 
                        padding: seleccion_card === 'viajes' ? 15 / proporcional :  10 / proporcional,
                        borderRadius: 16 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionCard ('viajes')} onMouseLeave={() => setSeleccionCard('')}
                        onClick={() => navigate (`/pasajero/${location.pathname.split('/')[3]}`)}>
                    <div className='d-flex justify-content-center'>
                        <img src={icono_panel} style={{width: 96 / proporcional, height: 96 / proporcional, marginBottom: 20 / proporcional}}/>
                    </div>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 600, textAlign: 'center', marginBottom: 20}}>
                        Panel
                    </p>
                </div>
                <div style={{width: 340 / proporcional, marginLeft: 20 / proporcional, marginRight: 20 / proporcional, background: `rgba(39, 39, 39, ${seleccion_card === 'gastos' ? 0.6 : 0.8})`, 
                        padding: seleccion_card === 'gastos' ? 15 / proporcional :  10 / proporcional,
                        borderRadius: 16 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionCard ('gastos')} onMouseLeave={() => setSeleccionCard('')}
                        onClick={() => navigate (`/pasajero/gastos/${location.pathname.split('/')[3]}`)}>
                    <div className='d-flex justify-content-center'>
                        <img src={icono_gastos} style={{width: 96 / proporcional, height: 96 / proporcional, marginBottom: 20 / proporcional}}/>
                    </div>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 600, textAlign: 'center', marginBottom: 20}}>
                        Mis gastos
                    </p>
                </div>
                <div style={{width: 340 / proporcional, marginLeft: 20 / proporcional, background: `rgba(39, 39, 39, ${seleccion_card === 'cupones' ? 0.6 : 0.8})`, 
                        padding: seleccion_card === 'cupones' ? 15 / proporcional :  10 / proporcional,
                        borderRadius: 16 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionCard ('cupones')} onMouseLeave={() => setSeleccionCard('')}
                        onClick={() => navigate (`/pasajero/cupones/${location.pathname.split('/')[3]}`)}>
                    <div className='d-flex justify-content-center'>
                        <img src={icono_cupones} style={{width: 96 / proporcional, height: 96 / proporcional, marginBottom: 20 / proporcional}}/>
                    </div>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 600, textAlign: 'center', marginBottom: 20}}>
                        Mis cupones
                    </p>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: 1440 / proporcional, marginBottom: 50 / proporcional}}>
                <p style={{width: 'auto', fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'black', fontWeight: 700}}>
                    MI HITORIAL DE VIAJES
                </p>
            </div>
        </div>
    )
}