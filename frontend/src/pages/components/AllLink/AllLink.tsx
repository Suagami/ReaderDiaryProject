import React from 'react'
import cx from 'classnames'

import s from './AllLink.module.css'
import { Link } from 'react-router-dom'

type AllLinkProps = {
  route: string
  className?: string
}

const AllLink: React.FC<AllLinkProps> = (props) => {
  const { route, className } = props

  return (
    <div className={cx(className, s.allLink)}>
        <Link to={route}>
            <div className={s.label}>Все</div>
        </Link>
    </div>
)
}

export default AllLink