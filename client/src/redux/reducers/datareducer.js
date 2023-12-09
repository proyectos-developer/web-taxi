import { datatypes } from "../actions/dataactions";

const initialState = {
    user_authenticated: false,
}

const datareducer = (state = initialState, action) => {
    if (action.type === datatypes.SET_USER_AUTHENTICATED){
        const user_authenticated = action.user_authenticated
        return {
            ... state,
            user_authenticated
        }
    }
    return state
}

export default datareducer