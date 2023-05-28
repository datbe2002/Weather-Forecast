import { useEffect, useState } from 'react'
import APIComponent from './hooks/APIComponent'
import axios from '../src/apis/OpenWeatherAPI'
import './App.css'
import BoxContainer from './Components/BoxContainer'
import { useDispatch } from 'react-redux'
import { getAllWeatherDataByCityName } from './redux/slice/weatherSlice'

function App() {
  // const [student, error, loading] = APIComponent({
  //   axiosInstance: axios,
  //   method: 'GET',
  //   url: '/user/users',
  //   requesConfig: {}
  // })

  // console.log(student)
  // console.log(error)
  // console.log(loading)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllWeatherDataByCityName({ location: 'vietnam' }))
  }, [])
  return (
    <div className='App'>
      <BoxContainer />
    </div>
  )
}

export default App
