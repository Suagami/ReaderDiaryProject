import cx from 'classnames'
import React from 'react'

import s from './ColumnSectionTitle.module.css'

type ColumnSectionTitleProps = {
    sectionTitle: string
    className?: string
}

const ColumnSectionTitle: React.FC<ColumnSectionTitleProps> = (props) => {
    const { sectionTitle, className } = props

    return ( <div className={cx(className, s.title)}>
        {sectionTitle}
    </div>)
}

export default ColumnSectionTitle

