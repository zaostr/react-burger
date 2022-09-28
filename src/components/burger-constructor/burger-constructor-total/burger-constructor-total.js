import React from 'react'
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'

import './burger-constructor-total.css'
import { useSelector } from 'react-redux';



const BurgerConstructorTotal = () => {
  const total = useSelector(store => store.cart.total);


  return (
    <p className='total text text_type_digits-medium'>
      { total }
      <CurrencyIcon />
    </p>
  )
}

export default BurgerConstructorTotal
