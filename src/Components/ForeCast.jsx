import React from 'react'
import '../styles/Forecast.scss'
import { Divider } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureHigh, faTemperatureLow, faWind, faWater } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { convertDate, groudUp, weatherIcon } from '../tool/Handle'



const ForeCast = () => {

    const { weatherDataCelsius } = useSelector((state) => state.weather)

    const units = useSelector((state) => state.weather.degreeCondition)

    const condition_weather = weatherDataCelsius?.weather[0].main
    const tempMin = groudUp(weatherDataCelsius?.main.temp_min)
    const tempMax = groudUp(weatherDataCelsius?.main.temp_max)
    const humidity = groudUp(weatherDataCelsius?.main.humidity)
    const windSpeed = groudUp(weatherDataCelsius?.wind.speed)
    const formattedDate = convertDate(weatherDataCelsius?.dt)

    const icon = weatherIcon(weatherDataCelsius?.weather[0].icon)

    return (
        <div className='forecast-details'>
            <div className="dateNtime">
                <div className="date">
                    {formattedDate}
                </div>
                <div className="specific-time">
                    11:00
                </div>
            </div>
            <Divider />
            <img src={icon} alt='image' />

            <div className="condition-weather">

                {condition_weather}
            </div>
            <Divider />

            <div className="tempurature">
                <div className="high-tempurature">
                    <FontAwesomeIcon icon={faTemperatureHigh} />  High: <span className='bold'>

                        {tempMax} {units === 'metric' ? '°C' : '°F'}
                    </span>
                </div>
                <div className="low-tempurature">
                    <FontAwesomeIcon icon={faTemperatureLow} />  Low: <span className='bold'>
                        {tempMin} {units === 'metric' ? '°C' : '°F'}
                    </span>
                </div>
                <div className="humidity">
                    <FontAwesomeIcon icon={faWater} />  Humidity: <span className='bold'>
                        {humidity}%
                    </span>
                </div>
                <div className="wind">
                    <FontAwesomeIcon icon={faWind} />  Wind: <span className='bold'>
                        {windSpeed} {units === 'metric' ? 'mps' : 'mph'}
                    </span>
                </div>
            </div>
            <Divider />
        </div>
    )
}

export default ForeCast