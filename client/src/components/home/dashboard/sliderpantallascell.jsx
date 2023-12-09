import React from 'react'

import CardPantallaDosCell from './pantalladoscell.jsx'

export default function SliderPantallasCell({proporcional}) {
    return (
        <div className='d-flex justify-content-center' style={{width: '100%', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
            <CardPantallaDosCell proporcional={proporcional}/>
        </div>
    )
}
