import React from 'react'
import {Counter} from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientCardImage from './ingredient-card-image/ingredient-card-image'
import IngredientCardPrice from './ingredient-card-price/ingredient-card-price'
import PropTypes from 'prop-types';

import IngredientCardStyles from './ingredients-card.module.css'

const IngredientCard = ({info}) => {
  return (
    <div>
        <div className='pl-4 pr-4 position-relative'>
            <Counter count={1} size="default" />

            <IngredientCardImage img={info.image} />

            <div className='mt-1 mb-1'>
                <IngredientCardPrice price={info.price} />
            </div>
        </div>
        <p className='text-center text text_type_main-default'>
            {info.name}
        </p>
    </div>
  )
}

export default IngredientCard


IngredientCard.propTypes = {
  info: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number
  }).isRequired
}