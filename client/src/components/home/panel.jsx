import React from 'react'
import { Outlet } from 'react-router-dom'

import BarraMenu from '../barramenu.jsx'
import FooterPrincipal from '../footerprincipal.jsx'

export default function PanelHome({proporcional}) {
  
  return (
    <div style={{width: '100%'}}>
        <BarraMenu proporcional={proporcional}/>
        <Outlet/>
        <FooterPrincipal proporcional={proporcional}/>
    </div>
  )
}