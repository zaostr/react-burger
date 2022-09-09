import React from 'react'
import { createPortal } from 'react-dom';
import ModalStyles from './modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { modalsElement } from '../../utils/constants'

export const Modal = (props) => {
    const handleCloseModalByOverlay = () => {
        if (props.modalProps.disableCloseOverlay) {
            return;
        }
        props.close();
    }
    return createPortal(
      (props.modalProps.isOpen) && (
        <div className={ModalStyles.modalWrap}>
            { (!props.modalProps.disableOverlay) && <div className={ModalStyles.modalOverlay} onClick={handleCloseModalByOverlay}></div> }
            <div className={ModalStyles.modalBox}>
                { (!props.modalProps.disableCloseButton) && (
                    <button className={ModalStyles.modalClsoeButton} onClick={props.close}>
                        <CloseIcon />
                    </button>
                ) }
                {props.children}
            </div>
        </div>
      ),
      modalsElement
    )
}
