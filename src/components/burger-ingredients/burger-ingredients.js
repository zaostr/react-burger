import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {IngredientsTabs} from './ingredients-tabs/ingredients-tabs'
import {IngredientsList} from './ingredients-list/ingredients-list'

import burgerIngredientsStyles from './burger-ingredients.css'

import { ingredientType } from '../../utils/types';


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
BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientType).isRequired
}

export default BurgerIngredients