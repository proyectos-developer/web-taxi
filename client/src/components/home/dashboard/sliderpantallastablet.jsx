import React from 'react'

import CardPantallaUnoTablet from './pantallaunotablet.jsx'
import CardPantallaDosTablet from './pantalladostablet.jsx'
import CardPantallaTresTablet from './pantallatrestablet.jsx'

export default function SliderPantallasTablet({proporcional}) {
    return (
        <div className='d-flex' style={{width: '100%', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
            <CardPantallaUnoTablet proporcional={proporcional}/>
            <CardPantallaDosTablet proporcional={proporcional}/>
            <CardPantallaTresTablet proporcional={proporcional}/>
        </div>
    )
}
