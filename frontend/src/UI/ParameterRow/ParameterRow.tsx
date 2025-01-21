import cx from 'classnames'

import s from './ParameterRow.module.css'

type ParameterRowProps = {
    className?: string
    title: string
    value: string
}

const ParameterRow: React.FC<ParameterRowProps> = (props) => {
    const { className, title, value } = props

    return (
        <div className={cx(className, s.parameterRowWrapper)}>
            <div className={s.title}>{title}</div>
            <div className={s.value}>{value}</div>
        </div>
    )
}

export default ParameterRow
