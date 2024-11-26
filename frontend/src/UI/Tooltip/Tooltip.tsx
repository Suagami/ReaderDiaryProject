import React, { useState, useEffect } from 'react'
import styles from './Tooltip.module.css'

interface TooltipProps {
  text: string | null
}

const Tooltip: React.FC<TooltipProps> = ({ text }) => {
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
      className={`${styles.tooltipContainer} ${isVisible ? styles.show : ''}`}
    >
      {text && `${text}`}
    </div>
  )
}

export default Tooltip
