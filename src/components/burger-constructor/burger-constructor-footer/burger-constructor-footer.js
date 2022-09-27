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
import { 
  CART_ORDER_REQUEST,
  CART_ORDER_SUCCESS,
  CART_ORDER_FAIL,
  CART_SAVE_ORDER,
  cartClear
} from '../../../services/actions/cart';

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
  const [requestErrorText, setRequestErrorText] = useState(false);
  const [orderId, setOrderId] = useState(0);
  const modalControls = useModalControls({
    closeCallback: () => setOrderId(0)
  });


  
  const handleMakeOrder = () => {
    if (cartState.list.length === 0) {
      return false
    };
    dispatch({type: CART_ORDER_REQUEST});
    modalControls.open();

    makeOrder(cartState)
    .then(dataJson => {
      setTimeout(() => {
        dispatch({type: CART_ORDER_SUCCESS});
        dispatch({type: CART_SAVE_ORDER, payload: dataJson.order});
        setOrderId(dataJson.order.number);
        dispatch(cartClear());
      },2000)
      
    })
    .catch(err => {
      dispatch({type: CART_ORDER_FAIL});
      setRequestErrorText(err.message)
    });


  }


  return (
    <div className='burgerConstructorFooter mt-10 pb-15'>

      {  }
      <BurgerConstructorTotal />

      <Button type="primary" size="large" onClick={handleMakeOrder}>
          Оформить заказ
      </Button>

      <Modal {...modalControls}>
        {(cartState.orderRequest) 
          ? <h2>Loading..</h2>
          : (
            (cartState.orderSuccess)
              ? <OrderDetails id={orderId} />
              : <>
                  <div className={'mb-5'}>
                      <p className='text text_type_main-large pt-4 mb-5'>Ошибка!</p>
                      <p className='text text_type_main-medium mb-5'>Упс! Что-то пошло не так. <br></br>Обновите страницу или зайдите позже.</p>
                      <p className='text text_type_main-default text_color_inactive'>Детали ошибки: {requestErrorText}</p>
                  </div>
                </>
          ) }
      </Modal>
    </div>
  )
}

export default BurgerConstructorFooter
