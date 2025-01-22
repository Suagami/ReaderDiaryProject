import React from 'react'
import SectionTitle from '../../../layouts/MainLayout/components/SectionTitle/SectionTitle'
import BookContainer from '../BookContainer/BookContainer'

import s from './DataComponent.module.css'

type DataComponentProps = {
    sectionTitle: string
    className?: string
    status: string
    hasStyle?: boolean
}

const DataComponent: React.FC<DataComponentProps> = (props) => {
    const { sectionTitle, className, status, hasStyle } = props

    return <div className={s.dataComponentWrapper}>
        <div className={s.dataComponentContainer}>
            <SectionTitle sectionTitle={sectionTitle}/>
            <BookContainer hasStyle={hasStyle} hasShowAll={false} status={status} route='' />
        </div>
    </div>
}

export default DataComponent