import React, { useCallback, useEffect, useState }  from 'react'
import { Link } from 'react-router-dom'

import Input from '../../../UI/Input/Input'
import Textarea from '../../../UI/Textarea/Textarea'
import Button from '../../../UI/Button/Button'
import useCreateBook from '../../../hooks/main/useCreateBook'
import Tooltip from '../../../UI/Tooltip/Tooltip'
import DropDown from '../../../UI/DropDown/DropDown'
import DropDownRow from '../../../UI/DropDown/components/DropDownRow/DropDownRow'


import s from './AddBookForm.module.css'

const AddBookForm: React.FC = () => {

    const [bookNameField, setBookName] = useState<string>('')
    const [bookAuthorField, setBookAuthor] = useState<string>('')
    const [mainIdeaField, setMainIdea] = useState<string>('block')
    const [myAttitudeField, setMyAttitude] = useState<string>('block')
    const [selectedItemField, setSelectedItem] = useState<string>('')


    const { createBook, error, data } = useCreateBook(bookNameField, 
                                                      bookAuthorField, 
                                                      mainIdeaField, 
                                                      myAttitudeField,
                                                      selectedItemField)

    const handleClick = useCallback(async () => {
        await createBook()

    }, [bookNameField, bookAuthorField, mainIdeaField, myAttitudeField, selectedItemField])

    const linkTo = () => {
        if (selectedItemField === "Прочитанное") { return "/lastRead"; }
        if (selectedItemField === "Хочу прочитать") { return "/wantRead"; }
        if (selectedItemField === "Читаю сейчас") { return "/readNow"; }

    }

    const items = [ "Прочитанное", "Хочу прочитать", "Читаю сейчас" ]

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
        <DropDown
            className={s.dropDownWrapper}
            title={`${selectedItemField ? selectedItemField : "Добавить"}`}
            isHaveIcon={true}
            contant={<>{
                items.map(item => <DropDownRow
                                    item={item}
                                    setField={setSelectedItem}
                                    ></DropDownRow>)
            }</>}
        />
        <Link to={`${linkTo()}`}>
        <Button
            className={s.textareaWrapper}
            text='Сохранить'
            onClick={() => handleClick()}
        /></Link>
        {error && <Tooltip text={`Ошибка: ${error}`} />}
        {data?.id && (
          <Tooltip text={`Книга успешно добавлена!`} />
        )}
      </div>
    )
}

export default AddBookForm