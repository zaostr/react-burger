import React from 'react'
import { IngredientsListSection } from './ingredients-list-section/ingredients-list-section'
import PropTypes from 'prop-types';

import IngredientsListStyles from './ingredients-list.module.css'


export const IngredientsList = ({data}) => {
    return (
      <div className={IngredientsListStyles.wrap}>
        { ['bun','sauce','main'].map((i,k) => (
          <IngredientsListSection key={k} type={i} ingredients={ data.filter(x => x.type === i) } /> 
        )) }
      </div>
    )
}

IngredientsList.propTypes = {
  data: PropTypes.shape({
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