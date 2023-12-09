import { constantes } from "./constantes";

export const calificacioneConstants = (data = {}, reset = false, id = 0) => {
    return {
        url: `${constantes().app_url[0].url}`,
        get_calificaciones: {
            path: `calificaciones/conductor/${id}`,
            stateType: 'get_calificaciones',
            reset: reset,
            data: data
        },
        get_calificacion: {
            path: `calificacion/conductor/${id}`,
            stateType: 'get_calificacion',
            reset: reset,
            data: data
        }
    }
}