import React from 'react'
import { Link } from 'react-router-dom'

import BookSection from '../components/BookSection/BookSection'
import Button from '../../UI/Button/Button'

import s from './HomePage.module.css'

const HomePage: React.FC = () => {
  return <div className={s.homePageWrapper}>
    <div className={s.homeContentColumn}>
      <BookSection viewedBooks={5} hasStyle={true} status='finished' sectionTitle='Недавно прочитанные' route='/lastRead' />
      <BookSection viewedBooks={5} hasStyle={true} status='planning' sectionTitle='Хочу прочитать' route='/wantRead'/>
      <BookSection viewedBooks={5} hasStyle={true} status='reading' sectionTitle='Читаю сейчас' route='/readNow'/>
    </div>
    <Link to={"/addBook"}><Button text='Добавить книгу'
            style='gradient' 
            size='mini' 
            className={s.addBook}
            hasAddIcon={true}
    /></Link>
  </div>
}

export default HomePage
