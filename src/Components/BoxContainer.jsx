import { Col, Row } from 'antd'
import React, { useEffect } from 'react'
import ForeCast from './ForeCast'
import Detail from './Detail'
import { useDispatch, useSelector } from 'react-redux'
import { getAllWeatherDataByCityNameCelcius } from '../redux/slice/weatherSlice'
import '../App.css'

const BoxContainer = () => {

    const dispatch = useDispatch()
    const units = useSelector(state => state.weather.degreeCondition)
    const { location } = useSelector(state => state.weather)

    useEffect(() => {
        dispatch(getAllWeatherDataByCityNameCelcius({ location: location, units }))
    }, [])

    return (
        <div className='container'>
            <Row style={{ borderRadius: '10px' }}>
                <Col>
                    <ForeCast />
                </Col>
                <Col>
                    <Detail />
                </Col>

            </Row>
        </div>
    )
}

export default BoxContainer