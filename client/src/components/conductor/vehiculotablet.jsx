import React, { useEffect, useState } from 'react'

import icono_panel from '../../assets/iconos/icono_panel_96.png'
import icono_registro_viajes from '../../assets/iconos/icono_registro_viajes_96.png'
import icono_ingresos from '../../assets/iconos/icono_ingresos_96.png'
import icono_calificaciones from '../../assets/iconos/icono_calificaciones_96.png'

import { useDispatch, useSelector } from 'react-redux'
import {conductordata} from '../../redux/slice/conductordata'
import { conductorConstants } from '../../uri/conductor-constants'
import { useLocation, useNavigate } from 'react-router-dom'
import {carrosdata} from '../../redux/slice/carrosdata'
import { carrosConstants } from '../../uri/carros-constants'

export default function VehiculoConductorTablet({proporcional}) {

    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    const [seleccion_card, setSeleccionCard] = useState ('')
    const [boton_editar, setBotonEditar] = useState (false)
    const [boton_cancelar, setBotonCancelar] = useState (false)
    const [boton_actualizar, setBotonActualizar] = useState (false)
    
    const [nro_placa, setNroPlaca] = useState ('')
    const [clase, setClase] = useState ('')
    const [categoria, setCategoria] = useState ('')
    const [fecha_expedicion, setFechaExpedicion] = useState ('')
    const [fecha_revalidacion, setFechaRevalidacion] = useState ('')
    const [licencia_conducir, setLicenciaConducir] = useState ('')
    const [marca_carro, setMarcaCarro] = useState ('')
    const [modelo_carro, setModeloCarro] = useState ('')
    const [color_carro, setColorCarro] = useState ('')
    
    const [enro_placa, setENroPlaca] = useState ('')
    const [eclase, setEClase] = useState ('')
    const [ecategoria, setECategoria] = useState ('')
    const [efecha_expedicion, setEFechaExpedicion] = useState ('')
    const [efecha_revalidacion, setEFechaRevalidacion] = useState ('')
    const [elicencia_conducir, setELicenciaConducir] = useState ('')
    const [emarca_carro, setEMarcaCarro] = useState ('')
    const [emodelo_carro, setEModeloCarro] = useState ('')

    const [lista_marcas, setListaMarcas] = useState([])
    const [lista_modelos, setListaModelos] = useState([])

    const [input_marca, setInputMarca] = useState (false)
    const [input_modelo, setInputModelo] = useState (false)

    const [editar, setEditar] = useState (false)

    const {get_conductor_vehiculo, update_perfil_conductor} = useSelector (({conductor}) => conductor)
    const {get_marcas_carro, get_modelos_carro} = useSelector(({carros}) => carros)

    useEffect (() => {
        dispatch (conductordata(conductorConstants({}, false, location.pathname.split('/')[3]).get_conductor_vehiculo))
    }, [])

    useEffect (() => {
        if (update_perfil_conductor && update_perfil_conductor.success === true && update_perfil_conductor.vehiculo){
            setEditar(false)
        }
    }, [update_perfil_conductor])

    useEffect(() => {
        console.log ('vehiculo', get_conductor_vehiculo)
        if (get_conductor_vehiculo && get_conductor_vehiculo.success === true && get_conductor_vehiculo.vehiculo){
          console.log ('vehiculo', get_conductor_vehiculo.vehiculo)
            setNroPlaca(get_conductor_vehiculo.vehiculo.nro_placa)
            setClase(get_conductor_vehiculo.vehiculo.clase)
            setCategoria(get_conductor_vehiculo.vehiculo.categoria)
            setFechaExpedicion(get_conductor_vehiculo.vehiculo.fecha_expedicion)
            setFechaRevalidacion(get_conductor_vehiculo.vehiculo.fecha_revalidacion)
            setLicenciaConducir(get_conductor_vehiculo.vehiculo.licencia_conducir)
            setMarcaCarro(get_conductor_vehiculo.vehiculo.marca_carro)
            setModeloCarro(get_conductor_vehiculo.vehiculo.modelo_carro)
            setColorCarro(get_conductor_vehiculo.vehiculo.color_carro)
            dispatch (carrosdata(carrosConstants({}, false, 0).get_marcas_carro))
        }
    }, [get_conductor_vehiculo])

    useEffect (() => {
      if (get_marcas_carro && get_marcas_carro.success === true && get_marcas_carro.marcas){
        setListaMarcas(get_marcas_carro.marcas)
      }
    }, [get_marcas_carro])

    useEffect (() => {
      console.log ('modelo', get_modelos_carro)
      if (get_modelos_carro && get_modelos_carro.success === true && get_modelos_carro.modelos){
        setListaModelos(get_modelos_carro.modelos)
      }
    }, [get_modelos_carro])

    const seleccionar_marca_carro = (value) => {
      if (value !== 'Otro'){
        setMarcaCarro(value.split('*')[1])
        dispatch (carrosdata(carrosConstants({}, false, value.split('*')[0]).get_modelos_carro))
      }else{
        setInputMarca (true)
      }
    }

    const seleccionar_modelo_carro = (value) => {
      if (value !== 'Otro'){
        setMarcaCarro(value.split('*')[1])
      }else{
        setInputModelo (true)
      }
    }

    const actualizar_datos = () => {
        if (nro_placa === '' || clase === '' || categoria === '' || fecha_expedicion === '' || fecha_revalidacion === '' || licencia_conducir === '' ||
            marca_carro === '' || modelo_carro === ''){
            setENroPlaca(nro_placa === '' ? true : false)
            setEClase(clase === '' ? true : false)
            setECategoria(categoria === '' ? true : false)
            setEFechaExpedicion(fecha_expedicion === '' ? true : false)
            setEFechaRevalidacion(fecha_revalidacion === '' ? true : false)
            setELicenciaConducir(licencia_conducir === '' ? true : false)
            setEMarcaCarro(marca_carro === '' ? true : false)
            setEModeloCarro(modelo_carro === '' ? true : false)
        }else{
            setENroPlaca(false)
            setEClase(false)
            setECategoria(false)
            setEFechaExpedicion(false)
            setEFechaRevalidacion(false)
            setELicenciaConducir(false)
            setEMarcaCarro(false)
            setEModeloCarro(false)
            setInputMarca(false)
            setInputModelo(false)

            const update_data = {
                nro_placa: nro_placa,
                clase: clase,
                categoria: categoria,
                fecha_expedicion: fecha_expedicion,
                fecha_revalidacion: fecha_revalidacion,
                licencia_conducir: licencia_conducir,
                marca_carro: marca_carro,
                modelo_carro: modelo_carro,
                color_carro: color_carro
            }
            dispatch (conductordata(conductorConstants(update_data, false, location.pathname.split('/')[3]).update_datos_vehiculo))
        }
    }

    return (
        <div className='' style={{width: '100%', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, 
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
                                Marca de carro
                            </p>
                            {
                              input_marca ? (
                                <div className='rounded' style={{width: 340 / proporcional, border: !emarca_carro ? '1px solid rgba(158,158,158, 0.6)' : '1px solid red', 
                                            marginBottom: 20 / proporcional}}>
                                    <input type='text'
                                        disabled={!editar}
                                        className='form-control border-0'
                                        value={marca_carro}
                                        onChange={(event) => setMarcaCarro(event.target.value)}
                                        style={{width: 338 / proporcional, height: 50 / proporcional, 
                                            fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`}}
                                        placeholder='Marca carro'
                                    />
                                </div>
                              ) : (
                                <div className='rounded' style={{width: 340 / proporcional, border: !emarca_carro ? '1px solid rgba(158,158,158, 0.6)' : '1px solid red', 
                                            marginBottom: 20 / proporcional}}>
                                    <select type='text'
                                        disabled={!editar}
                                        className='form-control border-0'
                                        value={marca_carro}
                                        onChange={(event) => seleccionar_marca_carro(event.target.value)}
                                        style={{width: 338 / proporcional, height: 50 / proporcional, 
                                            fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`}}>
                                          <option defaultValue>{marca_carro === '' ? 'Seleccionar' : marca_carro}</option>
                                          <option value='Otro'>Otro</option>
                                        {
                                          lista_marcas && lista_marcas.length > 0 ? (
                                            lista_marcas.map ((marca, index) => {
                                              return (
                                                <option index={index} value={`${marca.id + '*' + marca.marca}`}>{marca.marca}</option>
                                              )
                                            })
                                          ) : null
                                        }
                                    </select>
                                </div>
                              )
                            }
                        </div>
                        <div style={{width: 340 / proporcional, height: 73 / proporcional, marginLeft: 10 / proporcional}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#212121',
                                        textAlign: '', fontWeight: 700, marginBottom: 5 / proporcional}}>
                                Modelo de carro
                            </p>
                            {
                              input_modelo ? ( 
                                <div className='rounded' style={{width: 340 / proporcional, border: !emodelo_carro ? '1px solid rgba(158,158,158, 0.6)' : '1px solid red', 
                                            marginBottom: 20 / proporcional}}>
                                    <input type='text'
                                        disabled={!editar}
                                        className='form-control border-0'
                                        value={modelo_carro}
                                        onChange={(event) => setModeloCarro(event.target.value)}
                                        style={{width: 338 / proporcional, height: 50 / proporcional, 
                                            fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`}}
                                        placeholder='Modelo carro'
                                    />
                                </div>
                              ) : (
                                <div className='rounded' style={{width: 340 / proporcional, border: !emodelo_carro ? '1px solid rgba(158,158,158, 0.6)' : '1px solid red', 
                                            marginBottom: 20 / proporcional}}>
                                    <select type='text'
                                        disabled={!editar}
                                        className='form-control border-0'
                                        value={modelo_carro}
                                        onChange={(event) => seleccionar_modelo_carro(event.target.value)}
                                        style={{width: 338 / proporcional, height: 50 / proporcional, 
                                            fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`}}>
                                        <option defaultValue>{modelo_carro === '' ? 'Seleccionar' : modelo_carro}</option>
                                        <option value='Otro'>Otro</option>
                                        {
                                          lista_modelos && lista_modelos.length > 0 ? (
                                            lista_modelos.map ((modelo, index) => {
                                              return (
                                                <option index={index} value={`${modelo.id + '-' + modelo.modelo}`}>{modelo.modelo}</option>
                                              )
                                            })
                                          ) : null
                                        }
                                    </select>
                                </div>
                              )
                            }
                        </div>
                    </div>
                    <div className='d-flex' style={{width: 700 / proporcional, marginBottom: 20 / proporcional, height: 73 / proporcional}}>
                        <div style={{width: 340 / proporcional, height: 73 / proporcional, marginRight: 10 / proporcional}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#212121',
                                        textAlign: '', fontWeight: 700, marginBottom: 5 / proporcional}}>
                                Fecha expedición
                            </p>
                            <div className='rounded' style={{width: 340 / proporcional, border: !efecha_expedicion ? '1px solid rgba(158,158,158, 0.6)' : '1px solid red', 
                                        marginBottom: 20 / proporcional}}>
                                <input type='date'
                                    disabled={!editar}
                                    className='form-control border-0'
                                    value={fecha_expedicion}
                                    onChange={(event) => setFechaExpedicion(event.target.value)}
                                    style={{width: 338 / proporcional, height: 50 / proporcional, 
                                        fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`}}
                                    placeholder='Fecha expedición'
                                />
                            </div>
                        </div>
                        <div style={{width: 340 / proporcional, height: 73 / proporcional, marginLeft: 10 / proporcional}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#212121',
                                        textAlign: '', fontWeight: 700, marginBottom: 5 / proporcional}}>
                                Fecha revalidación
                            </p>
                            <div className='rounded' style={{width: 340 / proporcional, border: !efecha_revalidacion ? '1px solid rgba(158,158,158, 0.6)' : '1px solid red', 
                                        marginBottom: 20 / proporcional}}>
                                <input type='date'
                                    disabled={!editar}
                                    className='form-control border-0'
                                    value={fecha_revalidacion}
                                    onChange={(event) => setFechaExpedicion(event.target.value)}
                                    style={{width: 338 / proporcional, height: 50 / proporcional, 
                                        fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`}}
                                    placeholder='Número revalidación'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='d-flex' style={{width: 700 / proporcional, marginBottom: 20 / proporcional, height: 73 / proporcional}}>
                        <div style={{width: 340 / proporcional, height: 73 / proporcional, marginRight: 10 / proporcional}}>
                          <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#212121',
                                      textAlign: '', fontWeight: 700, marginBottom: 5 / proporcional}}>
                              Categoría
                          </p>
                          <div className='rounded' style={{width: 340 / proporcional, border: !ecategoria ? '1px solid rgba(158,158,158, 0.6)' : '1px solid red', 
                                      marginBottom: 20 / proporcional}}>
                              <input type='text'
                                  disabled={!editar}
                                  className='form-control border-0'
                                  value={categoria}
                                  onChange={(event) => setCategoria(event.target.value)}
                                  style={{width: 338 / proporcional, height: 50 / proporcional, 
                                      fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`}}
                                  placeholder='Categoría'
                              />
                          </div>
                        </div>
                        <div style={{width: 340 / proporcional, height: 73 / proporcional, marginRight: 10 / proporcional}}>
                          <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#212121',
                                      textAlign: '', fontWeight: 700, marginBottom: 5 / proporcional}}>
                              Clase
                          </p>
                          <div className='rounded' style={{width: 340 / proporcional, border: !eclase ? '1px solid rgba(158,158,158, 0.6)' : '1px solid red',
                                      marginBottom: 20 / proporcional, marginLeft: 10 / proporcional}}>
                              <input type='text'
                                  disabled={!editar}
                                  className='form-control border-0'
                                  value={clase}
                                  onChange={(event) => setClase(event.target.value)}
                                  style={{width: 338 / proporcional, height: 50 / proporcional, 
                                      fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`}}
                                  placeholder='Clase'
                              />
                          </div>
                      </div>
                    </div>
                    <div className='d-flex' style={{width: 700 / proporcional, marginBottom: 20 / proporcional, height: 73 / proporcional}}>
                        <div style={{width: 340 / proporcional, height: 73 / proporcional, marginRight: 10 / proporcional}}>
                          <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#212121',
                                      textAlign: '', fontWeight: 700, marginBottom: 5 / proporcional}}>
                              Licencia conducir
                          </p>
                          <div className='rounded' style={{width: 340 / proporcional, border: !elicencia_conducir ? '1px solid rgba(158,158,158, 0.6)' : '1px solid red', 
                                      marginBottom: 20 / proporcional}}>
                              <input type='text'
                                  disabled={!editar}
                                  className='form-control border-0'
                                  value={licencia_conducir}
                                  onChange={(event) => setLicenciaConducir(event.target.value)}
                                  style={{width: 338 / proporcional, height: 50 / proporcional, 
                                      fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`}}
                                  placeholder='Licencia conducir'
                              />
                          </div>
                        </div>
                        <div style={{width: 340 / proporcional, height: 73 / proporcional, marginRight: 10 / proporcional}}>
                          <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#212121',
                                      textAlign: '', fontWeight: 700, marginBottom: 5 / proporcional}}>
                              Número de placa
                          </p>
                          <div className='rounded' style={{width: 340 / proporcional, border: !enro_placa ? '1px solid rgba(158,158,158, 0.6)' : '1px solid red',
                                      marginBottom: 20 / proporcional, marginLeft: 10 / proporcional}}>
                              <input type='text'
                                  disabled={!editar}
                                  className='form-control border-0'
                                  value={nro_placa}
                                  onChange={(event) => setNroPlaca(event.target.value)}
                                  style={{width: 338 / proporcional, height: 50 / proporcional, 
                                      fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`}}
                                  placeholder='Número de placa'
                              />
                          </div>
                      </div>
                    </div>
                    <div className='d-flex' style={{width: 700 / proporcional, marginBottom: 20 / proporcional, height: 73 / proporcional}}>
                        <div style={{width: 340 / proporcional, height: 73 / proporcional, marginRight: 10 / proporcional}}>
                          <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#212121',
                                      textAlign: '', fontWeight: 700, marginBottom: 5 / proporcional}}>
                              Color (seleccionar en aplicación móvil)
                          </p>
                          <div className='rounded' style={{width: 340 / proporcional, border: '1px solid rgba(158,158,158, 0.6)',
                                      marginBottom: 20 / proporcional, background: color_carro === '' ? '#fffff' : color_carro}}>
                              <input type='text'
                                disabled={true}
                                  className='form-control border-0'
                                  value={color_carro}
                                  onChange={(event) => setColorCarro(event.target.value)}
                                  style={{width: 338 / proporcional, height: 50 / proporcional, 
                                      fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`}}
                                  placeholder='Color carro'
                              />
                          </div>
                        </div>
                      </div>
                    {
                        editar ? (
                            <div className='d-flex' style={{width: 700 / proporcional, height: 50 / proporcional}}>
                                <button className='btn rounded-pill' style={{width: boton_cancelar ? 338 / proporcional : 340 / proporcional, 
                                    fontSize: 24 / proporcional, height: 50 / proporcional, marginRight: 10 / proporcional,
                                    background: '#212121', color: 'white', marginBottom: 0, fontWeight: boton_cancelar ? 600 : 700}}
                                    onMouseOver={() => setBotonCancelar(true)} onMouseLeave={() => setBotonCancelar(false)}
                                    onClick={() => {setEditar(false); setInputMarca(false); setInputModelo(false)}}>
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
