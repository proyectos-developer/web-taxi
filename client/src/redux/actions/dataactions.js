export const datatypes = {
    SET_USER_AUTHENTICATED: 'SET_USER_AUTHENTICATED'
}

export const set_user_authenticated = user_authenticated => {
    return {
        user_authenticated,
        type: datatypes.SET_USER_AUTHENTICATED
    }
}