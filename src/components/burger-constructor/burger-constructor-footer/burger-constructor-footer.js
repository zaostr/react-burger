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
  ingredients.forEach(ingredient => ingredient.type === 'bun' ? total+=ingredient.price*2 : total+=ingredient.price)
  return total;
}

const BurgerConstructorFooter = () => {
  const {cartState, setCartState} = useContext(ConstructorContext);
  const [constructorTotal, dispatchConstructorTotal] = useReducer(constructorTotalReducer, 0);
  const modalControls = useModalControls();

  useEffect(() => {
    dispatchConstructorTotal(cartState.ingredients);
  },[JSON.stringify(cartState)])

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
