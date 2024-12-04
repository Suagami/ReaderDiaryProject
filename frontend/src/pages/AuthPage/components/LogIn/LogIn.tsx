import React, { useCallback, useState } from 'react'

import Input from '../../../../UI/Input/Input'

import s from './LogIn.module.css'
import Button from '../../../../UI/Button/Button'
import useLogIn from '../../../../hooks/auth/useLogIn'
import Tooltip from '../../../../UI/Tooltip/Tooltip'

type LogInProps = {
  className?: string
}

const LogIn: React.FC<LogInProps> = (props) => {
  const { className } = props

  const [loginField, setLoginField] = useState<string>('')
  const [passField, setPassField] = useState<string>('')

  const { logIn, error } = useLogIn(loginField, passField)

  const handleClick = useCallback(async () => {
    await logIn()
  }, [loginField, passField])

  return (
    <div className={className}>
      <Input
        className={s.inputWrapper}
        placeholder="Логин"
        setField={setLoginField}
        fieldValue={loginField}
      />
      <Input
        className={s.inputWrapper}
        placeholder="Пароль"
        setField={setPassField}
        fieldValue={passField}
        pass
      />
      <Button
        className={s.inputWrapper}
        text="Войти"
        style="black"
        onClick={() => handleClick()}
      />
      {error && <Tooltip text={`Ошибка: ${error}`} />}
    </div>
  )
}

export default LogIn
