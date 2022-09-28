import {useState} from 'react'
import { modalType } from '../utils/types'

export const useModalControls = ({
        isOpen = false, 
        disableCloseButton = false,
        disableCloseOverlay = false,
        disableOverlay = false,
        closeCallback = () => {}
    } = {}) => {
    const [isModalOpen, setIsModalOpen] = useState(isOpen);

    const handleOpenModal = () => {
        setIsModalOpen(true);
        document.body.classList.add('overflow-hidden');
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
        document.body.classList.remove('overflow-hidden');
        closeCallback();
    }

  return {
    open: handleOpenModal,
    close: handleCloseModal,
    modalProps: {
        isOpen: isModalOpen,
        disableCloseButton,
        disableCloseOverlay,
        disableOverlay
    }
  }
}

useModalControls.propTypes = modalType