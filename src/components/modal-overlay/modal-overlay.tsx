import React from 'react'
import { modalHookType } from '../../utils/types';

import ModalOverlayStyles from './modal-overlay.module.css'

export const ModalOverlay = (props: modalHookType) => {
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
