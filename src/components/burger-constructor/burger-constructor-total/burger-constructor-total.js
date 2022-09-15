import {useEffect, useContext, useReducer} from 'react'
import PropTypes from 'prop-types';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import { ConstructorContext } from '../../../services/constructorContext';

import './burger-constructor-total.css'

const constructorTotalReducer = (state, ingredients) => {
  if (!ingredients.length) return 0;
  let total = 0;
  ingredients.forEach(ingredient => ingredient.type === 'bun' ? total+=ingredient.price*2 : total+=ingredient.price)
  return total;
}

const BurgerConstructorTotal = () => {
  const {cartState, dispatchCartState} = useContext(ConstructorContext);
  const [constructorTotal, dispatchConstructorTotal] = useReducer(constructorTotalReducer, 0);

  useEffect(() => {
    dispatchConstructorTotal(cartState.ingredients);
  },[JSON.stringify(cartState)])

  return (
    <p className='total text text_type_digits-medium'>
      { constructorTotal }
      <CurrencyIcon />
    </p>
  )
}

export default BurgerConstructorTotal
