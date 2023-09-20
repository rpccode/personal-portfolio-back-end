import { configureStore } from '@reduxjs/toolkit'
import BannerSlice from './Slices/banner/BannerSlice'
import ConfigSlice from './Slices/Config/ConfigSlice'


const store = configureStore({
    reducer: {
        // Define a top-level state field named `todos`, handled by `todosReducer`
        config: ConfigSlice,
        banner: BannerSlice

    }
})

export default store