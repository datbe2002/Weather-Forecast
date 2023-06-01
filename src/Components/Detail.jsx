import { Divider, Switch } from 'antd'
import React from 'react'
import InputLocation from './InputLocation'
import MainTempurature from './MainTempurature'
import FiveDaysForecast from './FiveDaysForecast'
import '../styles/InputLocation.scss'
import { useSelector } from 'react-redux'

const Detail = () => {

    const units = useSelector((state) => state.weather.degreeCondition)

    const { weatherDataCelsius } = useSelector((state) => state.weather)

    const name = weatherDataCelsius?.name
    const temp = Math.ceil(weatherDataCelsius?.main?.temp)
    const description = weatherDataCelsius?.weather[0]?.description


    return (
        <div className='detailee'>
            <InputLocation placeholder={'Search'} units={units} />
            {/* <Divider /> */}
            <MainTempurature name={name} temp={temp} description={description} units={units} />
            <Divider />
            <FiveDaysForecast />
            {/* <div className="bottom">Make by Truong Tan Dat</div> */}
        </div>
    )
}

export default Detail