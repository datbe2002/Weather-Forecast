import { Col, Row } from 'antd'
import React from 'react'
import ForeCast from './ForeCast'
import Detail from './Detail'


const BoxContainer = () => {
    return (
        <div className='container'>
            <Row style={{ margin: '50px', height: '90vh', borderRadius: '10px', border: '10px solid #BCBFBA' }}>
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