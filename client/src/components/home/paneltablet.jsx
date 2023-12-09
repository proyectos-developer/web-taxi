import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import BarraMenuTablet from '../barramenutablet.jsx'
import FooterPrincipalTablet from '../footerprincipaltablet.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { set_user_authenticated } from '../../redux/actions/dataactions.js'

export default function PanelHomeTablet({proporcional}) {

  const dispatch = useDispatch ()

  const calificaciones = useSelector (({calificaciones}) => calificaciones)
  const carros = useSelector (({carros}) => carros)
  const viajes = useSelector (({viajes}) => viajes)
  const begin = useSelector (({begin}) => begin)
  const viajero = useSelector (({viajero}) => viajero)
  const conductor = useSelector (({conductor}) => conductor)

  useEffect(() => {
    const session_id = window.localStorage.getItem ('session_id')
    if (session_id){
      dispatch(set_user_authenticated(true))
    }else{
      dispatch(set_user_authenticated(false))
    }
  }, [])
  
  return (
    <div className='position-relative' style={{width: '100%'}}>
        <BarraMenuTablet proporcional={proporcional}/>
        <Outlet/>
        <FooterPrincipalTablet proporcional={proporcional}/>
          <a href='https://wa.me/51965419356' target='_blank' rel='noopener noreferrer'>
              <img alt='whatsapp' className='position-fixed' src="https://img.icons8.com/fluent/72/000000/whatsapp.png" 
                  style={{bottom: 36 / proporcional, right: 36 / proporcional, zIndex: 9999}}/>
          </a>
        {
          begin.loading || conductor.loading || viajero.loading || viajes.loading || calificaciones.loading || carros.loading ? (
            <div className='position-fixed shadow-lg rounded top-0 start-0' 
              style={{padding: 50, background: 'white', zIndex: 99999, opacity: 0.6, width: '100%', height: '100vh'}}>
                <div className='position-realtive'>
                  <div className="spinner-border text-dark position-absolute top-50 start-50 translate-middle" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
            </div>
          ) : null
        }
    </div>
  )
}