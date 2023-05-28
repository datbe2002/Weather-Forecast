import { Divider, Switch } from 'antd'
import React from 'react'
import InputLocation from './InputLocation'
import MainTempurature from './MainTempurature'
import FiveDaysForecast from './FiveDaysForecast'
import '../styles/InputLocation.scss'

const Detail = () => {
    const handleClick = (e) => {
        console.log(e)
    }
    return (
        <div className='detailee'>
            <InputLocation placeholder={'Search city'} />
            <Divider />
            <MainTempurature />
            <Divider />
            <FiveDaysForecast />
        </div>
    )
}

export default Detail