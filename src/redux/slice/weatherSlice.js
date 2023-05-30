import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axiosCustom from "../../apis/OpenWeatherAPI";
import { APP_ID } from "../../env";
import { toast } from "react-toastify";

//https://api.openweathermap.org/data/2.5/weather?q=vietnam&appid=52310ba051cdbb72135c5b6affd7ab35&units=imperial

const initialState = {
    weatherDataCelsius: null,
    // weatherDataFahrenheit: [],
    degreeCondition: 'metric',
    error: null,
    loading: null,
}


export const getAllWeatherDataByCityNameCelcius = createAsyncThunk(
    "weather/cityNameCelcius",
    async (params, thunkAPI) => {
        console.log(params)
        const { location, units } = params
        try {
            const res = await axiosCustom.get(`/weather?q=${location}&appid=${APP_ID}&units=${units}`)
            return res.data

        } catch (error) {
            toast.error(error.response.data.message, {
                position: toast.POSITION.TOP_RIGHT
            });
            console.log(error.response.data)
        }
    }
)


const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        inCelsius: (state, action) => {
            state.degreeCondition = action.payload
        },
        inFahrenheit: (state, action) => {
            state.degreeCondition = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllWeatherDataByCityNameCelcius.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllWeatherDataByCityNameCelcius.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                if (action.payload) {
                    state.weatherDataCelsius = action.payload;
                }
            })
            .addCase(getAllWeatherDataByCityNameCelcius.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })

        //---

        // .addCase(getAllWeatherDataByCityNameFahrenheit.pending, (state) => {
        //     state.loading = true;
        // })
        // .addCase(getAllWeatherDataByCityNameFahrenheit.fulfilled, (state, action) => {
        //     state.loading = false;
        //     state.error = false;
        //     state.weatherDataFahrenheit = action.payload;
        // })
        // .addCase(getAllWeatherDataByCityNameFahrenheit.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error = action.error;
        // })
    }
})

const { reducer: weatherReducer, actions: { inCelsius, inFahrenheit } } = weatherSlice;
export { inCelsius, inFahrenheit, weatherReducer as default };