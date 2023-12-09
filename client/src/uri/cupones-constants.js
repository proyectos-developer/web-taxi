import { constantes } from "./constantes";

export const cuponesConstants = (data = {}, reset = false, id = 0) => {
    return {
        url: `${constantes().app_url[0].url}`,
        get_cupones: {
            path: `cupones/viajero/${id}`,
            stateType: 'get_cupones',
            reset: reset
        }
    }
}