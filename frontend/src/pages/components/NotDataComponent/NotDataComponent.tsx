import React from 'react'
import NavigationButton from '../../../UI/NavigationButton/NavigationButton'

import s from './NotDataComponent.module.css'

const NotDataComponent: React.FC = () => {
    return <div className={s.blankPageWrapper}>
        <div className={s.blankPageContainer}>
                Здесь пока что пусто
            <NavigationButton title='Добавить книгу' route="/*" />
        </div>
    </div>
}

export default NotDataComponent