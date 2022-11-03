import React from 'react'

import ModalOverlayStyles from './modal-overlay.module.css'

export const ModalOverlay = (props: any) => {
  const handleCloseModalByOverlay = () => {
      if (props.modalProps.disableCloseOverlay) {
          return;
      }
      props.close();
  }
  return (
    <div className={ModalOverlayStyles.modalOverlay} onClick={handleCloseModalByOverlay}></div>
  )
}
