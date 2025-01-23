import React, { useState, useCallback } from 'react'
import cx from 'classnames'

import s from './GenderDropDown.module.css'

type GenderDropDownProps = {
  className?: string
  gender: 'f' | 'm' | undefined
  setGender: (value: 'f' | 'm') => void
}

type listType = {
  value: 'f' | 'm'
  name: string
}

const GenderDropDown: React.FC<GenderDropDownProps> = (props) => {
  const { className, gender, setGender } = props

  const [isOpen, setOpen] = useState(false)

  const list: listType[] = [
    {
      value: 'f',
      name: 'Женский',
    },
    {
      value: 'm',
      name: 'Мужской',
    },
  ]

  const handleClick = useCallback((value: 'f' | 'm') => {
    setGender(value)
    setOpen(false)
  }, [])

  return (
    <div
      className={cx(s.dropDownWrapper, className)}
      style={{
        borderBottomLeftRadius: !isOpen ? '24px' : '0',
        borderBottomRightRadius: !isOpen ? '24px' : '0',
      }}
    >
      <div className={s.dropdownButtonWrapper} onClick={() => setOpen(!isOpen)}>
        {!gender ? 'Пол' : gender === 'f' ? 'Женский' : 'Мужской'}
      </div>
      {isOpen && (
        <div className={s.dropdownElements}>
          {list.map((e) => (
            <div
              key={e.name}
              className={s.dropdownElement}
              onClick={() => handleClick(e.value)}
            >
              {e.name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default GenderDropDown
