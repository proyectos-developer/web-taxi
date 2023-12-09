import React from 'react'

import SliderPrincipalCell from './sliderprincipalcell.jsx'
import SliderPantallasCell from './sliderpantallascell.jsx'
import SesionHomeCell from './sesionhomecell.jsx'

export default function DasboardHomeCell({proporcional}) {


    return (
        <div style={{width: '100%', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
            <SliderPrincipalCell proporcional={proporcional}/>
            <SliderPantallasCell proporcional={proporcional}/>
            <SesionHomeCell proporcional={proporcional}/>
        </div>
    )
}