import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import { constantes } from "../../uri/constantes"

const baseurl = `${constantes().app_url[0].url}`
let stateType = ''

export const begindata = createAsyncThunk ('', async (params) => {
    stateType = params.stateType
    switch (stateType){
        case 'login_viajero':
        case 'register_viajero':
        case 'login_conductor':
        case 'register_conductor':
        case 'forgot_password':
            if (params.reset){ 
                return {success: null}
            }else{
                try{
                    const response = await axios.post (`${baseurl}/${params.path}`, params.data)
                    return response.data
                }catch (err){
                    return err.message
                }
            }
        case 'get_session':
        case 'delete_session':
        case 'log_out':
        case 'get_session_id':
        case 'delete_cuenta':
            if (params.reset){ 
                return {success: null}
            }else{
                try{
                    const response = await axios.get (`${baseurl}/${params.path}`)
                    return response.data
                }catch (err){
                    return err.message
                }
            }
        default: return null
    }
})

const initialState = (type) => {
    return {
        [type]: [],
        loading: false,
        finishWithErrors: false,
        errorMessage: 'Hemos tenido problemas solicitando la información'
    }
}

const dataBegin = createSlice ({
    name: 'fetch',
    initialState: initialState (stateType),
    extraReducers: (builder) => {
        builder.addCase (begindata.pending, (state) => {
            state.loading = true
        }),
        builder.addCase (begindata.fulfilled, (state, action) => {
            state.loading = false
            state.finishWithErrors = false
            state[stateType] = action.payload
        }),
        builder.addCase (begindata.rejected, (state) => {
            state.loading = false
            state.finishWithErrors = true
        })
    }
})

export default dataBegin.reducer