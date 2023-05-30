
import './App.css'
import BoxContainer from './Components/BoxContainer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <div className='App'>
      <BoxContainer />
      <ToastContainer />
    </div>
  )
}

export default App
