import React from 'react'
import { Link } from 'react-router-dom'

import s from './Header.module.css'
import PersonalModal from './components/PersonalModal'

const Header: React.FC = () => {
  return (
    <div className={s.headerWrapper}>
      <Link to="/">
        <div className={s.leftHeaderItems}>
          <img
            className={s.icon}
            src="../../../../../public/imges/pen.png"
            alt="pen.png"
          />
          <div>Книжная полка</div>
        </div>
      </Link>
      <div className={s.rightHeaderItems}>
        <Link to="/lastRead">
          <div className={s.rightHeaderItem}>Прочитанное</div>
        </Link>
        <Link to="/wantRead">
          <div className={s.rightHeaderItem}>Хочу прочитать</div>
        </Link>
        <Link to="/readNow">
          <div className={s.rightHeaderItem}>Читаю сейчас</div>
        </Link>
        <PersonalModal className={s.icon}></PersonalModal>
      </div>
    </div>
  )
}

export default Header
