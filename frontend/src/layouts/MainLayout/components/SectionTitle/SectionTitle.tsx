import cx from 'classnames'
import React from 'react'

import s from './SectionTitle.module.css'

type SectionTitleProps = {
    sectionTitle: string
    className?: string
}

const SectionTitle: React.FC<SectionTitleProps> = (props) => {
    const { sectionTitle, className } = props

    return ( <div className={cx(className, s.title)}>
        {sectionTitle}
    </div>)
}

export default SectionTitle

