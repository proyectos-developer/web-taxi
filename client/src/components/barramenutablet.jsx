import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function BarraMenuTablet({proporcional}) {

    const navigate = useNavigate()
    const location = useLocation()

    const [color, setColor] = useState (false)
    const [menu, setMenu] = useState ('')

    useEffect(() => {
      setColor (location.pathname === '/sesion' || location.pathname === '/registro' || location.pathname === '/recuperar-contrase%C3%B1a'
                || location.pathname === '/nueva-contrase%C3%B1a' ? true : false)
    }, [location.pathname])

    return (
      <div style={{width: '100%', height: 75 / proporcional, background: color ? 'black' : 'white', paddingLeft: 120 / proporcional, 
                   paddingRight: 120 / proporcional, paddingTop: 12.5 / proporcional, paddingBottom: 12.5 / proporcional}}>
          <div className='d-flex justify-content-between' style={{width: '100%', height: 50 / proporcional,
              cursor: 'pointer'}}>
              <p style={{fontSize: 30 / proporcional, lineHeight: `${50 / proporcional}px`, color: color ? 'white' :'black', marginBottom: 0,
                fontWeight: 700}} onClick={() => navigate ('/')}>
                TAXI 24/7
              </p>  
              <div className='d-flex justify-content-end'>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, color: color ? 'white' : 'black', marginBottom: 0,
                  fontWeight: menu === 'sesion' ? 700 : 500, marginRight: 20 / proporcional, cursor: 'pointer'}} onClick={() => navigate('pasajero')}
                  onMouseOver={() => setMenu('sesion')} onMouseLeave={() => setMenu('')}>
                  Pasajero
                </p>  
                <p className='rounded-pill' style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, color: color ? 'black' : 'white',
                  marginBottom: 0,  fontWeight: menu === 'registro' ? 700 : 500, background: color ? 'white' : 'black', paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional,
                  marginLeft: 20 / proporcional, cursor: 'pointer'}} onClick={() => navigate('conductor')}
                  onMouseOver={() => setMenu('registro')} onMouseLeave={() => setMenu('')}>
                  Conductor
                </p>  
              </div>
          </div>
      </div>
    )
}
