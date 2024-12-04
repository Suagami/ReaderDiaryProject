import React from 'react'
import AuthPage from '../../pages/AuthPage/AuthPage'

import s from './AuthLayout.module.css'

const AuthLayout: React.FC = () => {
  return (
    <div className={s.authLayoutWrapper}>
      <AuthPage />
    </div>
  )
}

export default AuthLayout
