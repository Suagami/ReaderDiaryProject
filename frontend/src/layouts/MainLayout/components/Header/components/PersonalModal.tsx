import React, { useState, useEffect } from 'react'
import Modal from '../../../../../UI/Modal/Modal'
import Button from '../../../../../UI/Button/Button'
import ParameterRow from '../../../../../UI/ParameterRow/ParameterRow'
import Input from '../../../../../UI/Input/Input'
import useAuthToken from '../../../../../hooks/auth/useAuthToken'
import useQuery from '../../../../../hooks/useQuery'

import s from './PersonalModal.module.css'
import GenderDropDown from './components/GenderDropDown/GenderDropDown'

type PersonalModalProps = {
  className?: string
}

const PersonalModal: React.FC<PersonalModalProps> = (props) => {
  const { className } = props

  const [isEditable, setEditable] = useState<boolean>(false)
  const [firstNameField, setFirstName] = useState<string>('')
  const [lastNameField, setLastName] = useState<string>('')
  const [genderField, setGender] = useState<'f' | 'm' | undefined>(undefined)
  const [dateOfBirthField, setDateOfBirth] = useState<string>('')
  const [emailField, setEmail] = useState<string>('')

  const { setToken } = useAuthToken()

  const openButtonContent = <img src="/imges/logo4.png" alt="logo4.png" />

  const { customFetch, data: userData } = useQuery({
    url: `api/user`,
    method: 'GET',
  })

  const { customFetch: saveUserData, isFetching: isSaving } = useQuery({
    url: `api/user/`,
    method: 'PATCH',
    body: {
      ...(firstNameField && { first_name: firstNameField }),
      ...(lastNameField && { last_name: lastNameField }),
      ...(genderField && { gender: genderField }),
      ...(dateOfBirthField && { date_of_birth: dateOfBirthField }),
      ...(emailField && { email: emailField }),
    },
  })

  useEffect(() => {
    customFetch()
  }, [customFetch])

  useEffect(() => {
    if (userData) {
      setFirstName(userData.first_name)
      setLastName(userData.last_name)
      setGender(userData.gender || '')
      setDateOfBirth(userData.date_of_birth)
      setEmail(userData.email)
    }
  }, [userData])

  const handleSave = async () => {
    await saveUserData()

    await customFetch()

    setEditable(false)
  }

  const modalContent = (
    <>
      {!isEditable ? (
        <div className={s.modalContantWrapper}>
          <div className={s.profileMenu}>
            <div>{openButtonContent}</div>
            <Button
              text="Изменить"
              onClick={() => setEditable(true)}
              style="lightBeige"
              size="mini"
            />
            <Button
              text="Выйти"
              onClick={() => setToken('')}
              style="lightBeige"
              size="mini"
            />
          </div>
          <div className={s.parameterColumn}>
            <ParameterRow
              title="Имя:"
              value={userData?.first_name || 'Не указано'}
            />
            <ParameterRow
              title="Фамилия:"
              value={userData?.last_name || 'Не указано'}
            />
            <ParameterRow
              title="Пол:"
              value={
                !userData?.gender
                  ? 'Не указано'
                  : userData?.gender === 'f'
                    ? 'Женский'
                    : 'Мужской'
              }
            />
            <ParameterRow
              title="Дата рождения:"
              value={userData?.date_of_birth || 'Не указано'}
            />
            <ParameterRow
              title="Email:"
              value={userData?.email || 'Не указано'}
            />
            <ParameterRow
              title="Дата регистрации:"
              value={userData?.date_joined.split('-').reverse().join(' ')}
            />
          </div>
        </div>
      ) : (
        <div className={s.modalContantWrapper}>
          <div className={s.profileMenu}>
            <div>{openButtonContent}</div>
            <Button
              text="Сохранить"
              onClick={handleSave}
              style="lightBeige"
              size="mini"
              disabled={isSaving}
            />
            <Button
              text="Отмена"
              onClick={() => setEditable(false)}
              style="lightBeige"
              size="mini"
            />
          </div>
          <div className={s.parameterColumn}>
            <Input
              className={s.parameterInput}
              placeholder="Имя"
              setField={setFirstName}
              fieldValue={firstNameField}
            />
            <Input
              className={s.parameterInput}
              placeholder="Фамилия"
              setField={setLastName}
              fieldValue={lastNameField}
            />
            <GenderDropDown
              className={s.parameterInput}
              setGender={setGender}
              gender={genderField}
            />
            <Input
              className={s.parameterInput}
              placeholder="Дата рождения"
              setField={setDateOfBirth}
              fieldValue={dateOfBirthField}
            />
            <Input
              className={s.parameterInput}
              placeholder="Email"
              setField={setEmail}
              fieldValue={emailField}
            />
            <ParameterRow
              title="Дата регистрации:"
              value={userData?.date_joined.split('-').reverse().join(' ')}
            />
          </div>
        </div>
      )}
    </>
  )

  return (
    <div className={className}>
      <Modal
        openButtonContent={openButtonContent}
        modalContent={modalContent}
      />
    </div>
  )
}

export default PersonalModal
