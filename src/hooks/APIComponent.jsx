import React, { useEffect, useState } from 'react'

const APIComponent = (configOjb) => {
    const {
        axiosInstance,
        method,
        url,
        requestConfig = {}
    } = configOjb

    const [response, setResponse] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await axiosInstance[method.toLowerCase()](url, {
                    ...requestConfig
                })
                console.log(res)
                setResponse(res.data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }

        }
        fetchData()
    }, [])

    return [response, error, loading]

}

export default APIComponent