import React from 'react'
import '../styles/Forecast.scss'
import { Divider } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureHigh, faTemperatureLow, faWind, faWater } from '@fortawesome/free-solid-svg-icons'
const ForeCast = () => {
    return (
        <div className='forecast-details'>
            <div className="dateNtime">
                <div className="date">
                    Tuesday 21 April 2023
                </div>
                <div className="specific-time">
                    11:00
                </div>
            </div>
            <Divider />
            <div className="condition-weather">
                HEAVY RAIN
            </div>
            <Divider />

            <div className="tempurature">
                <div className="high-tempurature">
                    <FontAwesomeIcon icon={faTemperatureHigh} />  High:<span className='bold'> 50</span>
                </div>
                <div className="low-tempurature">
                    <FontAwesomeIcon icon={faTemperatureLow} />  Low:<span className='bold'> 50</span>
                </div>
                <div className="humidity">
                    <FontAwesomeIcon icon={faWater} />  Humidity: <span className='bold'> 50%</span>
                </div>
                <div className="wind">
                    <FontAwesomeIcon icon={faWind} />  Wind:<span className='bold'> 50 MPH</span>
                </div>
            </div>
            <Divider />
        </div>
    )
}

export default ForeCast