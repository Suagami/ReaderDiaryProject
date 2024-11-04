import React, { useCallback, useState } from 'react'

import Input from '../../../../UI/Input/Input'

import s from './LogIn.module.css'

type LogInProps = {
  className?: string
}

const LogIn: React.FC<LogInProps> = (props) => {
  const { className } = props

  const [loginField, setLoginField] = useState<string>('')
  const [passField, setPassField] = useState<string>('')

  const handleClick = useCallback(() => {
    console.log(loginField, passField)
  }, [loginField, passField])

  return (
    <div className={className}>
      <div>Войти</div>
      <div>Пожалуйста войдите в систему</div>
      <Input placeholder="Логин" setField={setLoginField} />
      <Input placeholder="Пароль" setField={setPassField} />
      <button onClick={() => handleClick()}>Войти</button>
    </div>
  )
}

export default LogIn
