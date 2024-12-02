import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import useHasAuth from './hooks/auth/useHasAuth'

import MainLayout from './layouts/MainLayout/MainLAyout'
import AuthLayout from './layouts/AuthLayout/AuthLayout'

import s from './AppPage.module.css'

const AppPage: React.FC = () => {
  const { hasAuth } = useHasAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!hasAuth) {
      navigate('/auth')
    } else {
      navigate('/')
    }
  }, [hasAuth])

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
