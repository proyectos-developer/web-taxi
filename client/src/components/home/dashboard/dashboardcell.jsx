import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import fondo_home_cell from '../../../assets/images/fondo_home_cell.png'
import icono_taxi from '../../../assets/iconos/icono_taxi.png'
import icono_tours from '../../../assets/iconos/icono_tours.png'
import icono_pasajeros from '../../../assets/iconos/icono_pasajeros.png'
import pantalla_0 from '../../../assets/pantallas/pantalla_0.png'
import pantalla_1 from '../../../assets/pantallas/pantalla_1.png'
import pantalla_2 from '../../../assets/pantallas/pantalla_2.png'
import pantalla_3 from '../../../assets/pantallas/pantalla_3.png'
import pantalla_4 from '../../../assets/pantallas/pantalla_4.png'
import pantalla_5 from '../../../assets/pantallas/pantalla_5.png'
import pantalla_6 from '../../../assets/pantallas/pantalla_6.png'
import pantalla_7 from '../../../assets/pantallas/pantalla_7.png'

import google_play from '../../../assets/tiendas/google_play.png'
import app_store from '../../../assets/tiendas/app_store.png'

import iniciar_sesion from '../../../assets/images/iniciar_sesion.png'
import registro from '../../../assets/images/registro.png'

import icono_derecha from '../../../assets/iconos/icono_derecha.png'

export default function DasboardHomeCell({proporcional}) {

    const navigate = useNavigate()

    const [opcion_menu, setOpcionMenu] = useState('taxi')
    const [sesion_opcion, setSesionOpcion] = useState ('')

    return (
        <div style={{width: '100%'}}>
            <img src={fondo_home_cell} style={{width: '100%'}}/>
            <div className='' style={{width: '100%', background: 'black', padding: 50 / proporcional}}>
                <div className='shadow-lg d-flex rounded' style={{width: '100%', paddingTop: 20 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, background: '#dedede'}}>
                    <div style={{width: '33%', textAlign: 'center', cursor: 'pointer'}} 
                            onClick={() => setOpcionMenu('taxi')}>
                        <img src={icono_taxi} style={{opacity: 0.8, width: 48 / proporcional, height: 48 / proporcional, marginBottom: 5 / proporcional}}/>
                        <p style={{fontSize: 16 / proporcional, marginBottom: 5 / proporcional, lineHeight: `${22 / proporcional}px`, color: '#212121', fontWeight: 500}}>
                            Gana <br/>haciendo taxi
                        </p>
                        {
                            opcion_menu === 'taxi' ? (
                                <div className='rounded-pill' style={{width: '75%', height: 5, background: 'black', marginLeft: '12.5%'}}/>
                            ) : null
                        }
                    </div>
                    <div style={{width: '33%', textAlign: 'center', cursor: 'pointer'}} 
                            onClick={() => setOpcionMenu('viajero')}>
                        <img src={icono_pasajeros} style={{opacity: 0.8, width: 48 / proporcional, height: 48 / proporcional, marginBottom: 5 / proporcional}}/>
                        <p style={{fontSize: 16 / proporcional, marginBottom: 5 / proporcional, lineHeight: `${22 / proporcional}px`, color: '#212121', fontWeight: 500}}>
                            Viaja <br/> seguro
                        </p>
                        {
                            opcion_menu === 'viajero' ? (
                                <div className='rounded-pill' style={{width: '75%', height: 5, background: 'black', marginLeft: '12.5%'}}/>
                            ) : null
                        }
                    </div>
                    <div style={{width: '33%', textAlign: 'center', cursor: 'pointer'}} 
                            onClick={() => setOpcionMenu('tour')}>
                        <img src={icono_tours} style={{opacity: 0.8, width: 48 / proporcional, height: 48 / proporcional, marginBottom: 5 / proporcional}}/>
                        <p style={{fontSize: 16 / proporcional, marginBottom: 5 / proporcional, lineHeight: `${22 / proporcional}px`, color: '#212121', fontWeight: 500}}>
                            Haz <br/> turismo
                        </p>
                        {
                            opcion_menu === 'tour' ? (
                                <div className='rounded-pill' style={{width: '75%', height: 5, background: 'black', marginLeft: '12.5%'}}/>
                            ) : null
                        }
                    </div>
                </div>
                {
                    opcion_menu === 'taxi' ? (
                        <div className='rounded-bottom' style={{width: '100%', padding: 30 / proporcional, background: 'white'}}>
                            <p style={{fontSize: 30 / proporcional, marginBottom: 20 / proporcional, lineHeight: `${40 / proporcional}px`, color: '#000000', fontWeight: 700}}>
                                ¿Quieres generar ganancias a diario?
                            </p>
                            <p style={{fontSize: 18 / proporcional, marginBottom: 20 / proporcional, lineHeight: `${22 / proporcional}px`, color: '#212121', fontWeight: 500}}>
                                Regístrate  en la app de TAXI 24/7 h y se parte de nuestra comunidad.
                            </p>
                            <button className='btn rounded-pill' style={{width: 200 / proporcional, height: 50 / proporcional, background: '#212121',
                                    color: 'white', fontSize: 20 / proporcional, fontWeight: 600, marginBottom: 20 / proporcional}}>Regístrate aquí</button>
                            <div className='d-flex justify-content-center' style={{width: '100%', marginBottom: 10 / proporcional}}>
                                <img src={google_play}/>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%'}}>
                                <img src={app_store}/>
                            </div>
                        </div>
                    ) : opcion_menu === 'viajero' ? (
                        <div className='rounded-bottom' style={{width: '100%', padding: 30 / proporcional, background: 'white'}}>
                            <p style={{fontSize: 30 / proporcional, marginBottom: 20 / proporcional, lineHeight: `${40 / proporcional}px`, color: '#000000', fontWeight: 700}}>
                                ¿A dónde quieres ir?
                            </p>
                            <p style={{fontSize: 18 / proporcional, marginBottom: 20 / proporcional, lineHeight: `${22 / proporcional}px`, color: '#212121', fontWeight: 500}}>
                                ¡Viaja seguro a cualquier punto que quieras ir!
                            </p>
                            <button className='btn rounded-pill' style={{width: 200 / proporcional, height: 50 / proporcional, background: '#212121',
                                    color: 'white', fontSize: 20 / proporcional, fontWeight: 600, marginBottom: 20 / proporcional}}>Regístrate aquí</button>
                            <div className='d-flex justify-content-center' style={{width: '100%', marginBottom: 10 / proporcional}}>
                                <img src={google_play}/>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%'}}>
                                <img src={app_store}/>
                            </div>
                        </div>
                    ) : opcion_menu === 'tour' ? (
                        <div className='rounded-bottom' style={{width: '100%', padding: 30 / proporcional, background: 'white'}}>
                            <p style={{fontSize: 30 / proporcional, marginBottom: 20 / proporcional, lineHeight: `${40 / proporcional}px`, color: '#000000', fontWeight: 700}}>
                                ¿Quieres conocer algún lugar turístico?
                            </p>
                            <p style={{fontSize: 18 / proporcional, marginBottom: 20 / proporcional, lineHeight: `${22 / proporcional}px`, color: '#212121', fontWeight: 500}}>
                                ¡Descarga la aplicación y pide tu tour!
                            </p>
                            <div className='d-flex justify-content-center' style={{width: '100%', marginBottom: 10 / proporcional}}>
                                <img src={google_play}/>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%'}}>
                                <img src={app_store}/>
                            </div>
                        </div>
                    ) : null
                }
            </div>
            <div className='d-flex' style={{width: '100%', paddingLeft: 50 / proporcional, paddingRight: 50 / proporcional}}>
                <div id='carouselPantalla0' className='carousel slide' data-bs-ride="carousel" style={{width: '100%', padding: 10 / proporcional}}>
                    <div className='carousel-inner'>
                        <div className='carousel-item active' style={{width: '100%'}} data-bs-interval="3000">
                            <img src={pantalla_0} style={{width: '100%'}}/>
                        </div>
                        <div className='carousel-item' style={{width: '100%'}} data-bs-interval="3000">
                            <img src={pantalla_1} style={{width: '100%'}}/>
                        </div>
                        <div className='carousel-item' style={{width: '100%'}} data-bs-interval="3000">
                            <img src={pantalla_2} style={{width: '100%'}}/>
                        </div>
                        <div className='carousel-item' style={{width: '100%'}} data-bs-interval="3000">
                            <img src={pantalla_3} style={{width: '100%'}}/>
                        </div>
                        <div className='carousel-item' style={{width: '100%'}} data-bs-interval="3000">
                            <img src={pantalla_4} style={{width: '100%'}}/>
                        </div>
                        <div className='carousel-item' style={{width: '100%'}} data-bs-interval="3000">
                            <img src={pantalla_5} style={{width: '100%'}}/>
                        </div>
                        <div className='carousel-item' style={{width: '100%'}} data-bs-interval="3000">
                            <img src={pantalla_6} style={{width: '100%'}}/>
                        </div>
                        <div className='carousel-item' style={{width: '100%'}} data-bs-interval="3000">
                            <img src={pantalla_7} style={{width: '100%'}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='' style={{width: '100%', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, 
                    background: 'rgba(231, 229, 225, 0.3)', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
                <div className='d-flex justify-content-center' style={{width: '100%', marginBottom: 20 / proporcional}}>
                    <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0, color: 'black', 
                        fontWeight: 700, textAlign: 'center'}}>¿YA TIENES UNA CUENTA EN TAXI 24/7?</p>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%'}}>
                    <div style={{textAlign: 'center'}}>
                        <img className='rounded-circle shadow' src={registro} style={{width: 250 / proporcional, marginBottom: 20 / proporcional}}/>
                        <div style={{width: '100%', cursor: 'pointer', height: 52 / proporcional}} onClick={() => navigate ('registro')}
                            onMouseOver={() => setSesionOpcion('registro')} onMouseLeave={() => setSesionOpcion('')}>
                            <div className='d-flex justify-content-center' style={{width: '100%', marginBottom: 10 / proporcional}}>
                                <div className='d-flex justify-content-between' style={{width: 250 / proporcional, height: 40 / proporcional}}>
                                    <p style={{fontSize: sesion_opcion === 'registro' ? 22 / proporcional : 20 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0, color: 'black', 
                                        fontWeight: sesion_opcion === 'registro' ? 700 : 600, textAlign: 'center'}}>Regístrate ahora</p>
                                    <img src={icono_derecha} style={{width: sesion_opcion === 'registro' ? 20 / proporcional : 18 / proporcional, 
                                                height: sesion_opcion === 'registro' ? 20 / proporcional : 18 / proporcional, 
                                                margin: sesion_opcion === 'registro' ? 10 / proporcional : 11 / proporcional}}/>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%'}}>
                                <div className='rounded-pill' style={{width: 250 / proporcional, height: sesion_opcion === 'sesion' ? 3 / proporcional : 2 / proporcional, background: '#212121'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, 
                    background: 'rgba(231, 229, 225, 0.3)', paddingBottom: 50 / proporcional}}>
                <div style={{textAlign: 'center'}}>
                    <img className='rounded-circle shadow' src={iniciar_sesion} style={{width: 250 / proporcional, marginBottom: 20 / proporcional}}/>
                    <div style={{width: '100%', cursor: 'pointer', height: 52 / proporcional}} onClick={() => navigate ('sesion')}
                        onMouseOver={() => setSesionOpcion('sesion')} onMouseLeave={() => setSesionOpcion('')}>
                        <div className='d-flex justify-content-center' style={{width: '100%', marginBottom: 10 / proporcional}}>
                            <div className='d-flex justify-content-between' style={{width: 250 / proporcional, height: 40 / proporcional}}>
                                <p style={{fontSize: sesion_opcion === 'sesion' ? 22 / proporcional : 20 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0, color: 'black', 
                                    fontWeight: sesion_opcion === 'sesion' ? 700 : 600,    textAlign: 'center'}}>Inicia sesión</p>
                                <img src={icono_derecha} style={{width: sesion_opcion === 'sesion' ? 20 / proporcional : 18 / proporcional, 
                                        height: sesion_opcion === 'sesion' ? 20 / proporcional : 18 / proporcional, 
                                        margin: sesion_opcion === 'sesion' ? 10 / proporcional : 11 / proporcional}}/>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '100%'}}>
                            <div className='rounded-pill' style={{width: 250 / proporcional, height: sesion_opcion === 'sesion' ? 3 / proporcional : 2 / proporcional, background: '#212121'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}