import React, { Component } from 'react'
import {IngredientsTabs} from './ingredients-tabs/ingredients-tabs'
import {IngredientsList} from './ingredients-list/ingredients-list'

import burgerIngredientsStyles from './burger-ingredients.css'



export class BurgerIngredients extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <p className="pt-10 pb-5 text text_type_main-large">
          Соберите бургер
        </p>
        <IngredientsTabs />
        
        <IngredientsList data={this.props.data} />
      </>
    )
  }
}

export default BurgerIngredients