import React, { useState, useRef, useEffect }  from 'react'

import DropDownButton from './components/DropDownButton/DropDownButton'
import DropDownMenu from './components/DropDownMenu/DropDownMenu'

import s from './DropDown.module.css'

type DropDownProps = {
  className?: string
  title?: string
  isHaveIcon: boolean
  contant: (closeMenu: () => void) => React.ReactNode
}

const DropDown: React.FC<DropDownProps> = (props) => {
  const { className, title, isHaveIcon, contant } = props

  const [open, setOpen] = useState(false)

  const toggleDropDown = () => setOpen((open) => !open);
  const closeDropDown = () => setOpen(false);

  
  return (
    <div className={s.dropDownWrapper}>
      <DropDownButton
        title={title}
        isHaveIcon={isHaveIcon}
        state={open}
        toggle={toggleDropDown}
      />
      {open &&(
        <DropDownMenu
          contant={contant(closeDropDown)}
          state={open}
      />)}
    </div>
  )
}

export default DropDown