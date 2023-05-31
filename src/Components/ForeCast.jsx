import React, { useEffect, useState } from 'react'
import '../styles/Forecast.scss'
import { Divider } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureHigh, faTemperatureLow, faWind, faWater } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { convertDate, groudUp, weatherIcon } from '../tool/Handle'
import Timer from './Timer'
import { getAllWeatherDataByCityNameCelcius, setActive, setActiveFor5Day, setNewLocation } from '../redux/slice/weatherSlice'
import { getWeatherForecast5days } from '../redux/slice/weatherSlice'



const ForeCast = () => {
    const { weatherDataCelsius } = useSelector((state) => state.weather)

    const units = useSelector((state) => state.weather.degreeCondition)

    const condition_weather = weatherDataCelsius?.weather[0].main
    const tempMin = groudUp(weatherDataCelsius?.main.temp_min)
    const tempMax = groudUp(weatherDataCelsius?.main.temp_max)
    const humidity = groudUp(weatherDataCelsius?.main.humidity)
    const windSpeed = groudUp(weatherDataCelsius?.wind.speed)
    const formattedDate = convertDate(weatherDataCelsius?.dt, 'long')
    const icon = weatherIcon(weatherDataCelsius?.weather[0].icon)
    const { active } = useSelector(state => state.weather)
    const city = ['London', 'New York', 'Paris', 'Moscow', 'Berlin', 'Beijing']

    const dispatch = useDispatch()
    const { change } = useSelector((state) => state.weather)


    useEffect(() => {
        dispatch(setActive(null))
    }, [change])

    const handleChangeCity = (location, index) => {
        dispatch(getAllWeatherDataByCityNameCelcius({ location, units }))
        dispatch(getWeatherForecast5days({ location, units }))
        dispatch(setNewLocation(location))
        dispatch(setActive(index))
        dispatch(setActiveFor5Day(null))
    }
    return (
        <div className='forecast-details'>
            <div className="dateNtime">
                <div className="date">
                    {formattedDate}
                </div>
                <div className="specific-time">
                    <Timer timestamp={weatherDataCelsius?.dt} />

                </div>
            </div>
            <Divider />

            <div className="condition-weather">
                <img width={200} height={200} src={icon} alt='image' />

                {condition_weather}
            </div>
            <Divider />

            <div className="tempurature">
                <div className="high-tempurature">
                    <FontAwesomeIcon icon={faTemperatureHigh} />  High: <span className='bold'>
                        {tempMax}{units === 'metric' ? '°C' : '°F'}
                    </span>
                </div>
                <div className="low-tempurature">
                    <FontAwesomeIcon icon={faTemperatureLow} />  Low: <span className='bold'>
                        {tempMin}{units === 'metric' ? '°C' : '°F'}
                    </span>
                </div>
                <div className="humidity">
                    <FontAwesomeIcon icon={faWater} />  Humidity: <span className='bold'>
                        {humidity}%
                    </span>
                </div>
                <div className="wind">
                    <FontAwesomeIcon icon={faWind} />  Wind: <span className='bold'>
                        {windSpeed}{units === 'metric' ? 'km/h' : 'mph'}
                    </span>
                </div>
            </div>
            <Divider />
            <div className="city-world">
                <div className="city-container">
                    {city.map((c, index) =>
                        <div key={index} className={`city-list ${active === index ? 'active' : ''}`}
                            onClick={() => handleChangeCity(c, index)}
                        >{c}</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ForeCast