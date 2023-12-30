import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {begindata} from '../../redux/slice/begindata'
import { beginConstants } from '../../uri/begin-constants'

export default function DashboardEliminacionTablet({proporcional}) {

    const dispatch = useDispatch ()
    const navigate = useNavigate()
    
    const [correo, setCorreo] = useState('')
    
    const [ecorreo, setECorreo] = useState('')

    const [message, setMessage] = useState('')
    const [boton_eliminar, setBotonEliminar] = useState (false)

    const {delete_cuenta} = useSelector (({begin}) => begin)

    useEffect (() => {
        if (delete_cuenta && delete_cuenta.success === true && delete_cuenta.message){
            navigate('/app/eliminacion-cuenta/confirmacion')
        }else if (delete_cuenta && delete_cuenta.success === true && delete_cuenta.error){
            setMessage(delete_cuenta.error)
        }
    }, [delete_cuenta])

    const eliminar_cuenta = () => {
        if (correo === ''){
            setECorreo(correo === '' ? true : false)
        } else{
            const data_eliminacion = {
                correo: correo
            }
            dispatch(begindata(beginConstants(data_eliminacion, false, 0).delete_cuenta))
        }
    }

    return (
        <div className='position-relative' style={{width: '100%', height: '100vh'}}>
              <div className='shadow-lg rounded top-50 start-50 position-absolute translate-middle' 
                   style={{width: 600 / proporcional, height: 'auto', background: 'white', padding: 20 / proporcional}}>
                    <p style={{fontSize: 30 / proporcional, textAlign: 'center', lineHeight: `${34 / proporcional}px`, marginBottom: 25 / proporcional, color: '#212121', 
                               fontWeight: 600}}>
                      TAXI 24/7 hrs
                    </p>
                    <p style={{fontSize: 18 / proporcional, textAlign: 'left', lineHeight: `${20 / proporcional}px`, marginBottom: 25 / proporcional, color: '#212121', 
                               fontWeight: 600}}>
                      Ingrese su correo con que se regitro en la app Taxi 24/7.
                    </p>
                    <input type='email'
                      className='form-control'
                      value={correo}
                      onChange={(event) => setCorreo(event.target.value)}
                      style={{width: 540 / proporcional, height: 50 / proporcional, background: 'rgb(158,158,158, 0.6)', marginBottom: 25 / proporcional,
                            fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, border: ecorreo ? '1px solid red' : null}}
                      placeholder='Ingrese su correo'
                    />
                    {
                        message !== '' ? (
                            <p className='default' style={{fontSize: 14 / proporcional, lineHeight: `${16 / proporcional}px`, fontFamily: 'Mukta, sans-serif',
                                color: 'red', fontWeight: 600, textAlign: 'start', maginBottom: 25 / proporcional}}>
                                Error: {message}
                            </p>
                        ) : null
                    }
                    <div className='d-flex justify-content-center' style={{width: 540 / proporcional}}>
                      <button className='btn' 
                          onMouseOver={() => setBotonEliminar(true)} onMouseLeave={() => setBotonEliminar(false)}
                          onClick={() => eliminar_cuenta()}
                          style={{width: boton_eliminar ? 530 / proporcional : 540 / proporcional, height: 50 / proporcional, background: '#212121', color: 'white', 
                                  fontWeight: boton_eliminar ? 500 : 700, fontSize: boton_eliminar ? 16 / proporcional : 18 / proporcional}}>
                        ELIMINAR CUENTA</button>
                    </div>
              </div>
        </div>
    )
}

