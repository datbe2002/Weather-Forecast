import { Typography } from 'antd'
import React from 'react'
import WeatherCard from './WeatherCard'

const FiveDaysForecast = () => {
    return (
        <div className='five-day-forecast'>
            <WeatherCard />
        </div>
    )
}

export default FiveDaysForecast