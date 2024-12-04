import React from 'react'
import Modal from '../../../../../UI/Modal/modal'
import Button from '../../../../../UI/Button/Button'
import useAuthToken from '../../../../../hooks/auth/useAuthToken'

type PersonalModalProps = {
  className?: string
}

const PersonalModal: React.FC<PersonalModalProps> = (props) => {
  const { className } = props
  const { setToken } = useAuthToken()

  const openButtonContent = <img src="/imges/logo4.png" alt="logo4.png" />

  const modalContent = (
    <>
      <div>Тут контент модалки!</div>
      <div>
        Вёрста за вами, только onClick на кнопке разлогина не меняйте, ну и
        кнопку оставьте
      </div>
      <Button
        text="Выйти"
        onClick={() => setToken('')}
        style="black"
        size="mini"
      />
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
