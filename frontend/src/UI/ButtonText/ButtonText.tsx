import cx from 'classnames'
import { useState } from 'react'

import s from './ButtonText.module.css'

type ButtonTextProps = {
  className?: string
  text: string
  onClick: () => void
}

const ButtonText: React.FC<ButtonTextProps> = (props) => {
  const { className, text, onClick } = props

  return (
    <button className={cx(className, s.buttonTextWrapper)} onClick={onClick}>
      {text}
    </button>
  )
}

export default ButtonText
