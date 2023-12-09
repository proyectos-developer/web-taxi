import React from 'react'

import SliderPrincipal from './sliderprincipal.jsx'
import SliderPantallas from './sliderpantallas.jsx'
import SesionHome from './sesionhome.jsx'

export default function DasboardHome({proporcional}) {

    return (
        <div style={{width: '100%', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
            <SliderPrincipal proporcional={proporcional}/>
            <SliderPantallas proporcional={proporcional}/>
            <SesionHome proporcional={proporcional}/>
        </div>
    )
}