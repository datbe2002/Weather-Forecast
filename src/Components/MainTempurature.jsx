import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Typography } from 'antd'
import React from 'react'

const MainTempurature = ({ name, temp, description, units }) => {
    const metric = 'metric'
    return (
        <div className='main-temp'>
            <Typography.Title style={{ fontFamily: 'Roboto', fontSize: '4.6rem', color: '#FAFAFA' }}>{temp}{units === 'metric' ? '°C' : '°F'}</Typography.Title>
            <Typography style={{ fontFamily: 'Roboto', color: '#FAFAFA', display: 'flex', flexDirection: 'column' }}>
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