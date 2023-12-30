import React from 'react'

import BarraMenuTablet from '../barramenutablet'
import FooterPrincipalTablet from '../footerprincipaltablet'
import { Outlet } from 'react-router-dom'

export default function EliminacionCuenta({proporcional}) {

    return (
        <div className='position-relative' style={{width: '100%'}}>
            <BarraMenuTablet proporcional={proporcional}/>
            <Outlet/>
            <FooterPrincipalTablet proporcional={proporcional}/>
        </div>
    )

}