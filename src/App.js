import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './Admin/App'
import Main from './Main/nav'
import Login from './Login/Login'



const App = () => {
  return (
  <Routes>
    <Route path='/' element={<Main/>} />
    <Route path='/Login/*' element={<Login/>} />
    <Route path='/Admin/*' element={<Admin/>} />
  </Routes>
  )
}

export default App