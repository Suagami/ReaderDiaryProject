import cx from 'classnames'
import React from 'react'

import SectionTitle from '../../../layouts/MainLayout/components/SectionTitle/SectionTitle'
import BookContainer from '../BookContainer/BookContainer'

import s from './BookSection.module.css'
type sectionStyle = true | false

type BookSectionProps = {
    className?: string
    hasStyle: sectionStyle
    sectionTitle: string
    route: string
    status: string
    viewedBooks?: number
}

const BookSection: React.FC<BookSectionProps> = (props) => {
    const { sectionTitle, route, status, className, viewedBooks } = props

    return ( <div className={cx(className, s.sectionTitle)}>
        <SectionTitle sectionTitle={sectionTitle} className={className} />
        <BookContainer viewedBooks={viewedBooks} status={status} route={route} className={className}/>
    </div>)
}

export default BookSection
