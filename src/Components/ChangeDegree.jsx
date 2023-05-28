import Typography from 'antd/es/typography/Typography'
import React, { useState } from 'react'

const ChangeDegree = () => {
    const [active, setActive] = useState(1);

    const handleChangeColor = (id) => {
        setActive(id);
        if (id === 1) {
            console.log("°C")
            //api call here
            setActive(id)
        } else {
            console.log("°F")
            //api call
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