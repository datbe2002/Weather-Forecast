import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Typography } from 'antd'
import React from 'react'
import { capitalizeFirstLetters } from '../tool/Handle'

const MainTempurature = ({ name, temp, description, units }) => {

    const capLetter = (des) => {
        if (des) {
            const c = capitalizeFirstLetters(des)
            return c
        }

    }

    return (
        <div className='main-temp'>
            <Typography.Title className='main-temp-display' style={{ fontSize: '4.6rem' }}>{temp}{units === 'metric' ? '°C' : '°F'}</Typography.Title>
            <Typography className='under-citydes' style={{ display: 'flex', flexDirection: 'column' }}>
                <span className='city'>
                    <FontAwesomeIcon style={{ paddingRight: '10px' }} icon={faLocationDot} />
                    {name}
                </span>
                <span className='description'>{capLetter(description)}</span>
            </Typography >

        </div >
    )
}

export default MainTempurature