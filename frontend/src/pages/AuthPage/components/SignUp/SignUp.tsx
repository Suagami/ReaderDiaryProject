import React, { useCallback, useEffect, useState } from 'react'
import Input from '../../../../UI/Input/Input'
import useRegister from '../../../../hooks/auth/useRegister'
import Button from '../../../../UI/Button/Button'

import s from './SignUp.module.css'
import Tooltip from '../../../../UI/Tooltip/Tooltip'

type SignUpProps = {
  className?: string
  setIsLogIn: (T: boolean) => void
}

const SignUp: React.FC<SignUpProps> = (props) => {
  const { className, setIsLogIn } = props

  const [nameField, setNameField] = useState<string>('')
  const [mailField, setMailField] = useState<string>('')
  const [passField, setPassField] = useState<string>('')
  const [passCheckField, setPassCheckField] = useState<string>('')

  const { register, error, data } = useRegister(mailField, nameField, passField)

  const handleClick = useCallback(async () => {
    await register()
  }, [nameField, mailField, passField, passCheckField])

  useEffect(() => {
    if (data) {
      setIsLogIn(true)
    }
  }, [data])

  return (
    <div className={className}>
      <Input
        className={s.inputWrapper}
        placeholder="Имя пользователя"
        setField={setNameField}
        fieldValue={nameField}
      />
      <Input
        className={s.inputWrapper}
        placeholder="Email"
        setField={setMailField}
        fieldValue={mailField}
      />
      <Input
        className={s.inputWrapper}
        placeholder="Введите пароль"
        setField={setPassField}
        fieldValue={passField}
      />
      <Input
        className={s.inputWrapper}
        placeholder="Подтвердите пароль"
        setField={setPassCheckField}
        fieldValue={passCheckField}
      />
      <Button
        className={s.inputWrapper}
        text="ЗАРЕГИСТИРОВАТЬСЯ"
        style="black"
        onClick={() => handleClick()}
      />
      {error && <Tooltip text={`Ошибка: ${error}`} />}
    </div>
  )
}

export default SignUp
