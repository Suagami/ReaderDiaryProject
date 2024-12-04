import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import styles from './Tooltip.module.css'

interface TooltipProps {
  className?: string
  text: string | null
}

const Tooltip: React.FC<TooltipProps> = (props) => {
  const { className, text } = props
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (text) {
      setIsVisible(true)
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [text])

  return (
    <div
      className={cx(
        `${styles.tooltipContainer} ${isVisible ? styles.show : ''}`,
        className
      )}
    >
      {text && `${text}`}
    </div>
  )
}

export default Tooltip
