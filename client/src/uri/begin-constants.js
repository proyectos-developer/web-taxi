import { constantes } from "./constantes";

export const beginConstants = (data = {}, reset = false, id = 0) => {
    return {
        url: `${constantes().app_url[0].url}`,
        register_viajero: {
            path: `viajero/signup`,
            stateType: 'register_viajero',
            reset: reset,
            data: data
        },
        login_viajero: {
            path: `viajero/signin`,
            stateType: 'login_viajero',
            data: data,
            reset: reset
        },
        register_conductor: {
            path: `conductor/signup`,
            stateType: 'register_conductor',
            reset: reset,
            data: data
        },
        login_conductor: {
            path: `conductor/signin`,
            stateType: 'login_conductor',
            data: data,
            reset: reset
        },
        log_out: {
            path: `logout`,
            stateType: 'log_out',
            reset: reset
        },
        forgot_password: {
            path: `update/password/${id}`,
            stateType: 'forgot_password',
            reset: reset,
            data: data
        },
        get_session: {
            path: `sessions`,
            stateType: 'get_session',
            reset: reset
        },
        get_session_id: {
            path: `session/${id}`,
            stateType: 'get_session_id',
            reset: reset
        },
        delete_session: {
            path: `session/delete/${id}`,
            stateType: 'delete_session',
            reset: reset
        }
    }
}