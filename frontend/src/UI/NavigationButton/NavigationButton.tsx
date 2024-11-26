import cx from 'classnames'
import React from 'react'

import s from './NavigationButton.module.css'
import { Link } from 'react-router-dom'

type NavigationButtonProps = {
    title: string
    route: string
    style: boolean
    className?: string
}

const NavigationButton: React.FC<NavigationButtonProps> = (props) => {
    const { title, route, style, className } = props

    if ( style === true ) {
        return ( <Link to={route}>
            <div className={cx(className, s.colorButtonWrapper)}>
                <div className={cx(className, s.colorButtonImage)}></div>
                {title}
            </div>
        </Link>)
    } else {
        return ( <Link to={route}>
            <div className={cx(className, s.buttonWrapper)}>
                <div className={cx(className, s.buttonImage)}></div>
                {title}
            </div>
        </Link>)
    }


}

export default NavigationButton