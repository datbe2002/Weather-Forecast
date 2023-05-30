import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Typography } from 'antd'
import React from 'react'

const MainTempurature = ({ name, temp, description, units }) => {
    const metric = 'metric'
    return (
        <div className='main-temp'>
            <Typography.Title className='main-temp-display' style={{ fontSize: '4.6rem' }}>{temp}{units === 'metric' ? '°C' : '°F'}</Typography.Title>
            <Typography className='under-citydes' style={{ display: 'flex', flexDirection: 'column' }}>
                <span className='city'>
                    <FontAwesomeIcon style={{ paddingRight: '10px' }} icon={faLocationDot} />
                    {name}
                </span>
                <span className='description'>{description}</span>
            </Typography >

        </div >
    )
}

export default MainTempurature