import { Input } from 'antd'
import React from 'react'
import '../styles/InputLocation.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


const InputLocation = ({ placeholder }) => {
    return (
        <div className='location-input-container'>
            <input className="input-field" placeholder={placeholder} />

            <span className="input-prefix-icon"><FontAwesomeIcon icon={faLocationDot} /></span>
        </div>
    )
}

export default InputLocation