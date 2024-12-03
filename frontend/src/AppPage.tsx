import React from 'react'
import { Route, Routes } from 'react-router-dom'

import MainLayout from './layouts/MainLayout/MainLAyout'
import AuthLayout from './layouts/AuthLayout/AuthLayout'

import s from './AppPage.module.css'

const AppPage: React.FC = () => {
  return (
    <div className={s.mainAppWrapper}>
      <Routes>
        <Route path="/auth" element={<AuthLayout />} />
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </div>
  )
}

export default AppPage
