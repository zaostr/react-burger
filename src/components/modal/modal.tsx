import { useEffect } from 'react'
import { createPortal } from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { modalsElement, ESC_KEYCODE } from '../../utils/constants'
import { modalHookType } from '../../utils/types'
import { ModalOverlay } from '../modal-overlay/modal-overlay';

import ModalStyles from './modal.module.css'

export const Modal = (props: modalHookType) => {

    const handleCloseModalByEsc = (e: KeyboardEvent) => {
        if ( e.keyCode === ESC_KEYCODE ) props.close();
    }
    /* eslint-disable */
    useEffect(() => {
        document.addEventListener('keydown', handleCloseModalByEsc);
        
        return () => {
            document.removeEventListener('keydown', handleCloseModalByEsc);
        }
    },[]);
    /* eslint-enable */
    

    return createPortal(
      (props.modalProps.isOpen) && (
        <div className={ModalStyles.modalWrap}>
            { (!props.modalProps.disableOverlay) && <ModalOverlay {...props} /> }
            <div className={ModalStyles.modalBox}>
                { (!props.modalProps.disableCloseButton) && (
                    <button className={ModalStyles.modalClsoeButton} onClick={props.close}>
                        <CloseIcon type='primary' />
                    </button>
                ) }
                {props.children}
            </div>
        </div>
      ),
      (modalsElement as Element | DocumentFragment)
    )
}
/*
Modal.propTypes = modalType
*/