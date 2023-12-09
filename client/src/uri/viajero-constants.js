import { constantes } from "./constantes";

export const viajeroConstants = (data = {}, reset = false, id = 0) => {
    return {
        url: `${constantes().app_url[0].url}`,
        update_viajero: {
            path: `app/viajero/${id}`,
            stateType: 'update_viajero',
            reset: reset,
            data: data
        },
        get_viajero: {
            path: `app/viajero/${id}`,
            stateType: 'get_viajero',
            reset: reset
        }
    }
}