import React from 'react'
import PropTypes from 'prop-types';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'

import './burger-constructor-total.css'

const BurgerConstructorTotal = ({value}) => {
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