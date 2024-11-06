import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import LogIn from './components/LogIn/LogIn'
import SignUp from './components/SignUp/SignUp'

import s from './AuthPage.module.css'
import useHasAuth from '../../hooks/auth/useHasAuth'

const AuthPage: React.FC = () => {
  const [isLogIn, setIsLogIn] = useState<boolean>(true)
  const { hasAuth, setHasAuth } = useHasAuth()

  return (
    <div className={s.authWrapper}>
      {/* -------------------------------------------------------------------- */}

      <button onClick={() => setHasAuth(true)}>
        <Link to="/home">Тестовый вход</Link>
      </button>
      {/* -------------------------------------------------------------------- */}
      <div className={s.authBackgroundWindow}></div>
      <div className={s.authWindow}>
        <img className={s.icon} src="../../../public/imges/pen.png" />
        {isLogIn ? <LogIn /> : <SignUp />}
        <button onClick={() => setIsLogIn(!isLogIn)}>
          {isLogIn ? 'Зарегистрироваться' : 'Войти'}
        </button>
      </div>
    </div>
  )
}

export default AuthPage
