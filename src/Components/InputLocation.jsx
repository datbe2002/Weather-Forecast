import React, { useEffect, useState } from 'react'
import '../styles/InputLocation.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import ChangeDegree from './ChangeDegree'
import { useDispatch, useSelector } from 'react-redux'
import { getAllWeatherDataByCityNameCelcius } from '../redux/slice/weatherSlice'
import { defaultLocation } from '../env'


const InputLocation = ({ placeholder, units }) => {

    const [location, setLocation] = useState(defaultLocation)

    const dispatch = useDispatch()


    // console.log(location)


    const handleInputCity = (e) => {
        if (e.key === 'Enter') {
            const cityName = e.target.value
            setLocation(cityName)
            dispatch(getAllWeatherDataByCityNameCelcius({ location: cityName, units }))
        }
    }

    return (
        <div className='location-input-container'>
            <input onKeyDown={handleInputCity} className="input-field" placeholder={placeholder} />
            <span className="input-prefix-icon"><FontAwesomeIcon icon={faLocationDot} /></span>
            <ChangeDegree location={location} />
        </div>
    )
}

export default InputLocation