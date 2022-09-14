import {useEffect, useContext, useReducer} from 'react'
import PropTypes from 'prop-types';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import { ConstructorContext } from '../../../services/constructorContext';

import './burger-constructor-total.css'

const c1onstructorTotalReducer = (state, ingredients) => {
  if (!ingredients.length) return 0;
  let total = 0;
  ingredients.forEach(ingredient => total+=ingredient.price*ingredient.count)
  return total;
}

const BurgerConstructorTotal = ({value}) => {
  const {orderState, dispatchOrderState} = useContext(ConstructorContext);
  const [constructorTotal, dispatchConstructorTotal] = useReducer(constructorTotalReducer, 0);

  useEffect(() => {
    dispatchConstructorTotal(orderState.ingredients);
    console.log(constructorTotal);
  },[orderState])

  return (
    <p className='total text text_type_digits-medium'>
      {value}
      <CurrencyIcon />
    </p>
  )
}

export default BurgerConstructorTotal



BurgerConstructorTotal.propTypes = {
  value: PropTypes.number.isRequired
}