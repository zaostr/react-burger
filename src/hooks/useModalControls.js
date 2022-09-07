import {useState} from 'react'

export const useModalControls = ({disableOverlayClose, disableOverlay}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

  return {
    open: handleOpenModal,
    close: handleCloseModal,
    modalProps: {
        isModalOpen,
        disableOverlayClose,
        disableOverlay
    }
  }
}
