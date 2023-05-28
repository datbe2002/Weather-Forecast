import { Typography } from 'antd'
import React from 'react'

const MainTempurature = () => {
    return (
        <div className='main-temp'>
            <Typography.Title style={{ fontFamily: 'Roboto', fontSize: '4.6rem' }}>11°C</Typography.Title>
            <Typography style={{ fontFamily: 'Roboto' }}>
                <span className='city'>TPHCM</span> <span className='description'>few clouds</span>
            </Typography>

        </div>
    )
}

export default MainTempurature