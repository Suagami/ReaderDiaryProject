import cx from 'classnames'
import { useState } from 'react'

import s from './Input.module.css'

type InputProps = {
  className?: string
  placeholder: string
  fieldValue: string
  setField: (value: string) => void
}

const Input: React.FC<InputProps> = (props) => {
  const { className, placeholder, fieldValue, setField } = props

  return (
    <div className={cx(className, s.inputWrapper)}>
      <div
        className={s.placeholder}
        style={{ display: fieldValue !== '' ? 'block' : 'none' }}
      >
        {placeholder}
      </div>
      <input
        className={s.inputText}
        placeholder={placeholder}
        onChange={(e) => setField(e.target.value)}
      />
    </div>
  )
}

export default Input
