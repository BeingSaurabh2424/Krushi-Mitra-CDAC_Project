import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './pages/LoginPage'
import Register from './pages/Register'
import { ToastContainer } from 'react-toastify'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Register/>
     {/* <LoginPage/> */}

     <ToastContainer />
    </>
  )
}

export default App
