import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import TC from './tc'


const NAV = () => {
  return (
  <Routes>
    <Route path='/' element={<App/>} />
    <Route path='/TC' element={<TC/>} />
  </Routes>
  )
}

export default NAV