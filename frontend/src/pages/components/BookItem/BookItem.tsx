import cx from 'classnames'
import React from 'react'

import s from './BookItem.module.css'

type BookItemProps = {
    bookName: string
    authorName: string
    className?: string
}

const BookItem: React.FC<BookItemProps> = (props) => {
    const { bookName, authorName, className } = props

    return (<div className={s.bookItemWrapper}>
                <div className={cx(className, s.bookItemImage)}></div>
                <div className={s.bookName}>{bookName}</div>
                <div className={s.authorName}>{authorName}</div>
            </div>)
}

export default BookItem
