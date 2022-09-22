import {useState, useEffect, useContext, useReducer, useMemo} from 'react'
import {Button} from '@ya.praktikum/react-developer-burger-ui-components'
import { useModalControls } from '../../../hooks/useModalControls';
import { Modal } from '../../modal/modal'
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import { ConstructorContext } from '../../../services/constructorContext';
import { makeOrder } from '../../../utils/burger-api';
import { ErrorHandler } from '../../error-handler/error-handler';

import BurgerConstructorTotal from '../burger-constructor-total/burger-constructor-total'
import { OrderDetails } from '../../order/order-details/order-details';

import './burger-constructor-footer.css'
import { useDispatch, useSelector } from 'react-redux';
import { cartClear } from '../../../services/actions/cart';

const constructorTotalReducer = (state, ingredients) => {
  if (!ingredients.length) return 0;
  let total = 0;
  ingredients.forEach(ingredient => ingredient.type === 'bun' ? total+=ingredient.price*2 : total+=ingredient.price)
  return total;
}

const BurgerConstructorFooter = () => {
  //const {cartState, dispatchCartState} = useContext(ConstructorContext);
  const cartState = useSelector(store => store.cart);
  const dispatch = useDispatch();
  const modalControls = useModalControls();
  const [requestErrorText, setRequestErrorText] = useState(false);
  const [orderId, setOrderId] = useState(0);


  
  const handleMakeOrder = () => {
    if (cartState.list.length === 0) {
      return false
    };
    makeOrder(cartState)
    .then(dataJson => {
      modalControls.open();
      setOrderId(dataJson.order.number);
      dispatch(cartClear());
      //dispatchCartState({type:'clear'});
    })
    .catch(err => setRequestErrorText(err.message));


  }
{/**/}


  return (
    <div className='burgerConstructorFooter mt-10 pb-15'>

      {  }
      <BurgerConstructorTotal />

      <Button type="primary" size="large" onClick={handleMakeOrder}>
          Оформить заказ
      </Button>

      <Modal {...modalControls}>
        <OrderDetails id={orderId} />
      </Modal>
      <ErrorHandler errorMessage={requestErrorText} />
    </div>
  )
}

export default BurgerConstructorFooter
