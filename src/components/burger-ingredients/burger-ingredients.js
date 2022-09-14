import { useState } from 'react'
import PropTypes from 'prop-types';
import {IngredientsTabs} from './ingredients-tabs/ingredients-tabs'
import {IngredientsList} from './ingredients-list/ingredients-list'

import burgerIngredientsStyles from './burger-ingredients.css'

import { ingredientType } from '../../utils/types';


export const BurgerIngredients = ({data}) => {
  const [currentTab, setCurrentTab] = useState('bun');

  return (
    <>
      <p className="pt-10 pb-5 text text_type_main-large">
        Соберите бургер
      </p>
      <IngredientsTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      
      <IngredientsList data={data} currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </>
  )
}


BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientType).isRequired
}

export default BurgerIngredients