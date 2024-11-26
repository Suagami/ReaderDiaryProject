import React from 'react'

import BookSection from '../components/BookSection/BookSection'

import s from './HomePage.module.css'

const HomePage: React.FC = () => {
  return <div className={s.homePageWrapper}>
    <div className={s.homeContentColumn}>
      <BookSection sectionTitle='Недавно прочитанные' route='/lastRead' />
      <BookSection sectionTitle='Хочу прочитать' route='/wantRead'/>
      <BookSection sectionTitle='Читаю сейчас' route='/readNow'/>
    </div>
  </div>
}

export default HomePage
