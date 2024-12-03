import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module.css'

type ModalProps = {
  modalContent: JSX.Element
  openButtonContent: JSX.Element
}

const Modal: React.FC<ModalProps> = (props) => {
  const { modalContent, openButtonContent } = props
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <button onClick={openModal}>{openButtonContent}</button>
      {isOpen &&
        ReactDOM.createPortal(
          <>
            {/* Overlay */}
            <div className={styles.overlay} onClick={closeModal}></div>
            {/* Modal Window */}
            <div className={styles.modal}>
              <button className={styles.closeButton} onClick={closeModal}>
                &times;
              </button>
              {modalContent}
            </div>
          </>,
          document.body
        )}
    </>
  )
}

export default Modal
