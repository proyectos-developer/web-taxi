import React, { useEffect, useState } from 'react'

import icono_panel from '../../assets/iconos/icono_panel_96.png'
import icono_registro_viajes from '../../assets/iconos/icono_registro_viajes_96.png'
import icono_ingresos from '../../assets/iconos/icono_ingresos_96.png'
import icono_calificaciones from '../../assets/iconos/icono_calificaciones_96.png'

import { useDispatch, useSelector } from 'react-redux'
import {conductordata} from '../../redux/slice/conductordata'
import { conductorConstants } from '../../uri/conductor-constants'
import { useLocation, useNavigate } from 'react-router-dom'

export default function  PerfilConductorTablet({proporcional}) {

    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    const [seleccion_card, setSeleccionCard] = useState ('')
    const [boton_editar, setBotonEditar] = useState (false)
    const [boton_cancelar, setBotonCancelar] = useState (false)
    const [boton_actualizar, setBotonActualizar] = useState (false)
    
    const [nombres, setNombres] = useState ('')
    const [apellidos, setApellidos] = useState ('')
    const [tipo_documento, setTipoDocumento] = useState ('')
    const [nro_documento, setNroDocumento] = useState ('')
    const [correo, setCorreo] = useState ('')
    const [fecha_nacimiento, setFechaNacimiento] = useState ('')
    const [nro_telefono, setNroTelefono] = useState ('')
    const [foto_perfil, setFotoPerfil] = useState ('')
    
    const [enombres, setENombres] = useState (false)
    const [etipo_documento, setETipoDocumento] = useState (false)
    const [enro_documento, setENroDocumento] = useState (false)
    const [ecorreo, setECorreo] = useState (false)
    const [efecha_nacimiento, setEFechaNacimiento] = useState (false)
    const [enro_telefono, setENroTelefono] = useState (false)

    const [editar, setEditar] = useState (false)

    const {get_conductor, update_perfil_conductor} = useSelector (({conductor}) => conductor)

    useEffect (() => {
        dispatch (conductordata(conductorConstants({}, false, location.pathname.split('/')[3]).get_conductor))
    }, [])

    useEffect (() => {
        if (update_perfil_conductor && update_perfil_conductor.success === true && update_perfil_conductor.conductor){
            setEditar(false)
        }
    }, [update_perfil_conductor])

    useEffect(() => {
        if (get_conductor && get_conductor.success === true && get_conductor.conductor){
            setNombres(get_conductor.conductor.nombres)
            setApellidos(get_conductor.conductor.apellidos)
            setTipoDocumento(get_conductor.conductor.tipo_documento)
            setNroDocumento(get_conductor.conductor.nro_documento)
            setCorreo(get_conductor.conductor.correo)
            setFechaNacimiento(get_conductor.conductor.fecha_nacimiento)
            setNroTelefono(get_conductor.conductor.nro_telefono)
            setFotoPerfil(get_conductor.conductor.foto_perfil)
        }
    }, [get_conductor])

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
                foto_perfil: foto_perfil,
                habilitado: true,
                licencia_conducir: '', 
                clase: '',
                categoria: '',
                fecha_expedicion: '',
                fecha_revalidacion: '',
                marca_carro: '',
                modelo_carro: '',
                color_carro: '',
                nro_placa: '',
                foto_licencia: '',
                foto_documento: '',
                usuario: location.pathname.split('/')[3]
            }
            dispatch (conductordata(conductorConstants(update_data, false, location.pathname.split('/')[3]).update_perfil_conductor))
        }
    }

    return (
        <div className='' style={{width: '100%', paddingTop: 50 / proporcional, paddingBottom: 100 / proporcional, 
                paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
            <div className='d-flex ' style={{width: 871 / proporcional, marginBottom: 20 / proporcional}}>
                <div style={{width: 395.5 / proporcional, marginRight: 20 / proporcional, background: `rgba(39, 39, 39, ${seleccion_card === 'perfil' ? 0.6 : 0.8})`, 
                        padding: seleccion_card === 'perfil' ? 15 / proporcional :  10 / proporcional,
                        borderRadius: 16 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionCard ('perfil')} onMouseLeave={() => setSeleccionCard('')}
                        onClick={() => navigate (`/conductor/${location.pathname.split('/')[3]}`)}>
                    <div className='d-flex justify-content-center'>
                        <img src={icono_panel} style={{width: 96 / proporcional, height: 96 / proporcional, marginBottom: 20 / proporcional}}/>
                    </div>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 600, textAlign: 'center', marginBottom: 20 / proporcional}}>
                        Panel
                    </p>
                </div>
                <div style={{width: 395.5 / proporcional, marginLeft: 20 / proporcional, background: `rgba(39, 39, 39, ${seleccion_card === 'viajes' ? 0.6 : 0.8})`, 
                        padding: seleccion_card === 'viajes' ? 15 / proporcional :  10 / proporcional,
                        borderRadius: 16 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionCard ('viajes')} onMouseLeave={() => setSeleccionCard('')}
                        onClick={() => navigate (`/conductor/viajes/${location.pathname.split('/')[3]}`)}>
                    <div className='d-flex justify-content-center'>
                        <img src={icono_registro_viajes} style={{width: 96 / proporcional, height: 96 / proporcional, marginBottom: 20 / proporcional}}/>
                    </div>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 600, textAlign: 'center', marginBottom: 20}}>
                        Mi registro de viajes
                    </p>
                </div>
            </div>
            <div className='d-flex ' style={{width: 871 / proporcional, marginBottom: 20 / proporcional}}>
                <div style={{width: 395.5 / proporcional, marginRight: 20 / proporcional, background: `rgba(39, 39, 39, ${seleccion_card === 'gastos' ? 0.6 : 0.8})`, 
                        padding: seleccion_card === 'gastos' ? 15 / proporcional :  10 / proporcional,
                        borderRadius: 16 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionCard ('gastos')} onMouseLeave={() => setSeleccionCard('')}
                        onClick={() => navigate (`/conductor/ingresos/${location.pathname.split('/')[3]}`)}>
                    <div className='d-flex justify-content-center'>
                        <img src={icono_ingresos} style={{width: 96 / proporcional, height: 96 / proporcional, marginBottom: 20 / proporcional}}/>
                    </div>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 600, textAlign: 'center', marginBottom: 20}}>
                        Mis ingresos
                    </p>
                </div>
                <div style={{width: 395.5 / proporcional, marginLeft: 20 / proporcional, background: `rgba(39, 39, 39, ${seleccion_card === 'cupones' ? 0.6 : 0.8})`, 
                        padding: seleccion_card === 'cupones' ? 15 / proporcional :  10 / proporcional,
                        borderRadius: 16 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionCard ('cupones')} onMouseLeave={() => setSeleccionCard('')}
                        onClick={() => navigate (`/conductor/calificaciones/${location.pathname.split('/')[3]}`)}>
                    <div className='d-flex justify-content-center'>
                        <img src={icono_calificaciones} style={{width: 96 / proporcional, height: 96 / proporcional, marginBottom: 20 / proporcional}}/>
                    </div>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 600, textAlign: 'center', marginBottom: 20}}>
                        Mis calificaciones
                    </p>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: 871 / proporcional, marginBottom: 50 / proporcional}}>
                <div style={{marginLeft: 30 / proporcional, marginRight: 30 / proporcional, cursor: 'pointer'}}
                    onClick={() => navigate (`/conductor/perfil/${location.pathname.split('/')[3]}`)}>
                    <p style={{width: 'auto', fontSize: 30 / proporcional, lineHeight: `${35 / proporcional}px`, color: 'black', marginBottom: 5 / proporcional,
                            fontWeight: location.pathname.split('/')[2] === 'perfil' ? 700 : 400}}>
                        MI PERFIL
                    </p>
                    {
                        location.pathname.split('/')[2] === 'perfil' ? (
                            <div className='rounded-pill' style={{width: '100%', height: 5 / proporcional, background: 'black'}}/>
                        ) : null
                    }
                </div>
                <div style={{marginLeft: 30 / proporcional, marginRight: 30 / proporcional, cursor: 'pointer'}}
                    onClick={() => navigate (`/conductor/vehiculo/${location.pathname.split('/')[3]}`)}>
                    <p style={{width: 'auto', fontSize: 30 / proporcional, lineHeight: `${35 / proporcional}px`, color: 'black', marginBottom: 5 / proporcional,
                            fontWeight: location.pathname.split('/')[2] === 'vehiculo' ? 700 : 400}}>
                        MI VEHÍCULO
                    </p>
                    {
                        location.pathname.split('/')[2] === 'vehiculo' ? (
                            <div className='rounded-pill' style={{width: '100%', height: 5 / proporcional, background: 'black'}}/>
                        ) : null
                    }
                </div>
                <div style={{marginLeft: 30 / proporcional, marginRight: 30 / proporcional, cursor: 'pointer'}}
                    onClick={() => navigate (`/conductor/documentos/${location.pathname.split('/')[3]}`)}>
                    <p style={{width: 'auto', fontSize: 30 / proporcional, lineHeight: `${35 / proporcional}px`, color: 'black', marginBottom: 5 / proporcional,
                            fontWeight: location.pathname.split('/')[2] === 'documentos' ? 700 : 400}}>
                        MIS DOCUMENTOS
                    </p>
                    {
                        location.pathname.split('/')[2] === 'documentos' ? (
                            <div className='rounded-pill' style={{width: '100%', height: 5 / proporcional, background: 'black'}}/>
                        ) : null
                    }
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: 871 / proporcional}}>
                <div style={{width: 700 / proporcional}}>
                    <div className='d-flex' style={{width: 700 / proporcional, marginBottom: 20 / proporcional, height: 73 / proporcional}}>
                        <div style={{width: 340 / proporcional, height: 73 / proporcional, marginRight: 10 / proporcional}}>
                          <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#212121',
                                      textAlign: '', fontWeight: 700, marginBottom: 5 / proporcional}}>
                              Nombres
                          </p>
                          <div className='rounded' style={{width: 340 / proporcional, border: !enombres ? '1px solid rgba(158,158,158, 0.6)' : '1px solid red', 
                                      marginBottom: 20 / proporcional}}>
                              <input type='text'
                                  disabled={!editar}
                                  className='form-control border-0'
                                  value={nombres}
                                  onChange={(event) => setNombres(event.target.value)}
                                  style={{width: 338 / proporcional, height: 50 / proporcional, 
                                      fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`}}
                                  placeholder='Nombres'
                              />
                          </div>
                        </div>
                        <div style={{width: 340 / proporcional, height: 73 / proporcional, marginRight: 10 / proporcional}}>
                          <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#212121',
                                      textAlign: '', fontWeight: 700, marginBottom: 5 / proporcional}}>
                              Apellidos
                          </p>
                          <div className='rounded' style={{width: 340 / proporcional, border: '1px solid rgba(158,158,158, 0.6)', 
                                      marginBottom: 20 / proporcional, marginLeft: 10 / proporcional}}>
                              <input type='text'
                                  disabled={!editar}
                                  className='form-control border-0'
                                  value={apellidos}
                                  onChange={(event) => setApellidos(event.target.value)}
                                  style={{width: 338 / proporcional, height: 50 / proporcional, 
                                      fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`}}
                                  placeholder='Apellidos'
                              />
                          </div>
                      </div>
                    </div>
                    <div className='d-flex' style={{width: 700 / proporcional, marginBottom: 20 / proporcional, height: 73 / proporcional}}>
                        <div style={{width: 340 / proporcional, height: 73 / proporcional, marginRight: 10 / proporcional}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#212121',
                                        textAlign: '', fontWeight: 700, marginBottom: 5 / proporcional}}>
                                Tipo documento
                            </p>
                            <div className='rounded' style={{width: 340 / proporcional, border: !etipo_documento ? '1px solid rgba(158,158,158, 0.6)' : '1px solid red', 
                                        marginBottom: 20 / proporcional}}>
                                <select type='text'
                                    disabled={!editar}
                                    className='form-control border-0'
                                    value={tipo_documento}
                                    onChange={(event) => setTipoDocumento(event.target.value)}
                                    style={{width: 338 / proporcional, height: 50 / proporcional, 
                                        fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`}}>
                                    <option defaultValue>{tipo_documento === '' ? 'Seleccionar' : tipo_documento}</option>
                                    <option value='D.N.I'>D.N.I</option>
                                    <option value='Pasaporte'>Pasaporte</option>
                                    <option value='C.E'>C.E</option>
                                    <option value='Otro'>Otro</option>
                                </select>
                            </div>
                        </div>
                        <div style={{width: 340 / proporcional, height: 73 / proporcional, marginLeft: 10 / proporcional}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#212121',
                                        textAlign: '', fontWeight: 700, marginBottom: 5 / proporcional}}>
                                Número documento
                            </p>
                            <div className='rounded' style={{width: 340 / proporcional, border: !enro_documento ? '1px solid rgba(158,158,158, 0.6)' : '1px solid red', 
                                        marginBottom: 20 / proporcional}}>
                                <input type='number'
                                    disabled={!editar}
                                    className='form-control border-0'
                                    value={nro_documento}
                                    onChange={(event) => setNroDocumento(event.target.value)}
                                    style={{width: 338 / proporcional, height: 50 / proporcional, 
                                        fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`}}
                                    placeholder='Número documento'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='d-flex' style={{width: 700 / proporcional, marginBottom: 20 / proporcional, height: 73 / proporcional}}>
                        <div style={{width: 340 / proporcional, height: 73 / proporcional, marginRight: 10 / proporcional}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#212121',
                                        textAlign: '', fontWeight: 700, marginBottom: 5 / proporcional}}>
                                Fecha nacimiento
                            </p>
                            <div className='rounded' style={{width: 340 / proporcional, border: !efecha_nacimiento ? '1px solid rgba(158,158,158, 0.6)' : '1px solid red', 
                                        marginBottom: 20 / proporcional}}>
                                <input type='date'
                                    disabled={!editar}
                                    className='form-control border-0'
                                    value={fecha_nacimiento}
                                    onChange={(event) => setFechaNacimiento(event.target.value)}
                                    style={{width: 338 / proporcional, height: 50 / proporcional, 
                                        fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`}}
                                    placeholder='Fecha nacimiento'
                                />
                            </div>
                        </div>
                        <div style={{width: 340 / proporcional, height: 73 / proporcional, marginLeft: 10 / proporcional}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#212121',
                                        textAlign: '', fontWeight: 700, marginBottom: 5 / proporcional}}>
                                Número teléfono
                            </p>
                            <div className='rounded' style={{width: 340 / proporcional, border: !enro_telefono ? '1px solid rgba(158,158,158, 0.6)' : '1px solid red', 
                                        marginBottom: 20 / proporcional}}>
                                <input type='number'
                                    disabled={!editar}
                                    className='form-control border-0'
                                    value={nro_telefono}
                                    onChange={(event) => setNroTelefono(event.target.value)}
                                    style={{width: 338 / proporcional, height: 50 / proporcional, 
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
                    <div className='rounded' style={{width: 700 / proporcional, border: !ecorreo ? '1px solid rgba(158,158,158, 0.6)' : '1px solid red', 
                                marginBottom: 20 / proporcional}}>
                        <input type='email'
                            disabled={!editar}
                            className='form-control border-0'
                            value={correo}
                            onChange={(event) => setCorreo(event.target.value)}
                            style={{width: 698 / proporcional, height: 50 / proporcional, 
                                fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`}}
                            placeholder='Correo o número de teléfono'
                        />
                    </div>
                    {
                        editar ? (
                            <div className='d-flex' style={{width: 700 / proporcional, height: 50 / proporcional}}>
                                <button className='btn rounded-pill' style={{width: boton_cancelar ? 338 / proporcional : 340 / proporcional, 
                                    fontSize: 24 / proporcional, height: 50 / proporcional, marginRight: 10 / proporcional,
                                    background: '#212121', color: 'white', marginBottom: 0, fontWeight: boton_cancelar ? 600 : 700}}
                                    onMouseOver={() => setBotonCancelar(true)} onMouseLeave={() => setBotonCancelar(false)}
                                    onClick={() => setEditar(false)}>
                                    Cancelar edición
                                </button>
                                <button className='btn rounded-pill' style={{width: boton_actualizar ? 338 / proporcional : 340 / proporcional, 
                                    fontSize: 24 / proporcional, height: 50 / proporcional, marginLeft: 10 / proporcional,
                                    background: '#212121', color: 'white', marginBottom: 0, fontWeight: boton_actualizar ? 600 : 700}}
                                    onMouseOver={() => setBotonActualizar(true)} onMouseLeave={() => setBotonActualizar(false)}
                                    onClick={() => actualizar_datos()}>
                                    Guardar cambios
                                </button>
                            </div>
                        ) : (
                            <div className='d-flex justify-content-end' style={{width: 700 / proporcional, height: 50 / proporcional}}>
                                <button className='btn rounded-pill' style={{width: boton_editar ? 338 / proporcional : 340 / proporcional, 
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
