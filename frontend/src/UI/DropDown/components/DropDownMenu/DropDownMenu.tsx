import React from 'react'

import s from './DropDownMenu.module.css'

type DropDownMenuProps = {
  contant: any
  state: boolean
  closeMenu: () => void
}

const DropDownMenu: React.FC<DropDownMenuProps> = (props) => {
  const { contant, state, closeMenu } = props

  const handleClick = () => {
    closeMenu();
  };
  
  return (
    <div 
      className={`${state ? s.openedDropDownMenuWrapper : s.closedDropDownMenuWrapper}`}
      onClick={handleClick}
    >
      {contant}
    </div>
  )
}

export default DropDownMenu
