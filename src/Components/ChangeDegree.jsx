import Typography from 'antd/es/typography/Typography'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllWeatherDataByCityNameCelcius, inCelsius, inFahrenheit } from '../redux/slice/weatherSlice';

const ChangeDegree = () => {
    const [active, setActive] = useState(1);

    const dispatch = useDispatch()

    const location = useSelector(state => state.weather.location)

    const handleChangeColor = (id) => {
        setActive(id);
        if (id === 1) {
            //api call here
            dispatch(inCelsius('metric'))
            dispatch(getAllWeatherDataByCityNameCelcius({ location, units: 'metric' }))
            setActive(id)
        } else {
            //api call
            dispatch(inFahrenheit('imperial'))
            dispatch(getAllWeatherDataByCityNameCelcius({ location, units: 'imperial' }))
            setActive(id)
        }
    };
    return (
        <div className='deg-changing'>
            <div className={active === 1 ? 'metric active' : 'metric'} onClick={() => handleChangeColor(1)}>
                °C
            </div>

            <div className={active === 2 ? 'imperial active' : 'imperial'} onClick={() => handleChangeColor(2)}>
                °F
            </div>
        </div>
    )
}

export default ChangeDegree