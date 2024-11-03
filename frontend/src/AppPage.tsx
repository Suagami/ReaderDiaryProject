import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import useHasAuth from './hooks/auth/useHasAuth'

import AuthPage from './pages/AuthPage/AuthPage'
import MainPage from './pages/MainPage/MainPage'

const AppPage: React.FC = () => {
  const { hasAuth } = useHasAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!hasAuth) {
      navigate('/auth')
    }
  }, [hasAuth])

  return (
    <>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  )
}

export default AppPage
