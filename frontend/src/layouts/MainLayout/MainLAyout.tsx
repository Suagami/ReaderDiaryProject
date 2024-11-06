import React from 'react'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage'
import LastReadPage from '../../pages/LastReadPage/LastReadPage'
import WantReadPage from '../../pages/WantReadPage/WantReadPage'
import ReadNowPage from '../../pages/ReadNowPage/ReadNowPage'

const MainLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/main" element={<HomePage />} />
        <Route path="/lastRead" element={<LastReadPage />} />
        <Route path="/wantRead" element={<WantReadPage />} />
        <Route path="/readNow" element={<ReadNowPage />} />
      </Routes>
    </div>
  )
}

export default MainLayout
