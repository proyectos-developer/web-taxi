import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import fondo_home_0 from '../../../assets/images/fondo_home_0.png'
import fondo_home_1 from '../../../assets/images/fondo_home_1.png'
import fondo_home_2 from '../../../assets/images/fondo_home_2.png'

export default function SliderPrincipal({proporcional}) {

    return (
        <div id='carouselPrincipal' className='carousel slide' data-bs-ride='carousel' 
            style={{width: '100%', paddingLeft: 240 / proporcional, paddingRight: 240 / proporcional,
                    borderRadius: 64 / proporcional}}>
            <div className='carousel-inner' >
                <div className='carousel-item active position-relative' data-bs-interval='3000'
                        style={{backgroundImage: `url(${fondo_home_0})`, width: '100%', height: 600 / proporcional, borderRadius: 64 / proporcional}}>
                    <div className='position-absolute' style={{width: '100%', height: 600 / proporcional, top: 0, left: 0, background: 'black', opacity: 0.4,
                        borderRadius: 64 / proporcional}}/>
                    <div className='position-absolute' style={{left: 150 / proporcional, top: 165 / proporcional}}>
                        <p style={{fontSize: 64 / proporcional, marginBottom: 0 / proporcional, lineHeight: `${90 / proporcional}px`, color: 'white', 
                                    fontWeight: 700, cursor: 'default'}}>
                            Gana dinero <br/>trasladando usuarios, haciendo tour,<br/>
                            descarga la aplicación 'Taxi 24/7'.
                        </p>
                    </div>
                </div>
                <div className='carousel-item position-relative' data-bs-interval='3000'
                        style={{backgroundImage: `url(${fondo_home_1})`, width: '100%', height: 600 / proporcional, borderRadius: 64 / proporcional}}>
                    <div className='position-absolute' style={{width: '100%', height: 600 / proporcional, top: 0, left: 0, background: 'black', opacity: 0.4,
                        borderRadius: 64 / proporcional}}/>
                    <div className='position-absolute' style={{left: 150 / proporcional, top: 165 / proporcional}}>
                        <p style={{fontSize: 64 / proporcional, marginBottom: 0 / proporcional, lineHeight: `${90 / proporcional}px`, color: 'white', 
                                    fontWeight: 700, cursor: 'default'}}>
                            ¿A dónde quieres ir? <br/>Viaja seguro y cómodo,<br/>
                            descarga la aplicación 'Taxi 24/7'.
                        </p>
                    </div>
                </div>
                <div className='carousel-item position-relative' data-bs-interval='3000'
                        style={{backgroundImage: `url(${fondo_home_2})`, width: '100%', height: 600 / proporcional, borderRadius: 64 / proporcional}}>
                    <div className='position-absolute' style={{width: '100%', height: 600 / proporcional, top: 0, left: 0, background: 'black', opacity: 0.4,
                        borderRadius: 64 / proporcional}}/>
                    <div className='position-absolute' style={{left: 150 / proporcional, top: 165 / proporcional}}>
                        <p style={{fontSize: 64 / proporcional, marginBottom: 0 / proporcional, lineHeight: `${90 / proporcional}px`, color: 'white', 
                                    fontWeight: 700, cursor: 'default'}}>
                            ¿Quieres conocer algún <br/>lugar turistico?,  <br/>descarga la aplicación 'Taxi 24/7'.
                        </p>
                    </div>
                </div>
            </div>
            <button className='carousel-control-prev' type='button' data-bs-target='#carouselPrincipal' data-bs-slide='prev'>
                <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                <span className='visually-hidden'>Previous</span>
            </button>
            <button className='carousel-control-next' type='button' data-bs-target='#carouselPrincipal' data-bs-slide='next'>
                <span className='carousel-control-next-icon' aria-hidden='true'></span>
                <span className='visually-hidden'>Next</span>
            </button>
        </div>
    )
}
