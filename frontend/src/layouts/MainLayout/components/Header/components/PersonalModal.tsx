import React, { useState, useEffect } from 'react'
import Modal from '../../../../../UI/Modal/modal'
import Button from '../../../../../UI/Button/Button'
import ParameterRow from '../../../../../UI/ParameterRow/ParameterRow'
import Input from '../../../../../UI/Input/Input'
import useAuthToken from '../../../../../hooks/auth/useAuthToken'
import useQuery from '../../../../../hooks/useQuery'

import s from './PersonalModal.module.css'

type PersonalModalProps = {
  className?: string
}

const PersonalModal: React.FC<PersonalModalProps> = (props) => {
  const { className } = props
  const { setToken } = useAuthToken()
  
  const [isEditable, setEditable] = useState<boolean>(false)
  const [firstNameField, setFirstName] = useState<string>('')
  const [lastNameField, setLastName] = useState<string>('')
  const [genderField, setGender] = useState<string>('')
  const [dateOfBirthField, setDateOfBirth] = useState<string>('')
  const [emailField, setEmail] = useState<string>('')
  
  const openButtonContent = <img src="/imges/logo4.png" alt="logo4.png" />

  const { customFetch, data: userData, error, isFetching } = useQuery({
    url: `http://127.0.0.1:8000/api/user`,
    method: 'GET',
  });

  const { customFetch: saveUserData, isFetching: isSaving } = useQuery({
    url: `http://127.0.0.1:8000/api/user/`,
    method: 'PATCH',
    body: {
      ...(firstNameField && { first_name: firstNameField }),
      ...(lastNameField && { last_name: lastNameField }),
      ...(genderField && { gender: genderField }),
      ...(dateOfBirthField && { date_of_birth: dateOfBirthField }),
      ...(emailField && { email: emailField }),
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });

  useEffect(() => {
    customFetch();
  }, [customFetch]);

  useEffect(() => {
    if (userData) {
      setFirstName(userData.first_name || '');
      setLastName(userData.last_name || '');
      setGender(userData.gender || '');
      setDateOfBirth(userData.date_of_birth || '');
      setEmail(userData.email || '');
    }
  }, [userData]);

  const handleSave = async () => {
    try {
      console.log('Отправка данных:', {
        first_name: firstNameField,
        last_name: lastNameField,
        gender: genderField,
        date_of_birth: dateOfBirthField,
        email: emailField,
      });
  
      const response = await saveUserData();
      console.log('Ответ сервера:', response);

      await customFetch();
  
      setEditable(false);
    } catch (error) {
      console.error('Ошибка при сохранении данных:', error);
    }
  };

  if (isFetching) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  const modalContent = (
    <>
      {!isEditable ? ( 
        <div className={s.modalContantWrapper}>
          <div className={s.profileMenu}>
            <div>{openButtonContent}</div>
            <Button
              text='Изменить'
              onClick={() => setEditable(true)}
              style='lightBeige'
              size='mini'
            />
            <Button
              text="Выйти"
              onClick={() => setToken('')}
              style="lightBeige"
              size="mini"
            />
          </div>
          <div className={s.parameterColumn}>
            <ParameterRow title='Имя:' value={userData?.first_name || 'Не указано'}/>
            <ParameterRow title="Фамилия:" value={userData?.last_name || 'Не указано'} />
            <ParameterRow title="Пол:" value={userData?.gender || 'Не указано'} />
            <ParameterRow title="Дата рождения:" value={userData?.date_of_birth || 'Не указано'} />
            <ParameterRow title="Email:" value={userData?.email || 'Не указано'} />
            <ParameterRow title="Дата регистрации:" value={userData?.date_joined || 'Не указано'} />
          </div>
        </div>
      ) : (
        <div className={s.modalContantWrapper}>
          <div className={s.profileMenu}>
            <div>{openButtonContent}</div>
            <Button
              text='Сохранить'
              onClick={handleSave}
              style='lightBeige'
              size='mini'
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
            <Input
              className={s.parameterInput}
              placeholder="Пол"
              setField={setGender}
              fieldValue={genderField}
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
            <ParameterRow title="Дата регистрации:" value={userData?.date_joined || 'Не указано'} />
          </div>
        </div>
      )}
    </>
  );

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
