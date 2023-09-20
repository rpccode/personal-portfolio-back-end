import { createSlice } from '@reduxjs/toolkit'

// export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
//   const response = await client.get('/fakeApi/todos')
//   return response.todos
// })
const initialState = {
    id: "",
    title: "",
    description: "",
    logo: {
        id: "",
        filename: "",
        mimeType: "",
        filesize: 0,
        width: 0,
        height: 0,
        sizes: {
            thumbnail: {
                width: 0,
                height: 0,
                mimeType: "",
                filesize: 0,
                filename: "",
                url: ""
            },
            sixteenByNineMedium: {
                width: 0,
                height: 0,
                mimeType: "",
                filesize: 0,
                filename: "",
                url: ""
            }
        },
        createdAt: "",
        updatedAt: "",
        url: ""
    },
    headerImg: {
        id: "",
        filename: "",
        mimeType: "",
        filesize: 0,
        width: 0,
        height: 0,
        createdAt: "",
        updatedAt: "",
        url: ""
    },
    social: [
        {
            name: "",
            img: "",
            id: ""
        },
    ],
    state: false

}

const configSlice = createSlice({
    name: 'config',
    initialState: {
        page: {
            id: "",
            title: "",
            description: "",
            logo: {
                id: "",
                filename: "",
                mimeType: "",
                filesize: 0,
                width: 0,
                height: 0,
                sizes: {
                    thumbnail: {
                        width: 0,
                        height: 0,
                        mimeType: "",
                        filesize: 0,
                        filename: "",
                        url: ""
                    },
                    sixteenByNineMedium: {
                        width: 0,
                        height: 0,
                        mimeType: "",
                        filesize: 0,
                        filename: "",
                        url: ""
                    }
                },
                createdAt: "",
                updatedAt: "",
                url: ""
            },
            headerImg: {
                id: "",
                filename: "",
                mimeType: "",
                filesize: 0,
                width: 0,
                height: 0,
                createdAt: "",
                updatedAt: "",
                url: ""
            },
            social: [
                {
                    name: "",
                    img: "",
                    id: ""
                },
            ],
            state: false
        }


    },
    reducers: {
        todoAdded(state, action) {
            // ✅ This "mutating" code is okay inside of createSlice!
            state.entities.push(action.payload)
        },
        getConfigActive(state, action) {
            state.page = action.payload
        },
        configLoading(state, action) {
            return {
                ...state,
                status: 'loading'
            }
        }
    }
})

export const { configLoading, getConfigActive } = configSlice.actions

export default configSlice.reducer