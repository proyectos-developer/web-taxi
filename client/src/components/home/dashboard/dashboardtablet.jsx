import React from 'react'

import SliderPrincipalTablet from './sliderprincipaltablet.jsx'
import SliderPantallasTablet from './sliderpantallastablet.jsx'
import SesionHomeTablet from './sesionhometablet.jsx'

export default function DasboardHome({proporcional}) {

    return (
        <div style={{width: '100%', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
            <SliderPrincipalTablet proporcional={proporcional}/>
            <SliderPantallasTablet proporcional={proporcional}/>
            <SesionHomeTablet proporcional={proporcional}/>
        </div>
    )
}