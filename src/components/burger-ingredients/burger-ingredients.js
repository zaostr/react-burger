import React, { Component } from 'react'
import {IngredientsTabs} from './ingredients-tabs/ingredients-tabs'
import {IngredientsList} from './ingredients-list/ingredients-list'

import burgerIngredientsStyles from './burger-ingredients.css'

import {ingredients} from '../../utils/data'


export class BurgerIngredients extends Component {
  render() {
    return (
      <>
        <p className="pt-10 pb-5 text text_type_main-large">
          Соберите бургер
        </p>
        <IngredientsTabs />
        
        <IngredientsList data={ingredients} />
      </>
    )
  }
}

export default BurgerIngredients