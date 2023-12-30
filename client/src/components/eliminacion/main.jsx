import React from 'react'

import BarraMenu from '../barramenu'
import FooterPrincipal from '../footerprincipal'
import { Outlet } from 'react-router-dom'

export default function EliminacionCuenta({proporcional}) {

    return (
        <div className='position-relative' style={{width: '100%'}}>
            <Outlet/>
        </div>
    )

}
