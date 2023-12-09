import React from 'react'

import CardPantallaUno from './pantallauno.jsx'
import CardPantallaDos from './pantallados.jsx'
import CardPantallaTres from './pantallatres.jsx'

export default function SliderPantallas({proporcional}) {
    return (
        <div className='d-flex' style={{width: '100%', paddingLeft: 120 / proporcional, paddingRight: 120 / proporcional}}>
            <CardPantallaUno proporcional={proporcional}/>
            <CardPantallaDos proporcional={proporcional}/>
            <CardPantallaTres proporcional={proporcional}/>
        </div>
    )
}
