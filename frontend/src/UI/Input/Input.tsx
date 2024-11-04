import cx from 'classnames'
import { useState } from 'react'

type InputProps = {
  className?: string
  placeholder: string
  setField: (value: string) => void
}

const Input: React.FC<InputProps> = (props) => {
  const { className, placeholder, setField } = props

  return (
    <input
      className={cx(className)}
      placeholder={placeholder}
      onChange={(e) => setField(e.target.value)}
    />
  )
}

export default Input
