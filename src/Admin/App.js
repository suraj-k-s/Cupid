import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Dashboard from './Components/Dashboard'


const App = () => {
  return (
  <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/Home' element={<Dashboard/>} />
  </Routes>
  )
}

export default App