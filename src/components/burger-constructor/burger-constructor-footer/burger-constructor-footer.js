import React from 'react'
import {Button} from '@ya.praktikum/react-developer-burger-ui-components'
import { useModalControls } from '../../../hooks/useModalControls';
import { Modal } from '../../modal/modal'

import BurgerConstructorTotal from '../burger-constructor-total/burger-constructor-total'
import { OrderDetails } from '../../order/order-details/order-details';

import './burger-constructor-footer.css'

const BurgerConstructorFooter = () => {
  const modalControls = useModalControls();
  return (
    <div className='burgerConstructorFooter mt-10 pb-15'>

        <BurgerConstructorTotal value={610} />

        <Button type="primary" size="large" onClick={modalControls.open}>
            Оформить заказ
        </Button>

        <Modal {...modalControls}>
          <OrderDetails id='034536' />
        </Modal>
    </div>
  )
}

export default BurgerConstructorFooter