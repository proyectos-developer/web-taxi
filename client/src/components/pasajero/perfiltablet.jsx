import React, { useEffect, useState } from 'react'

import icono_panel from '../../assets/iconos/icono_panel_96.png'
import icono_registro_viajes from '../../assets/iconos/icono_registro_viajes_96.png'
import icono_gastos from '../../assets/iconos/icono_gastos_96.png'
import icono_cupones from '../../assets/iconos/icono_cupones_96.png'
import { useDispatch, useSelector } from 'react-redux'
import {viajerodata} from '../../redux/slice/viajerodata'
import { viajeroConstants } from '../../uri/viajero-constants'
import { useLocation, useNavigate } from 'react-router-dom'

export default function PerfilPasajeroTablet({proporcional}) {

    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    const [seleccion_card, setSeleccionCard] = useState ('')
    const [boton_editar, setBotonEditar] = useState (false)
    const [boton_cancelar, setBotonCancelar] = useState (false)
    const [boton_actualizar, setBotonActualizar] = useState (false)
    
    const [nombres, setNombres] = useState ('')
    const [tipo_documento, setTipoDocumento] = useState ('')
    const [nro_documento, setNroDocumento] = useState ('')
    const [correo, setCorreo] = useState ('')
    const [fecha_nacimiento, setFechaNacimiento] = useState ('')
    const [nro_telefono, setNroTelefono] = useState ('')
    const [direccion_principal, setDireccionPrincipal] = useState ('')
    const [foto, setFoto] = useState ('')
    const [latitud, setLatitud] = useState (0)
    const [longitud, setLongitud] = useState (0)
    
    const [enombres, setENombres] = useState (false)
    const [etipo_documento, setETipoDocumento] = useState (false)
    const [enro_documento, setENroDocumento] = useState (false)
    const [ecorreo, setECorreo] = useState (false)
    const [efecha_nacimiento, setEFechaNacimiento] = useState (false)
    const [enro_telefono, setENroTelefono] = useState (false)

    const [editar, setEditar] = useState (false)

    const {get_viajero, update_viajero} = useSelector (({viajero}) => viajero)

    useEffect (() => {
        dispatch (viajerodata(viajeroConstants({}, false, location.pathname.split('/')[3]).get_viajero))
    }, [])

    useEffect (() => {
        if (update_viajero && update_viajero.success === true && update_viajero.viajero){
            setEditar(false)
        }
    }, [update_viajero])

    useEffect(() => {
        if (get_viajero && get_viajero.success === true && get_viajero.viajero){
            setNombres(get_viajero.viajero.nombres)
            setTipoDocumento(get_viajero.viajero.tipo_documento)
            setNroDocumento(get_viajero.viajero.nro_documento)
            setCorreo(get_viajero.viajero.correo)
            setFechaNacimiento(get_viajero.viajero.fecha_nacimiento)
            setNroTelefono(get_viajero.viajero.nro_telefono)
            setDireccionPrincipal(get_viajero.viajero.direccion_principal)
            setFoto(get_viajero.viajero.foto)
            setLatitud(get_viajero.viajero.latitud)
            setLongitud(get_viajero.viajero.longitud)
        }
    }, [get_viajero])

    const actualizar_datos = () => {
        if (nombres === '' || tipo_documento === '' || nro_documento === '' || correo === '' || fecha_nacimiento === '' || nro_telefono === ''){
            setENombres(nombres === '' ? true : false)
            setETipoDocumento(tipo_documento === '' ? true : false)
            setENroDocumento(nro_documento === '' ? true : false)
            setECorreo(correo === '' ? true : false)
            setEFechaNacimiento(fecha_nacimiento === '' ? true : false)
            setENroTelefono(nro_telefono === '' ? true : false)
        }else{
            setENombres(false)
            setETipoDocumento(false)
            setENroDocumento(false)
            setECorreo(false)
            setEFechaNacimiento(false)
            setENroTelefono(false)

            const update_data = {
                nombres: nombres,
                fecha_nacimiento: fecha_nacimiento,
                tipo_documento: tipo_documento,
                nro_documento: nro_documento,
                nro_telefono: nro_telefono,
                direccion_principal: direccion_principal,
                foto: foto,
                longitud: longitud,
                latitud: latitud
            }
            dispatch (viajerodata(viajeroConstants(update_data, false, location.pathname.split('/')[3]).update_viajero))
        }
    }
    
    return (
        <div className='' style={{width: '100%', paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional, 
                paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
            <div className='' style={{width: 871 / proporcional, marginBottom: 50 / proporcional}}>
                <div className='d-flex' style={{width: 871 / proporcional, marginBottom: 20 / proporcional}}>
                    <div style={{width: 415.5 / proporcional, marginRight: 20 / proporcional, background: `rgba(39, 39, 39, ${seleccion_card === 'perfil' ? 0.6 : 0.8})`, 
                            padding: seleccion_card === 'perfil' ? 25 / proporcional :  20 / proporcional,
                            borderRadius: 16 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionCard ('perfil')} onMouseLeave={() => setSeleccionCard('')}
                            onClick={() => navigate (`/pasajero/${location.pathname.split('/')[3]}`)}>
                        <div className='d-flex justify-content-center'>
                            <img src={icono_panel} style={{width: 96 / proporcional, height: 96 / proporcional, marginBottom: 20 / proporcional}}/>
                        </div>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 600, textAlign: 'center', marginBottom: 20 / proporcional}}>
                            Panel
                        </p>
                    </div>
                    <div style={{width: 415.5 / proporcional, marginLeft: 20 / proporcional, background: `rgba(39, 39, 39, ${seleccion_card === 'viajes' ? 0.6 : 0.8})`, 
                            padding: seleccion_card === 'viajes' ? 25 / proporcional :  20 / proporcional,
                            borderRadius: 16 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionCard ('viajes')} onMouseLeave={() => setSeleccionCard('')}
                            onClick={() => navigate (`/pasajero/viajes/${location.pathname.split('/')[3]}`)}>
                        <div className='d-flex justify-content-center'>
                            <img src={icono_registro_viajes} style={{width: 96 / proporcional, height: 96 / proporcional, marginBottom: 20 / proporcional}}/>
                        </div>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 600, textAlign: 'center', marginBottom: 20}}>
                            Mi registro de viajes
                        </p>
                    </div>
                </div>
                <div className='d-flex' style={{width: 871 / proporcional}}>
                    <div style={{width: 415.5 / proporcional, marginRight: 20 / proporcional, background: `rgba(39, 39, 39, ${seleccion_card === 'gastos' ? 0.6 : 0.8})`, 
                            padding: seleccion_card === 'gastos' ? 25 / proporcional :  20 / proporcional,
                            borderRadius: 16 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionCard ('gastos')} onMouseLeave={() => setSeleccionCard('')}
                            onClick={() => navigate (`/pasajero/gastos/${location.pathname.split('/')[3]}`)}>
                        <div className='d-flex justify-content-center'>
                            <img src={icono_gastos} style={{width: 96 / proporcional, height: 96 / proporcional, marginBottom: 20 / proporcional}}/>
                        </div>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 600, textAlign: 'center', marginBottom: 20}}>
                            Mis gastos
                        </p>
                    </div>
                    <div style={{width: 415.5 / proporcional, marginLeft: 20 / proporcional, background: `rgba(39, 39, 39, ${seleccion_card === 'cupones' ? 0.6 : 0.8})`, 
                            padding: seleccion_card === 'cupones' ? 25 / proporcional :  20 / proporcional,
                            borderRadius: 16 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionCard ('cupones')} onMouseLeave={() => setSeleccionCard('')}
                            onClick={() => navigate (`/pasajero/cupones/${location.pathname.split('/')[3]}`)}>
                        <div className='d-flex justify-content-center'>
                            <img src={icono_cupones} style={{width: 96 / proporcional, height: 96 / proporcional, marginBottom: 20 / proporcional}}/>
                        </div>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 600, textAlign: 'center', marginBottom: 20}}>
                            Mis cupones
                        </p>
                    </div>
                </div>
            </div>
            <div className='' style={{width: 871 / proporcional, marginBottom: 50 / proporcional}}>
                <p style={{width: 'auto', fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'black', fontWeight: 700, textAlign: 'center', marginBottom: 20 / proporcional}}>
                    MI PERFIL
                </p>
            </div>
            <div className='' style={{width: 871 / proporcional}}>
                <div style={{width: 871 / proporcional}}>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#212121',
                                textAlign: '', fontWeight: 700, marginBottom: 5 / proporcional}}>
                        Nombres y apellidos
                    </p>
                    <div className='rounded' style={{width: 871 / proporcional, border: !enombres ? '1px solid rgba(158,158,158, 0.6)' : '1px solid red', 
                                marginBottom: 20 / proporcional}}>
                        <input type='text'
                            disabled={!editar}
                            className='form-control border-0'
                            value={nombres}
                            onChange={(event) => setNombres(event.target.value)}
                            style={{width: 869 / proporcional, height: 50 / proporcional, 
                                fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`}}
                            placeholder='Nombres y apellidos'
                        />
                    </div>
                    <div className='d-flex' style={{width: 871 / proporcional, marginBottom: 20 / proporcional, height: 73 / proporcional}}>
                        <div style={{width: 425.5 / proporcional, height: 73 / proporcional, marginRight: 10 / proporcional}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#212121',
                                        textAlign: '', fontWeight: 700, marginBottom: 5 / proporcional}}>
                                Tipo documento
                            </p>
                            <div className='rounded' style={{width: 425.5 / proporcional, border: !etipo_documento ? '1px solid rgba(158,158,158, 0.6)' : '1px solid red', 
                                        marginBottom: 20 / proporcional}}>
                                <select type='text'
                                    disabled={!editar}
                                    className='form-control border-0'
                                    value={tipo_documento}
                                    onChange={(event) => setTipoDocumento(event.target.value)}
                                    style={{width: 423.5 / proporcional, height: 50 / proporcional, 
                                        fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`}}>
                                    <option defaultValue>{tipo_documento === '' ? 'Seleccionar' : tipo_documento}</option>
                                    <option value='D.N.I'>D.N.I</option>
                                    <option value='Pasaporte'>Pasaporte</option>
                                    <option value='C.E'>C.E</option>
                                    <option value='Otro'>Otro</option>
                                </select>
                            </div>
                        </div>
                        <div style={{width: 425.5 / proporcional, height: 73 / proporcional, marginLeft: 10 / proporcional}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#212121',
                                        textAlign: '', fontWeight: 700, marginBottom: 5 / proporcional}}>
                                Número documento
                            </p>
                            <div className='rounded' style={{width: 425.5 / proporcional, border: !enro_documento ? '1px solid rgba(158,158,158, 0.6)' : '1px solid red', 
                                        marginBottom: 20 / proporcional}}>
                                <input type='number'
                                    disabled={!editar}
                                    className='form-control border-0'
                                    value={nro_documento}
                                    onChange={(event) => setNroDocumento(event.target.value)}
                                    style={{width: 423.5 / proporcional, height: 50 / proporcional, 
                                        fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`}}
                                    placeholder='Número documento'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='d-flex' style={{width: 871 / proporcional, marginBottom: 20 / proporcional, height: 73 / proporcional}}>
                        <div style={{width: 425.5 / proporcional, height: 73 / proporcional, marginRight: 10 / proporcional}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#212121',
                                        textAlign: '', fontWeight: 700, marginBottom: 5 / proporcional}}>
                                Fecha nacimiento
                            </p>
                            <div className='rounded' style={{width: 425.5 / proporcional, border: !efecha_nacimiento ? '1px solid rgba(158,158,158, 0.6)' : '1px solid red', 
                                        marginBottom: 20 / proporcional}}>
                                <input type='date'
                                    disabled={!editar}
                                    className='form-control border-0'
                                    value={fecha_nacimiento}
                                    onChange={(event) => setFechaNacimiento(event.target.value)}
                                    style={{width: 423.5 / proporcional, height: 50 / proporcional, 
                                        fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`}}
                                    placeholder='Fecha nacimiento'
                                />
                            </div>
                        </div>
                        <div style={{width: 425.5 / proporcional, height: 73 / proporcional, marginLeft: 10 / proporcional}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#212121',
                                        textAlign: '', fontWeight: 700, marginBottom: 5 / proporcional}}>
                                Número teléfono
                            </p>
                            <div className='rounded' style={{width: 425.5 / proporcional, border: !enro_telefono ? '1px solid rgba(158,158,158, 0.6)' : '1px solid red', 
                                        marginBottom: 20 / proporcional}}>
                                <input type='number'
                                    disabled={!editar}
                                    className='form-control border-0'
                                    value={nro_telefono}
                                    onChange={(event) => setNroTelefono(event.target.value)}
                                    style={{width: 423.5 / proporcional, height: 50 / proporcional, 
                                        fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`}}
                                    placeholder='Número teléfono'
                                />
                            </div>
                        </div>
                    </div>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#212121',
                                textAlign: '', fontWeight: 700, marginBottom: 5 / proporcional}}>
                        Correo electrónico
                    </p>
                    <div className='rounded' style={{width: 871 / proporcional, border: !ecorreo ? '1px solid rgba(158,158,158, 0.6)' : '1px solid red', 
                                marginBottom: 20 / proporcional}}>
                        <input type='email'
                            disabled={!editar}
                            className='form-control border-0'
                            value={correo}
                            onChange={(event) => setCorreo(event.target.value)}
                            style={{width: 869 / proporcional, height: 50 / proporcional, 
                                fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`}}
                            placeholder='Correo o número de teléfono'
                        />
                    </div>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#212121',
                                textAlign: '', fontWeight: 700, marginBottom: 5 / proporcional}}>
                        Dirección
                    </p>
                    <div className='rounded' style={{width: 871 / proporcional, border: '1px solid rgba(158,158,158, 0.6)', 
                                marginBottom: 20 / proporcional}}>
                        <input type='text'
                            disabled={!editar}
                            className='form-control border-0'
                            value={direccion_principal}
                            onChange={(event) => setDireccionPrincipal(event.target.value)}
                            style={{width: 869 / proporcional, height: 50 / proporcional, 
                                fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`}}
                            placeholder='Dirección principal'
                        />
                    </div>
                    {
                        editar ? (
                            <div className='d-flex' style={{width: 871 / proporcional, height: 50 / proporcional}}>
                                <button className='btn rounded-pill' style={{width: boton_cancelar ? 423.5 / proporcional : 425.5 / proporcional, 
                                    fontSize: 24 / proporcional, height: 50 / proporcional, marginRight: 10 / proporcional,
                                    background: '#212121', color: 'white', marginBottom: 0, fontWeight: boton_cancelar ? 600 : 700}}
                                    onMouseOver={() => setBotonCancelar(true)} onMouseLeave={() => setBotonCancelar(false)}
                                    onClick={() => setEditar(false)}>
                                    Cancelar edición
                                </button>
                                <button className='btn rounded-pill' style={{width: boton_actualizar ? 423.5 / proporcional : 425.5 / proporcional, 
                                    fontSize: 24 / proporcional, height: 50 / proporcional, marginLeft: 10 / proporcional,
                                    background: '#212121', color: 'white', marginBottom: 0, fontWeight: boton_actualizar ? 600 : 700}}
                                    onMouseOver={() => setBotonActualizar(true)} onMouseLeave={() => setBotonActualizar(false)}
                                    onClick={() => actualizar_datos()}>
                                    Guardar cambios
                                </button>
                            </div>
                        ) : (
                            <div className='d-flex justify-content-end' style={{width: 871 / proporcional, height: 50 / proporcional}}>
                                <button className='btn rounded-pill' style={{width: boton_editar ? 423.5 / proporcional : 425.5 / proporcional, 
                                    fontSize: 24 / proporcional, height: 50 / proporcional,
                                    background: '#212121', color: 'white', marginBottom: 0, fontWeight: boton_editar ? 600 : 700}}
                                    onMouseOver={() => setBotonEditar(true)} onMouseLeave={() => setBotonEditar(false)}
                                    onClick={() => setEditar(true)}>
                                    Editar datos
                                </button>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}
