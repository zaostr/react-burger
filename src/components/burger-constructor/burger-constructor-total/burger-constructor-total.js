import React from 'react'
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'

import './burger-constructor-total.css'

const BurgerConstructorTotal = ({value}) => {
  return (
    <p className='total text text_type_digits-medium' style={{display: 'flex', alignItems: 'center'}}>
      {value}
      <CurrencyIcon />
    </p>
  )
}

export default BurgerConstructorTotal