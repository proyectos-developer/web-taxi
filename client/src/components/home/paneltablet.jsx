import React from 'react'
import { Outlet } from 'react-router-dom'

import BarraMenuTablet from '../barramenutablet.jsx'
import FooterPrincipalTablet from '../footerprincipaltablet.jsx'

export default function PanelHomeTablet({proporcional}) {
  
  return (
    <div style={{width: '100%'}}>
        <BarraMenuTablet proporcional={proporcional}/>
        <Outlet/>
        <FooterPrincipalTablet proporcional={proporcional}/>
    </div>
  )
}