import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { LastReadSection, WantReadSection, ReadNowSection } from '../components/ColumnSection/ColumnSection'

import s from './HomePage.module.css'

const HomePage: React.FC = () => {
  return <div className={s.homePageWrapper}>
    <div className={s.homeContentColumn}>
      <LastReadSection sectionTitle='Недавние прочитанные' />
      <WantReadSection sectionTitle='Хочу прочитать' />
      <ReadNowSection sectionTitle='Читаю сейчас' />
    </div>
  </div>
}

export default HomePage
