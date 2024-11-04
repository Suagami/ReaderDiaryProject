import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import useHasAuth from './hooks/auth/useHasAuth'

import AuthPage from './pages/AuthPage/AuthPage'
import MainPage from './pages/MainPage/MainPage'

import s from './AppPage.module.css'

const AppPage: React.FC = () => {
  const { hasAuth } = useHasAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!hasAuth) {
      navigate('/auth')
    }
  }, [hasAuth])

  return (
    <div className={s.mainAppWrapper}>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  )
}

export default AppPage
