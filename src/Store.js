import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from './slices/AuthSlice'
import {ApiSlice} from './slices/ApiSlice'

const store = configureStore({
    reducer: {
        auth: AuthReducer,
        [ApiSlice.reducerPath]: ApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(ApiSlice.middleware),
    devTools: true
    
});

export default store