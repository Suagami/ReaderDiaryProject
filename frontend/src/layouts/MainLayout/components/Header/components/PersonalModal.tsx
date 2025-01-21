import React, { useState, useEffect } from 'react'
import Modal from '../../../../../UI/Modal/modal'
import Button from '../../../../../UI/Button/Button'
import ParameterRow from '../../../../../UI/ParameterRow/ParameterRow'
import useAuthToken from '../../../../../hooks/auth/useAuthToken'
import useQuery from '../../../../../hooks/useQuery'

import s from './PersonalModal.module.css'

type PersonalModalProps = {
  className?: string
}

const PersonalModal: React.FC<PersonalModalProps> = (props) => {
  const { className } = props
  const { setToken } = useAuthToken()
  // const [ isEditable, setEditable ] = useState(false)
  
  const openButtonContent = <img src="/imges/logo4.png" alt="logo4.png" />
  
  const { customFetch, data: userData, error, isFetching } = useQuery<{
    id: number;
    first_name: string;
    last_name: string;
    gender: string;
    date_of_birth: string;
    email: string;
    date_joined: string;
    avatar: string;
  }>({
    url: `http://127.0.0.1:8000/api/user`,
    method: 'GET',
  });

  useEffect(() => {
    customFetch();
  }, [customFetch]);


  if (isFetching) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  const modalContent = (
    <>
      <div className={s.modalContantWrapper}>
        <div className={s.profileMenu}>
          <div>{openButtonContent}</div>
          <Button
            text='Изменить'
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
