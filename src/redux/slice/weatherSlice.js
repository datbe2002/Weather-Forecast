import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

import axiosCustom from "../../apis/OpenWeatherAPI";
import { APP_ID } from "../../env";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

//https://api.openweathermap.org/data/2.5/weather?q=vietnam&appid=52310ba051cdbb72135c5b6affd7ab35&units=imperial

const initialState = {
    weatherDataCelsius: null,
    // weatherDataFahrenheit: [],
    degreeCondition: 'metric',
    weatherNextFiveDate: null,
    location: 'Vietnam',
    change: null,
    active: null,
    error: '',
    loading: null,
    activeFor5day: null
}


export const getAllWeatherDataByCityNameCelcius = createAsyncThunk(
    "weather/cityNameCelcius",
    async (params, thunkAPI) => {
        const { location, units } = params
        try {
            const res = await axiosCustom.get(`/weather?q=${location}&appid=${APP_ID}&units=${units}`)
            // if()
            console.log(res.data)
            thunkAPI.dispatch(setNewLocation(location))
            return res.data

        } catch (error) {

            toast.error(error.response.data.message, {
                position: toast.POSITION.TOP_LEFT
            });
            return error.response.data

        }
    }
)
export const getWeatherForecast5days = createAsyncThunk(
    "weather/fivedayforecast",
    async (params, thunkAPI) => {
        const { location, units } = params
        try {
            const res = await axiosCustom.get(`/forecast?q=${location}&appid=${APP_ID}&units=${units}`)
            const newData = res.data.list.filter(day => day.dt_txt.includes("00:00:00"))

            console.log(newData)
            return newData
        } catch (error) {
            console.log(error.response.data)
        }
    }
)
export const fiveDayDataEveryDay = createAsyncThunk(
    'weather/dataoffiveday',
    async (params, thunkAPI) => {
        console.log(params)
        const { dt, main, weather, wind, name } = params
        try {
            return { dt, main, weather, wind, name }
        } catch (error) {

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
        },
        setNewLocation: (state, action) => {
            state.location = action.payload
        },

        setActive: (state, action) => {
            state.active = action.payload
        },
        setActiveFor5Day: (state, action) => {
            state.activeFor5day = action.payload
        },
        setChange: (state, action) => {
            state.change = action.payload

        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllWeatherDataByCityNameCelcius.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllWeatherDataByCityNameCelcius.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload.cod == 404) {
                    state.error = action.payload
                }
                if (action.payload.cod == 200) {
                    state.weatherDataCelsius = action.payload;
                }
            })
            .addCase(getAllWeatherDataByCityNameCelcius.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })

            //---

            .addCase(getWeatherForecast5days.pending, (state) => {
                state.loading = true;
            })
            .addCase(getWeatherForecast5days.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                if (action.payload) {
                    state.weatherNextFiveDate = action.payload;
                }
            })
            .addCase(getWeatherForecast5days.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
            //---

            .addCase(fiveDayDataEveryDay.pending, (state) => {
                state.loading = true;
            })
            .addCase(fiveDayDataEveryDay.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                console.log(action.payload)
                if (action.payload) {
                    state.weatherDataCelsius = action.payload;
                }
            })
            .addCase(fiveDayDataEveryDay.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
    }
})

const { reducer: weatherReducer, actions: { inCelsius, inFahrenheit, setNewLocation, setActive, setChange, setActiveFor5Day } } = weatherSlice;
export { inCelsius, inFahrenheit, setNewLocation, setActive, setChange, setActiveFor5Day, weatherReducer as default };