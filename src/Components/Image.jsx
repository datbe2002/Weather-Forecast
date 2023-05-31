import React from 'react'
import { weatherIcon } from '../tool/Handle'

const Image = ({ data }) => {


    const icon = weatherIcon(data?.weather[0].icon)


    return (
        <img className='icon-weather-card' src={icon} height={65} width={65} alt="pic" />
    )
}

export default Image