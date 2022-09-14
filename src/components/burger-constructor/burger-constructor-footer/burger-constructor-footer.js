import {useEffect, useContext, useReducer, useMemo} from 'react'
import {Button} from '@ya.praktikum/react-developer-burger-ui-components'
import { useModalControls } from '../../../hooks/useModalControls';
import { Modal } from '../../modal/modal'
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import { ConstructorContext } from '../../../services/constructorContext';

//import BurgerConstructorTotal from '../burger-constructor-total/burger-constructor-total'
import { OrderDetails } from '../../order/order-details/order-details';

import './burger-constructor-footer.css'

const constructorTotalReducer = (state, ingredients) => {
  if (!ingredients.length) return 0;
  let total = 0;
  ingredients.forEach(ingredient => total+=ingredient.price*ingredient.count)
  return total;
}

const BurgerConstructorFooter = () => {
  const {orderState, dispatchOrderState} = useContext(ConstructorContext);
  const [constructorTotal, dispatchConstructorTotal] = useReducer(constructorTotalReducer, 0);
  const modalControls = useModalControls();

  useEffect(() => {
    dispatchConstructorTotal(orderState.ingredients);
    console.log(constructorTotal);
  },[orderState])

  const BurgerConstructorTotal = useMemo(() => {
    return (
      <p className='total text text_type_digits-medium'>
        {constructorTotal}
        <CurrencyIcon />
      </p>
    )
  },[constructorTotal])
  
  



  return (
    <div className='burgerConstructorFooter mt-10 pb-15'>

        { BurgerConstructorTotal }

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
