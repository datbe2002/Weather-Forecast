import React from 'react'

const Image = ({ data }) => {
    return (
        <img className='icon-weather-card' src={data.pci} height={65} width={65} alt="pic" />
    )
}

export default Image