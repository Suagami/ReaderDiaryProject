import React from 'react'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage'

const MainLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default MainLayout
