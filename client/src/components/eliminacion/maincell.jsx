import React from 'react'

import BarraMenuCell from '../barramenucell'
import FooterPrincipalCell from '../footerprincipalcell'

import { Outlet } from 'react-router-dom'

export default function EliminacionCuentaCell({proporcional}) {

    return (
        <div className='position-relative' style={{width: '100%'}}>
            <BarraMenuCell proporcional={proporcional}/>
            <Outlet/>
            <FooterPrincipalCell proporcional={proporcional}/>
        </div>
    )

}