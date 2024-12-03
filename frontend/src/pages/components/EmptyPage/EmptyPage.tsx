import React from 'react'
import NavigationButton from '../../../UI/NavigationButton/NavigationButton'

import s from './EmptyPage.module.css'

type EmptyPageProps = {
    route: string
}

const EmptyPage: React.FC<EmptyPageProps> = (props) => {
    const {route} = props
    return <div className={s.blankPageWrapper}>
        <div className={s.blankPageContainer}>
                Здесь пока что пусто
            <NavigationButton title='Добавить книгу' route={route}/>
        </div>
    </div>
}

export default EmptyPage