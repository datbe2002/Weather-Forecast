import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axiosCustom from "../../apis/OpenWeatherAPI";
import { APP_ID } from "../../env";

//https://api.openweathermap.org/data/2.5/weather?q=vietnam&appid=52310ba051cdbb72135c5b6affd7ab35&units=imperial

const initialState = {
    weatherData: [],
    error: null,
    loading: null,
}


export const getAllWeatherDataByCityName = createAsyncThunk(
    "weather/all",
    async (params, thunkAPI) => {
        const { location } = params
        try {
            const res = await axiosCustom.get(`/weather?q=${location}&appid=${APP_ID}`)
            return res.data
        } catch (error) {
            console.log(error.response.data)
        }
    }
)

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllWeatherDataByCityName.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllWeatherDataByCityName.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.weatherData = action.payload;
            })
            .addCase(getAllWeatherDataByCityName.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
    }
})

export const { reducer: weatherReducer } = weatherSlice;
export default weatherReducer