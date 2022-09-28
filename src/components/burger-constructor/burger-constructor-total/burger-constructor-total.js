import React from 'react'
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'

import constructorTotal from './burger-constructor-total.module.css'
import { useSelector } from 'react-redux';



const BurgerConstructorTotal = () => {
  const total = useSelector(store => store.cart.total);


  return (
    <p className={`${constructorTotal.total} text text_type_digits-medium`}>
      { total }
      <CurrencyIcon />
    </p>
  )
}

export default BurgerConstructorTotal
