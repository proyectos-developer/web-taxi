import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import { constantes } from "../../uri/constantes"

const baseurl = `${constantes().app_url[0].url}`
let stateType = ''

export const conductordata = createAsyncThunk ('', async (params) => {
    stateType = params.stateType
    switch (stateType){
        case 'update_perfil_conductor':
        case 'update_datos_vehiculo':
        case 'update_fotos_documentos':
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
        case 'get_conductor':
        case 'get_conductor_vehiculo':
        case 'get_conductor_documentos':
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

const dataConductor = createSlice ({
    name: 'fetch',
    initialState: initialState (stateType),
    extraReducers: (builder) => {
        builder.addCase (conductordata.pending, (state) => {
            state.loading = true
        }),
        builder.addCase (conductordata.fulfilled, (state, action) => {
            state.loading = false
            state.finishWithErrors = false
            state[stateType] = action.payload
        }),
        builder.addCase (conductordata.rejected, (state) => {
            state.loading = false
            state.finishWithErrors = true
        })
    }
})

export default dataConductor.reducer