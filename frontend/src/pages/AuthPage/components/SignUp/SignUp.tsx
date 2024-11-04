import React, { useCallback, useState } from 'react'
import s from './SignUp.module.css'
import Input from '../../../../UI/Input/Input'

type SignUpProps = {
  className?: string
}

const SignUp: React.FC<SignUpProps> = (props) => {
  const { className } = props

  const [nameField, setNameField] = useState<string>('')
  const [mailField, setMailField] = useState<string>('')
  const [passField, setPassField] = useState<string>('')
  const [passCheckField, setPassCheckField] = useState<string>('')

  const handleClick = useCallback(() => {
    if (passField === passCheckField) {
      console.log(nameField, mailField, passField)
    } else {
      console.log('Не совпало')
    }
  }, [nameField, mailField, passField, passCheckField])

  return (
    <div className={className}>
      <div>Войти</div>
      <div>Пожалуйста войдите в систему</div>
      <Input placeholder="Имя пользователя" setField={setNameField} />
      <Input placeholder="Email" setField={setMailField} />
      <Input placeholder="Введите пароль" setField={setPassField} />
      <Input placeholder="Подтвердите пароль" setField={setPassCheckField} />
      <button onClick={() => handleClick()}>ЗАРЕГИСТИРОВАТЬСЯ</button>
    </div>
  )
}

export default SignUp
