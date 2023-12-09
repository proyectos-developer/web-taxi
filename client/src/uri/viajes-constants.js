import { constantes } from "./constantes";

export const viajesConstants = (data = {}, reset = false, id = 0, usuario = 0) => {
    return {
        url: `${constantes().app_url[0].url}`,
        get_viajes: {
            path: `viajes/viajero/${id}`,
            stateType: 'get_viajes',
            reset: reset,
            data: data
        },
        get_viaje: {
            path: `viaje/viajero/${usuario}/${id}`,
            stateType: 'get_viaje',
            reset: reset
        },
        get_viajes_conductor: {
            path: `viajes/conductor/${id}`,
            stateType: 'get_viajes_conductor',
            reset: reset,
            data: data
        },
        get_viaje_conductor: {
            path: `viaje/conductor/${usuario}/${id}`,
            stateType: 'get_viaje_conductor',
            reset: reset,
            data: data
        },
    }
}