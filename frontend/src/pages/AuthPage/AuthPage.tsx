import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useHasAuth from '../../hooks/auth/useHasAuth'

import LogIn from './components/LogIn/LogIn'
import SignUp from './components/SignUp/SignUp'
import ButtonText from '../../UI/ButtonText/ButtonText'

import s from './AuthPage.module.css'

const AuthPage: React.FC = () => {
  const [isLogIn, setIsLogIn] = useState<boolean>(true)
  const { hasAuth, setHasAuth } = useHasAuth()

  return (
    <div className={s.authWrapper}>
      <div className={s.authBackgroundWindow}></div>
      <div className={s.authWindow}>
        <img className={s.icon} src="../../../public/imges/pen.png" />
        <div className={s.title}>{isLogIn ? 'Войти' : 'Регистрация'}</div>
        <div className={s.subTitle}>
          {isLogIn ? 'Пожалуйста войдите в систему' : 'Зарегистрируйтесь'}
        </div>
        {isLogIn ? <LogIn /> : <SignUp />}
        <ButtonText
          className={s.subTitle}
          onClick={() => setIsLogIn(!isLogIn)}
          text={isLogIn ? 'Зарегистрироваться' : 'Войти'}
        />
      </div>
    </div>
  )
}

export default AuthPage
