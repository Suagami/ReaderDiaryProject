import cx from 'classnames'
import { Link } from 'react-router-dom'
import React from 'react'

import ColumnSectionTitle from '../ColumnSectionTitle/ColumnSectionTitle'
import AllLink from '../AllLink/AllLink'
import ReadBookView from '../ReadBookView/ReadBookView'

import s from './ColumnSection.module.css'

type ColumnSectionsProps = {
    sectionTitle: string
    className?: string
}

export const LastReadSection: React.FC<ColumnSectionsProps> = (props) => {
    const { sectionTitle, className } = props

    return ( <div className={cx(className, s.lastReadTitle)}>
        <ColumnSectionTitle sectionTitle={sectionTitle} className={className} />
        <AllLink route='/lastRead' />
        <ReadBookView />
    </div>)
}

export const WantReadSection: React.FC<ColumnSectionsProps> = (props) => {
    const { sectionTitle, className } = props

    return ( <div className={cx(className, s.wantReadTitle)}>
        <ColumnSectionTitle sectionTitle={sectionTitle} className={className} />
        <AllLink route='/wantRead' />
        <ReadBookView />
    </div>)
}

export const ReadNowSection: React.FC<ColumnSectionsProps> = (props) => {
    const { sectionTitle, className } = props

    return ( <div className={cx(className, s.readNowTitle)}>
        <ColumnSectionTitle sectionTitle={sectionTitle} className={className} />
        <AllLink route='/readNow' />
        <ReadBookView />
    </div>)
}
