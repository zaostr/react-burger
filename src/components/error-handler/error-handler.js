import React from 'react'
import { Modal } from '../modal/modal';
import PropTypes from 'prop-types'

import { useModalControls } from '../../hooks/useModalControls';

export const ErrorHandler = ({errorMessage}) => {
    const modalControls = useModalControls({isOpen:true});
  return (
    <>
        {( errorMessage ) && (
        <Modal {...modalControls}>
            <div className={'mb-5'}>
                <p className='text text_type_main-large pt-4 mb-5'>Ошибка!</p>
                <p className='text text_type_main-medium mb-5'>Упс! Что-то пошло не так. <br></br>Обновите страницу или зайдите позже.</p>
                <p className='text text_type_main-default text_color_inactive'>Детали ошибки: {errorMessage}</p>
            </div>
            </Modal>
        )}
    </>
  )
}

ErrorHandler.propTypes = {
    errorMessage: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
      ]).isRequired
}