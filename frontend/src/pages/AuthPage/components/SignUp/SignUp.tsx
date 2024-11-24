import React, { useCallback, useState } from 'react'
import Input from '../../../../UI/Input/Input'
import useRegister from '../../../../hooks/auth/useRegister'
import Button from '../../../../UI/Button/Button'

import s from './SignUp.module.css'

type SignUpProps = {
  className?: string
}

const SignUp: React.FC<SignUpProps> = (props) => {
  const { className } = props

  const [nameField, setNameField] = useState<string>('')
  const [mailField, setMailField] = useState<string>('')
  const [passField, setPassField] = useState<string>('')
  const [passCheckField, setPassCheckField] = useState<string>('')

  const { register } = useRegister(mailField, nameField, passField)

  const handleClick = useCallback(() => {
    if (passField === passCheckField) {
      register()
    } else {
      console.log('Не совпало')
    }
  }, [nameField, mailField, passField, passCheckField])

  return (
    <div className={className}>
      <Input
        className={s.inputWrapper}
        placeholder="Имя пользователя"
        setField={setNameField}
      />
      <Input
        className={s.inputWrapper}
        placeholder="Email"
        setField={setMailField}
      />
      <Input
        className={s.inputWrapper}
        placeholder="Введите пароль"
        setField={setPassField}
      />
      <Input
        className={s.inputWrapper}
        placeholder="Подтвердите пароль"
        setField={setPassCheckField}
      />
      <Button
        className={s.inputWrapper}
        text="ЗАРЕГИСТИРОВАТЬСЯ"
        style="black"
        onClick={() => handleClick()}
      />
    </div>
  )
}

export default SignUp
