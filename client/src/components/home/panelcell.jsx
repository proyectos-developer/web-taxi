import React from 'react'
import { Outlet } from 'react-router-dom'

import BarraMenuCell from '../barramenucell.jsx'
import FooterPrincipalCell from '../footerprincipalcell.jsx'

export default function PanelHomeCell({proporcional}) {
  
  return (
    <div style={{width: '100%'}}>
        <BarraMenuCell proporcional={proporcional}/>
        <Outlet/>
        <FooterPrincipalCell proporcional={proporcional}/>
    </div>
  )
}