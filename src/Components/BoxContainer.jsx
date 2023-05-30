import { Col, Row } from 'antd'
import React, { useEffect } from 'react'
import ForeCast from './ForeCast'
import Detail from './Detail'
import { useDispatch, useSelector } from 'react-redux'
import { defaultLocation } from '../env'
import { getAllWeatherDataByCityNameCelcius } from '../redux/slice/weatherSlice'
import '../App.css'

const BoxContainer = () => {

    const dispatch = useDispatch()


    const units = useSelector(state => state.weather.degreeCondition)

    useEffect(() => {
        dispatch(getAllWeatherDataByCityNameCelcius({ location: defaultLocation, units }))
    }, [])

    return (
        <div className='container'>
            <Row style={{ height: '100vh', borderRadius: '10px' }}>
                <Col span={16}>
                    <ForeCast />
                </Col>
                <Col span={8}>
                    <Detail />
                </Col>

            </Row>
        </div>
    )
}

export default BoxContainer