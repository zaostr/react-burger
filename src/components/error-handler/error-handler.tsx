import { Modal } from '../modal/modal';

import { useModalControls } from '../../hooks/useModalControls';
import { ERROR_STATE } from '../../services/actions/errorHandler'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

export const ErrorHandler = () => {
  const ErrorHandler = useAppSelector(store => store.errorHandler);
  const dispatch = useAppDispatch();
  
  const modalControls = useModalControls({
    isOpen:true,
    closeCallback: () => dispatch({type:ERROR_STATE, payload: false})
  });
  return (
    <>
        {( ErrorHandler.status && ErrorHandler.message ) ? (
          <Modal {...modalControls}>
            <div className={'mb-5'}>
                <p className='text text_type_main-large pt-4 mb-5'>Ошибка!</p>
                <p className='text text_type_main-medium mb-5'>Упс! Что-то пошло не так. <br></br>Обновите страницу или зайдите позже.</p>
                <p className='text text_type_main-default text_color_inactive'>Детали ошибки: {ErrorHandler.message}</p>
            </div>
          </Modal>
        ) : false}
    </>
  )
}
