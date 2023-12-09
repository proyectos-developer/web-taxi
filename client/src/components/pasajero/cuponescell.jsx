import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import icono_panel from '../../assets/iconos/icono_panel_96.png'
import icono_perfil from '../../assets/iconos/icono_perfil_96.png'
import icono_registro_viajes from '../../assets/iconos/icono_registro_viajes_96.png'
import icono_cupones from '../../assets/iconos/icono_cupones_96.png'

import { useDispatch, useSelector } from 'react-redux'
import {cuponesdata} from '../../redux/slice/cuponesdata'
import { cuponesConstants } from '../../uri/cupones-constants'

export default function  CuponesPasajeroCell({proporcional}) {

    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    const [seleccion_card, setSeleccionCard] = useState ('')
    const [lista_cupones, setLitaCupones] = useState([])

    const {get_cupones} = useSelector (({viajes}) => viajes)

    useEffect (() => {
        dispatch (cuponesdata(cuponesConstants({}, false, location.pathname.split ('/')[3]).get_cupones))
    }, [])

    useEffect(() => {
        if (get_cupones && get_cupones.success === true && get_cupones.viajes){
            setLitaCupones(get_cupones.viajes)
        }
    }, [get_cupones])
    
    return (
        <div className='' style={{width: '100%', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, 
                paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
            <div className='' style={{width: 459 / proporcional, marginBottom: 50 / proporcional}}>
                <div className='d-flex' style={{width: 459 / proporcional, marginBottom: 20 / proporcional}}>
                    <div style={{width: 459 / proporcional, background: `rgba(39, 39, 39, ${seleccion_card === 'perfil' ? 0.6 : 0.8})`, 
                            padding: seleccion_card === 'perfil' ? 25 / proporcional :  20 / proporcional,
                            borderRadius: 16 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionCard ('perfil')} onMouseLeave={() => setSeleccionCard('')}
                            onClick={() => navigate (`/pasajero/perfil/${location.pathname.split('/')[3]}`)}>
                        <div className='d-flex justify-content-center'>
                            <img src={icono_perfil} style={{width: 96 / proporcional, height: 96 / proporcional, marginBottom: 20 / proporcional}}/>
                        </div>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 600, textAlign: 'center', marginBottom: 20 / proporcional}}>
                            Mi perfil
                        </p>
                    </div>
                </div>
                <div className='d-flex' style={{width: 459 / proporcional, marginBottom: 20 / proporcional}}>
                    <div style={{width: 459 / proporcional, background: `rgba(39, 39, 39, ${seleccion_card === 'viajes' ? 0.6 : 0.8})`, 
                            padding: seleccion_card === 'viajes' ? 25 / proporcional :  20 / proporcional,
                            borderRadius: 16 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionCard ('viajes')} onMouseLeave={() => setSeleccionCard('')}
                            onClick={() => navigate (`/pasajero/viajes/${location.pathname.split('/')[3]}`)}>
                        <div className='d-flex justify-content-center'>
                            <img src={icono_registro_viajes} style={{width: 96 / proporcional, height: 96 / proporcional, marginBottom: 20 / proporcional}}/>
                        </div>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 600, textAlign: 'center', marginBottom: 20}}>
                            Mi historial de viajes
                        </p>
                    </div>
                </div>
                <div className='d-flex' style={{width: 459 / proporcional, marginBottom: 20 / proporcional}}>
                    <div style={{width: 459 / proporcional, background: `rgba(39, 39, 39, ${seleccion_card === 'gastos' ? 0.6 : 0.8})`, 
                            padding: seleccion_card === 'gastos' ? 25 / proporcional :  20 / proporcional,
                            borderRadius: 16 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionCard ('gastos')} onMouseLeave={() => setSeleccionCard('')}
                            onClick={() => navigate (`/pasajero/gastos/${location.pathname.split('/')[3]}`)}>
                        <div className='d-flex justify-content-center'>
                            <img src={icono_panel} style={{width: 96 / proporcional, height: 96 / proporcional, marginBottom: 20 / proporcional}}/>
                        </div>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 600, textAlign: 'center', marginBottom: 20}}>
                            Mis gastos
                        </p>
                    </div>
                </div>
                <div className='d-flex' style={{width: 459 / proporcional, marginBottom: 20 / proporcional}}>
                    <div style={{width: 459 / proporcional, background: `rgba(39, 39, 39, ${seleccion_card === 'cupones' ? 0.6 : 0.8})`, 
                            padding: seleccion_card === 'cupones' ? 25 / proporcional :  20 / proporcional,
                            borderRadius: 16 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionCard ('cupones')} onMouseLeave={() => setSeleccionCard('')}
                            onClick={() => navigate (`/pasajero/${location.pathname.split('/')[3]}`)}>
                        <div className='d-flex justify-content-center'>
                            <img src={icono_cupones} style={{width: 96 / proporcional, height: 96 / proporcional, marginBottom: 20 / proporcional}}/>
                        </div>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 600, textAlign: 'center', marginBottom: 20}}>
                            Panel
                        </p>
                    </div>
                </div>
            </div>
            <div className='' style={{width: 459 / proporcional, marginBottom: 50 / proporcional}}>
                <p style={{width: 'auto', fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'black', fontWeight: 700, textAlign: 'center', marginBottom: 20 / proporcional}}>
                    MIS CUPONES
                </p>
            </div>
        </div>
    )
}