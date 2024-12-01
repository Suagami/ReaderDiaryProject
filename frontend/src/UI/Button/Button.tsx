import cx from 'classnames'
import { useState } from 'react'

import s from './Button.module.css'
import { useNavigate } from 'react-router-dom'

type buttonStyle = 'gradient' | 'black' | 'lightBeige'
type buttonSize = 'full' | 'mini'

type ButtonProps = {
  className?: string
  text: string
  style?: buttonStyle
  hasAddIcon?: boolean
  size?: buttonSize
  href?: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    style = 'gradient',
    hasAddIcon = false,
    size = 'full',
    text,
    href,
    onClick,
  } = props

  const navigate = useNavigate()

  return (
    <button
      className={cx(
        className,
        style === 'lightBeige'
          ? s.lightBeigeButton
          : style === 'gradient'
            ? s.gradientButtonWrapper
            : s.blackButtonWrapper
      )}
      style={{
        borderRadius: style === 'lightBeige' ? '4px' : '24px',
        width: size === 'full' ? '100%' : '',
      }}
      onClick={href ? () => navigate(href) : onClick}
    >
      <div className={s.buttonContent}>
        <div style={{ display: hasAddIcon ? '' : 'none' }}>
          <img className={s.buttonIcon} src="../../../public/imges/Group.png" />
        </div>
        <div className={s.buttonText}>{text}</div>
      </div>
    </button>
  )
}

export default Button
