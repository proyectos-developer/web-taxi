import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import BarraMenuCell from '../barramenucell.jsx'
import FooterPrincipalCell from '../footerprincipalcell.jsx'
import { useDispatch } from 'react-redux'
import { set_user_authenticated } from '../../redux/actions/dataactions.js'

export default function PanelHomeCell({proporcional}) {

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
    <div div className='position-relative' style={{width: '100%'}}>
        <BarraMenuCell proporcional={proporcional}/>
        <Outlet/>
        <FooterPrincipalCell proporcional={proporcional}/>
          <a href='https://wa.me/51965419356' target='_blank' rel='noopener noreferrer'>
              <img alt='whatsapp' className='position-fixed' src="https://img.icons8.com/fluent/72/000000/whatsapp.png" 
                  style={{bottom: 36 / proporcional, right: 36 / proporcional, zIndex: 9999}}/>
          </a>
    </div>
  )
}