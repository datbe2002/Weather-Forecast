import Typography from 'antd/es/typography/Typography'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getAllWeatherDataByCityNameCelcius, inCelsius, inFahrenheit } from '../redux/slice/weatherSlice';

const ChangeDegree = ({ location }) => {
    const [active, setActive] = useState(1);

    const dispatch = useDispatch()

    const handleChangeColor = (id) => {
        setActive(id);
        if (id === 1) {
            // console.log("°C")
            //api call here
            dispatch(inCelsius('metric'))
            dispatch(getAllWeatherDataByCityNameCelcius({ location, units: 'metric' }))
            setActive(id)
        } else {
            // console.log("°F")
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