import React, { useEffect, useState } from 'react'
import '../styles/InputLocation.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import ChangeDegree from './ChangeDegree'
import { useDispatch, useSelector } from 'react-redux'
import { getAllWeatherDataByCityNameCelcius, setActive, setActiveFor5Day, setChange, setNewLocation } from '../redux/slice/weatherSlice'
import { toast } from 'react-toastify'


const InputLocation = ({ placeholder, units }) => {

    const dispatch = useDispatch()

    const handleInputCity = (e) => {
        if (e.key === 'Enter') {
            const cityName = e.target.value
            if (cityName !== '') {
                dispatch(setActive(null))
                dispatch(setChange(1))
                dispatch(setActiveFor5Day(null))
                dispatch(getAllWeatherDataByCityNameCelcius({ location: cityName, units }))

            } else {
                dispatch(setActiveFor5Day(null))
                toast.error("please provide a city name", {
                    position: toast.POSITION.TOP_LEFT
                })
            }

        }
    }
    return (
        <div className='location-input-container'>
            <input onKeyDown={handleInputCity} className="input-field" placeholder={placeholder} />
            <span className="input-prefix-icon"><FontAwesomeIcon icon={faLocationDot} /></span>
            <ChangeDegree />
        </div>
    )
}

export default InputLocation