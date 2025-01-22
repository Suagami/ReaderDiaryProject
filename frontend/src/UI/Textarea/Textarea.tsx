import cx from 'classnames'

import s from './Textarea.module.css'

type TextareaProps = {
    className?: string
    placeholder: string
    fieldValue: string
    setField: (value: string) => void
}

const Textarea: React.FC<TextareaProps> = (props) => {
    const { className, placeholder, fieldValue, setField } = props

    return (
        <div className={cx(className, s.textareaWrapper)}>
            <textarea
                className={s.textareaText}
                placeholder={placeholder}
                style={{ display: fieldValue !== '' ? 'block' : 'none' }}
                onChange={(e) => setField(e.target.value)}>
            </textarea>
        </div>
    )
}

export default Textarea
