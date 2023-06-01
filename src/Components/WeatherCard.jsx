import React, { useEffect, useState } from 'react'
import pci1 from '../assets/iconWeather/04d@2x.png'
import pci2 from '../assets/iconWeather/04d@2x.png'
import pci3 from '../assets/iconWeather/04d@2x.png'
import pci4 from '../assets/iconWeather/04d@2x.png'
import pci5 from '../assets/iconWeather/04d@2x.png'
import Image from './Image'
import { useDispatch, useSelector } from 'react-redux'
import { fiveDayDataEveryDay, getWeatherForecast5days, setActiveFor5Day } from '../redux/slice/weatherSlice'
import { convertDate, groudUp } from '../tool/Handle'
const WeatherCard = () => {

    const units = useSelector(state => state.weather.degreeCondition)

    const { activeFor5day } = useSelector(state => state.weather)

    const weatherData = useSelector(state => state.weather.weatherNextFiveDate)

    const { location } = useSelector(state => state.weather)

    const handleClick = (data, index) => {
        const newDataObj = {
            ...data,
            name: location
        }
        dispatch(setActiveFor5Day(index));
        dispatch(fiveDayDataEveryDay(newDataObj))
    };

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getWeatherForecast5days({ location, units }))
    }, [location, units])


    const tempFunc = (temp) => {
        const newTemp = groudUp(temp)
        return newTemp
    }

    const date = (data) => {
        const newD = convertDate(data)
        const datewithoutYear = newD.split(",")
        const newD2 = datewithoutYear[0].trim()
        return newD2
    }


    return (
        <div>

            {weatherData?.map((data, index) => (
                <div
                    key={index}
                    className={`weather-card-container ${activeFor5day === index ? 'active' : ''}`}
                    onClick={() => handleClick(data, index)}
                >
                    <Image data={data} />
                    <div className='infor'>
                        <div className="date-new">
                            {date(data.dt)}
                        </div>
                        <div className="des">
                            {data.weather[0].description}
                        </div>
                    </div>
                    <div className="date-next-temp">
                        <div className="date-high-temp">
                            <span>
                                {tempFunc(data.main.temp_max)}°

                            </span>
                        </div>
                        <div className="date-low-temp">
                            <span>
                                {tempFunc(data.main.temp_min)}°
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default WeatherCard