import cx from 'classnames'
import { useState } from 'react'

import s from './Input.module.css'

type InputProps = {
  className?: string
  placeholder: string
  fieldValue: string
  pass?: boolean
  setField: (value: string) => void
}

const Input: React.FC<InputProps> = (props) => {
  const { className, placeholder, fieldValue, pass, setField } = props

  const [visibility, setVisibiblity] = useState(!pass)

  const visibilityUrl = '../../../public/imges/visibility.png'
  const visibilityOffUrl = '../../../public/imges/visibility_off.png'

  return (
    <div className={cx(className, s.inputWrapper)}>
      {pass && (
        <button
          className={s.visibilityIcon}
          onClick={() => {
            setVisibiblity(!visibility)
          }}
        >
          <img src={visibility ? visibilityUrl : visibilityOffUrl} />
        </button>
      )}
      <div
        className={s.placeholder}
        style={{ display: fieldValue !== '' ? 'block' : 'none' }}
      >
        {placeholder}
      </div>
      <input
        className={s.inputText}
        placeholder={placeholder}
        type={visibility ? 'text' : 'password'}
        onChange={(e) => setField(e.target.value)}
        value={fieldValue ? fieldValue : ''}
      />
    </div>
  )
}

export default Input
