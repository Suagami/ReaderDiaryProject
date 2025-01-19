import React from 'react'

import s from './DropDownMenu.module.css'

type DropDownMenuProps = {
  contant: React.ReactNode
  state: boolean
}

const DropDownMenu: React.FC<DropDownMenuProps> = (props) => {
  const { contant, state,  } = props
  
  return (
    <div className={state ? s.openedDropDownMenuWrapper : s.closedDropDownMenuWrapper}>
      {contant}
    </div>
  )
}

export default DropDownMenu
