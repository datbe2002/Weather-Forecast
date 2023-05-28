import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from './slice/weatherSlice'
export const store = configureStore({
    reducer: {
        weather: weatherReducer,
    },
})