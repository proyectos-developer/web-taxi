import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import BarraMenuTablet from '../barramenutablet.jsx'
import FooterPrincipalTablet from '../footerprincipaltablet.jsx'
import { useDispatch } from 'react-redux'
import { set_user_authenticated } from '../../redux/actions/dataactions.js'

export default function PanelHomeTablet({proporcional}) {

  const dispatch = useDispatch ()

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
    </div>
  )
}