import React from 'react'
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';

import IngredientCardPriceStyles from './ingredient-card-price.module.css'

const IngredientCardPrice = ({price}: {price: number}) => {
  return (
    <span className={IngredientCardPriceStyles.price}>
        <span className='text text_type_digits-default mr-2'>
          { price }
        </span>
        <CurrencyIcon type="primary" />
    </span>
  )
}

export default IngredientCardPrice

IngredientCardPrice.propTypes = {
  price: PropTypes.number.isRequired
}