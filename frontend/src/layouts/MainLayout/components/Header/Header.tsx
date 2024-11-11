import React from 'react'

import s from './Header.module.css'

const Header: React.FC = () => {
  return (
    <div className={s.headerWrapper}>
      <button className={s.leftHeaderItems}>
        <img src="../../../../../public/imges/pen.png" alt="pen.png" />
        <div>Книжная полка</div>
      </button>
      <div className={s.rightHeaderItems}>
        <button>Прочитанное</button>
        <button>Хочу прочитать</button>
        <button>Читаю сейчас</button>
        <button className={s.profileButton} >
          <img src="../../../../../public/imges/logo4.png" alt="logo4.png" />
        </button>
      </div>
    </div>
  )
}

export default Header
