import React, { useState }  from 'react'

import DropDownButton from './components/DropDownButton/DropDownButton'
import DropDownMenu from './components/DropDownMenu/DropDownMenu'

import s from './DropDown.module.css'

type DropDownProps = {
  className?: string
  title?: string
  isHaveIcon: boolean
  contant: any
}

const DropDown: React.FC<DropDownProps> = (props) => {
  const { className, title, isHaveIcon, contant } = props
  const [open, setOpen] = useState(false)
  
  const toggleDropDown = () => {
    setOpen((open) => !open)
  }
  
  return (
    <div className={s.dropDownWrapper}>
      <DropDownButton
        title={title}
        isHaveIcon={isHaveIcon}
        state={open}
        toggle={toggleDropDown}
      />
      <DropDownMenu
        contant={contant}
        state={open}
        closeMenu={() => setOpen(false)}
      />
    </div>
  )
}

export default DropDown