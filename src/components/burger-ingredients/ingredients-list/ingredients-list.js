import React from 'react'
import { IngredientsListSection } from './ingredients-list-section/ingredients-list-section'
import PropTypes from 'prop-types';

import IngredientsListStyles from './ingredients-list.module.css'

import { ingredientType } from '../../../utils/types';

export const IngredientsList = ({data}) => {

  const getIngredientsByType = (allIngredients, searchableType) => {
    return allIngredients.filter(x => x.type === searchableType)
  }


    return (
      <div className={IngredientsListStyles.wrap}>
        { ['bun','sauce','main'].map((igredient,key) => (
          <IngredientsListSection key={key} type={igredient} ingredients={ getIngredientsByType(data, igredient) } /> 
        )) }
      </div>
    )
}

IngredientsList.propTypes = {
  data: PropTypes.arrayOf(ingredientType).isRequired
}