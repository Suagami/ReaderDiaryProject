import cx from 'classnames'
import React from 'react'

import SectionTitle from '../../../layouts/MainLayout/components/SectionTitle/SectionTitle'
// import BookContainer from '../BookContainer/BookContainer'
import EmptyBookContainer from '../EmptyBookContainer/EmptyBookContainer'


import s from './BookSection.module.css'

type BookSectionProps = {
    sectionTitle: string
    route: string
    className?: string
}

const BookSection: React.FC<BookSectionProps> = (props) => {
    const { sectionTitle, route, className } = props

    return ( <div className={cx(className, s.sectionTitle)}>
        <SectionTitle sectionTitle={sectionTitle} className={className} />
        {/* <BookContainer route={route} className={className}/> */}
        <EmptyBookContainer className={className}/>
    </div>)
}

export default BookSection
