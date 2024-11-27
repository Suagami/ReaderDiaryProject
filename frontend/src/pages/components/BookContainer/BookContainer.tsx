import cx from 'classnames'
import React from 'react'

import { Link } from 'react-router-dom'

import s from './BookContainer.module.css'

type BookContainerProps = {
    route: string
    className?: string
}

const BookContainer: React.FC<BookContainerProps> = (props) => {
    const { route, className } = props

    return ( <div className={cx(className, s.sectionTitle)}>
        <div className={cx(className, s.allLink)}>
            <Link to={route}>
                <div className={s.label}>Все</div>
            </Link>
        </div>
        <div>
            Тут будут книжечки лежать 
        </div>
    </div>)
}

export default BookContainer
