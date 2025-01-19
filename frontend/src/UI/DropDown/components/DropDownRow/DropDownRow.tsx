import React, { useState } from 'react'

import s from './DropDownRow.module.css'

type DropDownRowProps = {
    className?: string
    item: string
    setField: (value: string) => void
    closeMenu: () => void
}

const DropDownRow: React.FC<DropDownRowProps> = (props) => {
  const { className, item, setField, closeMenu } = props

  const handleClick = () => {
    setField(item);
    closeMenu();
  }

  return (
    <div className={s.dropDownRowWrapper}
        onClick={handleClick}>
          {item}
        <img className={s.checkedItemIcon} src="../../../../../public/imges/ok.png" alt="ok.png" />
    </div>
  )
}

export default DropDownRow