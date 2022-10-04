import React from 'react'
import IngredientCard from '../ingredients-card/ingredients-card'
import PropTypes from 'prop-types';

import IngredientsListStyles from './ingredients-list-section.module.css'

import { ingredientType } from '../../../../utils/types';


export const IngredientsListSection = ({type, ingredients}) => {
  let sectionTitle = '';
  switch(type) {
    case 'bun':
      sectionTitle = 'Булки';
      break;
  
    case 'sauce':
      sectionTitle = 'Соусы';
      break;
  
    case 'main':
      sectionTitle = 'Начинки';
      break;

    default:
      return;
  }
    return (
      (ingredients.length !== 0) && (
        <div id={`section-${type}`} data-type={type}>
          <p className="text text_type_main-medium m-0">{sectionTitle}</p>
          <div className='p-6 pb-10'>
            <div className={IngredientsListStyles.grid}>
            { ingredients.map((igredient,key) => <IngredientCard key={key} info={igredient} />) }
            </div>
          </div>
        </div>
      )
    )
}


IngredientsListSection.propTypes = {
  type: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(ingredientType).isRequired
}