import { constantes } from "./constantes";

export const carrosConstants = (data = {}, reset = false, id = 0) => {
    return {
        url: `${constantes().app_url[0].url}`,
        get_marcas_carro: {
            path: `marcas/carros`,
            stateType: 'get_marcas_carro',
            reset: reset,
            data: data
        },
        get_modelos_carro: {
            path: `modelo/carros/marca/${id}`,
            stateType: 'get_modelos_carro',
            data: data,
            reset: reset
        }
    }
}