import { constantes } from "./constantes";

export const conductorConstants = (data = {}, reset = false, id = 0) => {
    return {
        url: `${constantes().app_url[0].url}`,
        update_perfil_conductor: {
            path: `app/conductor/${id}`,
            stateType: 'update_perfil_conductor',
            reset: reset,
            data: data
        },
        update_datos_vehiculo: {
            path: `app/conductor/vehiculo/${id}`,
            stateType: 'update_datos_vehiculo',
            reset: reset,
            data: data
        },
        update_fotos_documentoss: {
            path: `app/conductor/documentos/${id}`,
            stateType: 'update_fotos_documentoss',
            reset: reset,
            data: data
        },
        get_conductor: {
            path: `app/conductor/${id}`,
            stateType: 'get_conductor',
            reset: reset
        },
        get_conductor_vehiculo: {
            path: `app/conductor/vehiculo/${id}`,
            stateType: 'get_conductor_vehiculo',
            reset: reset
        },
        get_conductor_documentos: {
            path: `app/conductor/documentos/${id}`,
            stateType: 'get_conductor_documentos',
            reset: reset
        }
    }
}