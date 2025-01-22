import React from 'react'

import SectionTitle from '../../layouts/MainLayout/components/SectionTitle/SectionTitle'
import AddBookForm from '../components/AddBookForm/AddBookForm'

import s from './AddBookPage.module.css'

const AddBookPage: React.FC = () => {
    return <div className={s.addBookPageWrapper}>
        <SectionTitle sectionTitle='Рецензия' />
        <AddBookForm />
    </div>
}

export default AddBookPage