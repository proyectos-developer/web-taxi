import React from 'react'

import fondo_pasajero from '../../assets/images/fondo_pasajero.png'

import google_play from '../../assets/tiendas/google_play.png'
import app_store from '../../assets/tiendas/app_store.png'

import step_descarga from '../../assets/pasos/step_descarga.png'
import step_registro from '../../assets/pasos/step_registro.png'
import step_datos from '../../assets/pasos/step_datos.png'
import step_pedir from '../../assets/pasos/step_pedir.png'
import step_tour from '../../assets/pasos/step_tour.png'
import step_callcenter from '../../assets/pasos/step_callcenter.png'
import step_whatsapp from '../../assets/pasos/step_whatsapp.png'
import step_ruta from '../../assets/pasos/step_ruta.png'
import step_ofertas from '../../assets/pasos/step_ofertas.png'
import step_viaje from '../../assets/pasos/step_viaje.png'
import step_califica from '../../assets/pasos/step_califica.png'

export default function PanelPasajeroTablet({proporcional}) {

    return (
        <div style={{width: '100%'}}>
            <img src={fondo_pasajero} style={{width: '100%'}}/>
            <div style={{width: '100%', height: 'auto', background: 'rgba(231, 229, 225, 0.6', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional,
                paddingLeft: 150 / proporcional, paddingRight: 150 / proporcional}}>
                <p style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 20 / proporcional, color: '#000000', fontWeight: 700,
                  textAlign: 'center'}}>
                  ¿QUIERES VIAJAR SEGURO?
                </p>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: '#2b2b2b', fontWeight: 500,
                  textAlign: 'center'}}>
                  Descarga nuestra app y disfruta de tu viaje seguro y económico. Pide nuestros servicios a través de la app Taxi 24/7. Disponible para iOS y Android.
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
                    1. DA EL PRIMER PASO PARA UN VIAJE SEGURO
                </p>
                <div className='d-flex' style={{width: '100%'}}>
                    <div className='' style={{width: '33%'}}>
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
                    <div className='' style={{width: '33%'}}>
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
                    <div className='' style={{width: '33%'}}>
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
                    2. SELECCIONA TU VIAJE Y CONDUCE SEGURO
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
                            <img src={step_pedir} style={{width: 64 / proporcional, height: 64 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, color: 'black', fontWeight: 500,
                                        textAlign: 'start'}}>Pide taxi <br/>con nuestra app.</p>
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
                            <img src={step_tour} style={{width: 64 / proporcional, height: 64 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, color: 'black', fontWeight: 500,
                                        textAlign: 'start'}}>Pide un <br/>tour.</p>
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
                            <img src={step_callcenter} style={{width: 64 / proporcional, height: 64 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, color: 'black', fontWeight: 500,
                                        textAlign: 'start'}}>Llámanos a<br/> nuestro callcenter.</p>
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
                            <img src={step_whatsapp} style={{width: 64 / proporcional, height: 64 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, color: 'black', fontWeight: 500,
                                        textAlign: 'start'}}>Comunícate a través<br/> del whatsapp.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, paddingTop: 50 / proporcional, 
                         paddingBottom: 50 / proporcional}} className=''>
                <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 20 / proporcional, color: '#000000', fontWeight: 700,
                        textAlign: 'center'}}>
                    3. VIAJA SEGURO Y CÓMODO
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
                            <img src={step_ruta} style={{width: 64 / proporcional, height: 64 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, color: 'black', fontWeight: 500,
                                        textAlign: 'start'}}>Intresa <br/>tu ruta.</p>
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
                            <img src={step_ofertas} style={{width: 64 / proporcional, height: 64 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, color: 'black', fontWeight: 500,
                                        textAlign: 'start'}}>Recibe ofertas <br/>y acepta una.</p>
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
                            <img src={step_viaje} style={{width: 64 / proporcional, height: 64 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, color: 'black', fontWeight: 500,
                                        textAlign: 'start'}}>Viaja <br/> tranquilo y seguro.</p>
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
                                        textAlign: 'start'}}>Califica <br/> al conductor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}