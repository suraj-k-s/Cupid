import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import TC from './tc'
import Question from './Question'

const NAV = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/TC" element={<TC />} />
      <Route path="/Question/:id" element={<Question />} />
    </Routes>
  )
}

export default NAV
