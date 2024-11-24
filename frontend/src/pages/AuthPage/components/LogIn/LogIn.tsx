import React, { useCallback, useState } from 'react'

import Input from '../../../../UI/Input/Input'

import s from './LogIn.module.css'
import Button from '../../../../UI/Button/Button'

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
      <Input
        className={s.inputWrapper}
        placeholder="Логин"
        setField={setLoginField}
      />
      <Input
        className={s.inputWrapper}
        placeholder="Пароль"
        setField={setPassField}
      />
      <Button
        className={s.inputWrapper}
        text="Войти"
        style="black"
        onClick={() => handleClick()}
      />
    </div>
  )
}

export default LogIn
