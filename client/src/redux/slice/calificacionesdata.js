import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import { constantes } from "../../uri/constantes"

const baseurl = `${constantes().app_url[0].url}`
let stateType = ''

export const calificacionesdata = createAsyncThunk ('', async (params) => {
    stateType = params.stateType
    switch (stateType){
        case 'get_calificaciones':
        case 'get_calificacion':
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

const dataCalificaciones = createSlice ({
    name: 'fetch',
    initialState: initialState (stateType),
    extraReducers: (builder) => {
        builder.addCase (calificacionesdata.pending, (state) => {
            state.loading = true
        }),
        builder.addCase (calificacionesdata.fulfilled, (state, action) => {
            state.loading = false
            state.finishWithErrors = false
            state[stateType] = action.payload
        }),
        builder.addCase (calificacionesdata.rejected, (state) => {
            state.loading = false
            state.finishWithErrors = true
        })
    }
})

export default dataCalificaciones.reducer