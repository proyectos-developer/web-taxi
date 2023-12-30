import React, { useState } from 'react'

import imagen_eliminacion from '../../assets/images/eliminacion_cuenta_560.png'
import { useNavigate } from 'react-router-dom'

export default function ConfirmacionEliminacionCell({proporcional}) {

    const [boton_eliminar, setBotonEliminar] = useState(false)

    const navigate = useNavigate()

    return (
        <div className='position-relative' style={{width: '100%', height: '100vh'}}>
            <div className='shadow-lg rounded top-50 start-50 position-absolute translate-middle' 
                style={{width: 459 / proporcional, height: 'auto', background: 'white', padding: 20 / proporcional}}>
                <img src={imagen_eliminacion} style={{width: 419 / proporcional, height: 419 / proporcional, marginBottom: 20 / proporcional}}/>
                <p className='default' style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, fontFamily: 'Mukta, sans-serif',
                    color: 'black', fontWeight: 600, textAlign: 'center', maginBottom: 25 / proporcional}}>
                    ¡Lamentamos que haya eliminado su cuenta, esperamos que vuelva pronto!<br/>
                    Saludos su equipo de Taxi 24/7
                </p>
                <div className='d-flex justify-content-center' style={{width: 419 / proporcional}}>
                    <button className='btn' 
                        onMouseOver={() => setBotonEliminar(true)} onMouseLeave={() => setBotonEliminar(false)}
                        onClick={() => navigate('/')}
                        style={{width: boton_eliminar ? 409 / proporcional : 419 / proporcional, height: 50 / proporcional, background: '#212121', color: 'white', 
                                fontWeight: boton_eliminar ? 500 : 700, fontSize: boton_eliminar ? 16 / proporcional : 18 / proporcional}}>
                    FINALIZAR</button>
                </div>
            </div>
        </div>
    )
}