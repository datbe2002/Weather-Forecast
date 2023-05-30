import React, { useState } from 'react'
import pci1 from '../assets/iconWeather/04d@2x.png'
import pci2 from '../assets/iconWeather/04d@2x.png'
import pci3 from '../assets/iconWeather/04d@2x.png'
import pci4 from '../assets/iconWeather/04d@2x.png'
import pci5 from '../assets/iconWeather/04d@2x.png'
import Image from './Image'
import { useSelector } from 'react-redux'
const WeatherCard = () => {

    const units = useSelector(state => state.weather.degreeCondition)

    const [activeCardIndex, setActiveCardIndex] = useState(null);

    const handleClick = (index) => {
        setActiveCardIndex(index);
    };

    const weatherData = [
        { pci: pci1 },
        { pci: pci2 },
        { pci: pci3 },
        { pci: pci4 },
        { pci: pci5 },
    ];

    const dateTempMax = 0
    const dateTempMin = 10
    return (
        <div>

            {weatherData.map((data, index) => (
                <div
                    key={index}
                    className={`weather-card-container ${activeCardIndex === index ? 'active' : ''}`}
                    onClick={() => handleClick(index)}
                >
                    <Image data={data} />
                    <div className='infor'>
                        <div className="date-new">
                            Sun, April 6
                        </div>
                        <div className="des">
                            clouds few
                        </div>
                    </div>
                    <div className="date-next-temp">
                        <div className="date-high-temp">
                            <span>
                                {/* {data.dateTempMax} */}
                                20°
                            </span>
                        </div>
                        <div className="date-low-temp">
                            <span>
                                {/* {data.dateTempMin} */}
                                40°
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        // <div className='weather-card-container active'>
        //     <img className='icon-weather-card' src={pci} height={65} width={65} alt="pic" />
        // </div>
    )
}

export default WeatherCard