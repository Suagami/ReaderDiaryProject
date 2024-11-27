import cx from 'classnames'
import React from 'react'

import NavigationButton from '../../../UI/NavigationButton/NavigationButton'

import s from './EmptyBookContainer.module.css'

type EmptyBookContainerProps = {
    className?: string
}

const EmptyBookContainer: React.FC<EmptyBookContainerProps> = (props) => {
    const { className } = props

    return ( <div className={cx(className, s.sectionContainer)}>
        <div className={cx(className, s.sectionText)}>
            Здесь пока что пусто
        </div>
        {/* Добавить линьку на страницу добавления книги */}
        <NavigationButton title='Добавить книгу' route=''/>
    </div>)
}

export default EmptyBookContainer
