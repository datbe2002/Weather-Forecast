import { Input } from 'antd'
import React from 'react'
import '../styles/InputLocation.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import ChangeDegree from './ChangeDegree'


const InputLocation = ({ placeholder }) => {
    return (
        <div className='location-input-container'>
            <input className="input-field" placeholder={placeholder} />
            <span className="input-prefix-icon"><FontAwesomeIcon icon={faLocationDot} /></span>
            <ChangeDegree />
        </div>
    )
}

export default InputLocation