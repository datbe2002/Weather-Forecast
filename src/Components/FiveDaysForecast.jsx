import { Typography } from 'antd'
import React from 'react'
import WeatherCard from './WeatherCard'

const FiveDaysForecast = () => {
    return (
        <div className='five-day-forecast'>
            {/* <Typography.Title className='title-forecast'>
                FIVE DAYS FORECAST
            </Typography.Title> */}
            <WeatherCard />
        </div>
    )
}

export default FiveDaysForecast