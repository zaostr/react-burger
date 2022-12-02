import React from 'react'
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'

import constructorTotal from './burger-constructor-total.module.css'

import { useAppSelector } from '../../../hooks/redux';



const BurgerConstructorTotal = () => {
  const total = useAppSelector(store => store.cart.total);


  return (
    <p className={`${constructorTotal.total} text text_type_digits-medium`}>
      { total }
      <CurrencyIcon type={'primary'} />
    </p>
  )
}

export default BurgerConstructorTotal
