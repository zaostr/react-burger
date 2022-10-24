import { useEffect, useMemo, useState } from 'react'
import { Redirect, useLocation } from 'react-router-dom';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useModalControls } from '../../../hooks/useModalControls';
import { Modal } from '../../modal/modal'
import { makeOrder } from '../../../utils/burger-api';

import BurgerConstructorTotal from '../burger-constructor-total/burger-constructor-total'
import { OrderDetails } from '../../order-details/order-details';
import { useDispatch, useSelector } from 'react-redux';
import { 
  CART_ORDER_REQUEST,
  CART_ORDER_SUCCESS,
  CART_ORDER_FAIL,
  CART_SAVE_ORDER,
  cartClear
} from '../../../services/actions/cart';

import constructorFooter from './burger-constructor-footer.module.css'



const BurgerConstructorFooter = () => {
  const cartState = useSelector(store => store.cart);
  const isAuthorized = useSelector(store => store.auth.isAuthorized);
  const dispatch = useDispatch();
  const [requestErrorText, setRequestErrorText] = useState(false);
  const [orderId, setOrderId] = useState(0);
  //const [processOrder, setProccessOrder] = useState(cartState.orderRequest);
  const {state} = useLocation();
  const modalControls = useModalControls({
    closeCallback: () => setOrderId(0)
  });

  useEffect(() => {
    if (isAuthorized && state?.from === '/login' && state?.action === 'makeOrder') {
      handleMakeOrder();
    }
  },[isAuthorized, state]);
  
  const handleMakeOrder = () => {
    if (cartState.list.length === 0) {
      setRequestErrorText('Не выбрано ни одного ингредиента');
      modalControls.open();
      return false
    }

    if (cartState.list.filter(x => x.type === 'bun').length === 0) {
      setRequestErrorText('Не выбрана булка');
      modalControls.open();
      return false
    }
    

    dispatch({type: CART_ORDER_REQUEST});
    if (!isAuthorized) {
      return false
    }
    
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

  console.log(state, !isAuthorized && cartState.orderRequest);
  if (isAuthorized && state?.from === '/login' && state?.action === 'makeOrder') {
    //console.log(123);
    //handleMakeOrder();
  }

  if (!isAuthorized && cartState.orderRequest) {
    return (
      <Redirect to={{pathname: '/login', state: {from: '/', action: 'loginForOrder'}}} />
    )
  }

    
  return (
    <div className={`${constructorFooter.burgerConstructorFooter} mt-10 pb-15`}>

      <BurgerConstructorTotal />

      <Button type="primary" size="large" onClick={handleMakeOrder}>
          Оформить заказ
      </Button>

      <Modal {...modalControls}>
        {(cartState.orderRequest) 
          ? <h2 className='text text_type_main-large pt-4 mb-5'>Ваш заказ формируется..</h2>
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
