import React from 'react'

import s from './DropDownButton.module.css'

type DropDownButtonProps = {
  className?: string
  title?: string 
  isHaveIcon: boolean
  state: boolean
  toggle: () => void
}

const DropDownButton: React.FC<DropDownButtonProps> = (props) => {
  const { className, title, isHaveIcon, state, toggle} = props
    return (
      <div  onClick={toggle} 
            className={`${state ?
                            s.closedButtonWrapper : 
                            s.openedButtonWrapper}`}>
        {title}
        {isHaveIcon &&
          <img
            className={s.image}
            alt="ButtonIcon"
            src={`${state ? "../../../../../public/imges/DropDownMinus.png" :
                            "../../../../../public/imges/DropDownPlus.png"}`}/>}
        
      </div>
    )
}

export default DropDownButton