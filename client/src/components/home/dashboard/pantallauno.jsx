import React from 'react'

import pantalla_0 from '../../../assets/pantallas/pantalla_0.png'
import pantalla_1 from '../../../assets/pantallas/pantalla_1.png'
import pantalla_2 from '../../../assets/pantallas/pantalla_2.png'
import pantalla_3 from '../../../assets/pantallas/pantalla_3.png'
import pantalla_4 from '../../../assets/pantallas/pantalla_4.png'
import pantalla_5 from '../../../assets/pantallas/pantalla_5.png'
import pantalla_6 from '../../../assets/pantallas/pantalla_6.png'
import pantalla_7 from '../../../assets/pantallas/pantalla_7.png'

export default function CardPantallaUno({proporcional}) {
    return (
        <div id='carouselPantalla0' className='carousel slide' data-bs-ride="carousel" style={{width: '33%', padding: 100 / proporcional}}>
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
    )
}
