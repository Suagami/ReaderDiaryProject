import React, { useCallback, useEffect, useState }  from 'react'

import Input from '../../../UI/Input/Input'
import Textarea from '../../../UI/Textarea/Textarea'
import Button from '../../../UI/Button/Button'
import useCreateBook from '../../../hooks/main/useCreateBook'
import Tooltip from '../../../UI/Tooltip/Tooltip'

import s from './AddBookForm.module.css'

const AddBookForm: React.FC = () => {

    const [bookNameField, setBookName] = useState<string>('')
    const [bookAuthorField, setBookAuthor] = useState<string>('')
    const [mainIdeaField, setMainIdea] = useState<string>('block')
    const [myAttitudeField, setMyAttitude] = useState<string>('block')

    const { createBook, error, data } = useCreateBook(bookNameField, 
                                                      bookAuthorField, 
                                                      mainIdeaField, 
                                                      myAttitudeField)

    const handleClick = useCallback(async () => {
          await createBook()

    }, [bookNameField, bookAuthorField, mainIdeaField, myAttitudeField])

    return (
      <div className={s.addBookFormWrapper}>
        <Input
            className={s.inputWrapper}
            placeholder="Название книги"
            setField={setBookName}
            fieldValue={bookNameField}
        />
        <Input
            className={s.inputWrapper}
            placeholder="Автор"
            setField={setBookAuthor}
            fieldValue={bookAuthorField}
        />
        <Textarea
            className={s.textareaWrapper}
            placeholder='Главная мысль'
            setField={setMainIdea}
            fieldValue={mainIdeaField}
        />
        <Textarea
            className={s.textareaWrapper}
            placeholder='Моё отношение'
            setField={setMyAttitude}
            fieldValue={myAttitudeField}
        />
        <Button
            className={s.textareaWrapper}
            text='Сохранить'
            onClick={() => handleClick()}
        />
        {error && <Tooltip text={`Ошибка: ${error}`} />}
        {data?.id && (
          <Tooltip text={`Книга успешно добавлена!`} />
        )}
      </div>
    )
}

export default AddBookForm