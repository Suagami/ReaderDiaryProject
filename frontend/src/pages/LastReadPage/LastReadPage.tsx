import { Route, Routes } from 'react-router-dom'
import React from 'react'

import NavigationButton from '../../UI/NavigationButton/NavigationButton'
import NotDataComponent from '../components/NotDataComponent/NotDataComponent'


const LastReadPage: React.FC = () => {
  return (<div>
      <NotDataComponent />
      <Routes>
        <Route path="/addBook" element={<NavigationButton title='Добавить книгу' route="/addbook" />} />
      </Routes>
    </div>
  )
}

export default LastReadPage
