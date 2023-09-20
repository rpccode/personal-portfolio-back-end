import { createSlice } from '@reduxjs/toolkit'

// export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
//   const response = await client.get('/fakeApi/todos')
//   return response.todos
// })
const initialState = {
    active: {
        id: '',
        nombre: '',
        precentacion: '',
        bienvenida: '',
        Especializacion: [],
        CV: {}
    }
}

const BannerSlice = createSlice({
    name: 'banner',
    initialState,
    reducers: {
        getBannerActive(state, action) {
            state.active = action.payload
        },
        BannerLoading(state, action) {
            return {
                ...state,
                status: 'loading'
            }
        }
    }
})

export const { BannerLoading, getBannerActive } = BannerSlice.actions

export default BannerSlice.reducer