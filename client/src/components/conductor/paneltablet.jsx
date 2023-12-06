import React from 'react'

import fondo_conductor from '../../assets/images/fondo_conductor.png'

import google_play from '../../assets/tiendas/google_play.png'
import app_store from '../../assets/tiendas/app_store.png'

import step_descarga from '../../assets/pasos/step_descarga.png'
import step_registro from '../../assets/pasos/step_registro.png'
import step_datos from '../../assets/pasos/step_datos.png'
import step_pedidos from '../../assets/pasos/step_pedidos.png'
import step_mapa from '../../assets/pasos/step_mapa.png'
import step_conduce from '../../assets/pasos/step_conduce.png'
import step_califica from '../../assets/pasos/step_califica.png'

export default function PanelConductorTablet({proporcional}) {

    return (
        <div style={{width: '100%'}}>
            <img src={fondo_conductor} style={{width: '100%'}}/>
            <div style={{width: '100%', height: 'auto', background: 'rgba(231, 229, 225, 0.6', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional,
                paddingLeft: 150 / proporcional, paddingRight: 150 / proporcional}}>
                <p style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 20 / proporcional, color: '#000000', fontWeight: 700,
                    textAlign: 'center'}}>
                  ¿QUIERES GENERAR GANANCIAS A DIARIO?
                </p>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: '#2b2b2b', fontWeight: 500,
                    textAlign: 'center'}}>
                  Genera ganancias a cualquier hora del día. Consigue buenas calificaciones por parte de los usuarios para obtener bonificaciones. Disponible para iOS y Android.
                </p>
                <div className='d-flex justify-content-between'>
                    <img src={google_play} style={{width: 284 / proporcional, height: 84 / proporcional}}/>
                    <img src={app_store}  style={{width: 256 / proporcional, height: 84 / proporcional}}/>
                </div>
            </div>
            <div style={{width: '100%', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, paddingTop: 50 / proporcional, 
                         paddingBottom: 50 / proporcional}} className=''>
                <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 20 / proporcional, color: '#000000', fontWeight: 700,
                        textAlign: 'center'}}>
                    1. DA EL PRIMER PASO PARA SER UN TAXISTA EN TAXI 24/7
                </p>
                <div className='d-flex' style={{width: '100%', marginBottom: 20 / proporcional}}>
                    <div className='' style={{width: '50%'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%'}}>
                            <div className='rounded-circle' style={{width: 128 / proporcional, height: 128 / proporcional, background: '#212121', marginBottom: 20 / proporcional,
                                cursor: 'default'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${128 / proporcional}px`, marginBottom: 0, color: 'white', fontWeight: 700,
                                            textAlign: 'center'}}>1</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <img src={step_descarga} style={{width: 64 / proporcional, height: 64 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, color: 'black', fontWeight: 500,
                                        textAlign: 'start'}}>Descarga la app para <br/>iOS y Android.</p>
                        </div>
                    </div>
                    <div className='' style={{width: '50%'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%'}}>
                            <div className='rounded-circle' style={{width: 128 / proporcional, height: 128 / proporcional, background: '#212121', marginBottom: 20 / proporcional,
                                cursor: 'default'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${128 / proporcional}px`, marginBottom: 0, color: 'white', fontWeight: 700,
                                            textAlign: 'center'}}>2</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <img src={step_registro} style={{width: 64 / proporcional, height: 64 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, color: 'black', fontWeight: 500,
                                        textAlign: 'start'}}>Regístrate <br/>para pedir taxi.</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%'}}>
                    <div className='' style={{width: '100%'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%'}}>
                            <div className='rounded-circle' style={{width: 128 / proporcional, height: 128 / proporcional, background: '#212121', marginBottom: 20 / proporcional,
                                cursor: 'default'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${128 / proporcional}px`, marginBottom: 0, color: 'white', fontWeight: 700,
                                            textAlign: 'center'}}>3</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <img src={step_datos} style={{width: 64 / proporcional, height: 64 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, color: 'black', fontWeight: 500,
                                        textAlign: 'start'}}>Completa<br/> tus datos.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, paddingTop: 50 / proporcional, 
                         paddingBottom: 50 / proporcional, background: 'rgba(231, 229, 225, 0.6)'}} className=''>
                <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 20 / proporcional, color: '#000000', fontWeight: 700,
                        textAlign: 'center'}}>
                    2. SELECCIONA, OFERTA, CONDUCE Y CALIFICA
                </p>
                <div className='d-flex' style={{width: '100%', marginBottom: 20 / proporcional}}>
                    <div className='' style={{width: '50%'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%'}}>
                            <div className='rounded-circle' style={{width: 128 / proporcional, height: 128 / proporcional, background: '#212121', marginBottom: 20 / proporcional,
                                cursor: 'default'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${128 / proporcional}px`, marginBottom: 0, color: 'white', fontWeight: 700,
                                            textAlign: 'center'}}>1</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <img src={step_pedidos} style={{width: 64 / proporcional, height: 64 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, color: 'black', fontWeight: 500,
                                        textAlign: 'start'}}>Mira la lista <br/>de pedidos de taxi.</p>
                        </div>
                    </div>
                    <div className='' style={{width: '50%'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%'}}>
                            <div className='rounded-circle' style={{width: 128 / proporcional, height: 128 / proporcional, background: '#212121', marginBottom: 20 / proporcional,
                                cursor: 'default'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${128 / proporcional}px`, marginBottom: 0, color: 'white', fontWeight: 700,
                                            textAlign: 'center'}}>2</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <img src={step_mapa} style={{width: 64 / proporcional, height: 64 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, color: 'black', fontWeight: 500,
                                        textAlign: 'start'}}>Mira la ruta<br/>y da una oferta.</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%'}}>
                    <div className='' style={{width: '50%'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%'}}>
                            <div className='rounded-circle' style={{width: 128 / proporcional, height: 128 / proporcional, background: '#212121', marginBottom: 20 / proporcional,
                                cursor: 'default'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${128 / proporcional}px`, marginBottom: 0, color: 'white', fontWeight: 700,
                                            textAlign: 'center'}}>3</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <img src={step_conduce} style={{width: 64 / proporcional, height: 64 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, color: 'black', fontWeight: 500,
                                        textAlign: 'start'}}>Traslada al pasajero <br/> de manera segura.</p>
                        </div>
                    </div>
                    <div className='' style={{width: '50%'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%'}}>
                            <div className='rounded-circle' style={{width: 128 / proporcional, height: 128 / proporcional, background: '#212121', marginBottom: 20 / proporcional,
                                cursor: 'default'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${128 / proporcional}px`, marginBottom: 0, color: 'white', fontWeight: 700,
                                            textAlign: 'center'}}>4</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <img src={step_califica} style={{width: 64 / proporcional, height: 64 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, color: 'black', fontWeight: 500,
                                        textAlign: 'start'}}>Comunícate al<br/> pasajero.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}