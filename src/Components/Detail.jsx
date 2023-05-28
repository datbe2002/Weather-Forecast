import { Divider } from 'antd'
import React from 'react'
import InputLocation from './InputLocation'
import MainTempurature from './MainTempurature'
import FiveDaysForecast from './FiveDaysForecast'

const Detail = () => {
    return (
        <>
            <InputLocation placeholder={'Search city'} />
            <Divider />
            <MainTempurature />
            <Divider />
            <FiveDaysForecast />
        </>
    )
}

export default Detail