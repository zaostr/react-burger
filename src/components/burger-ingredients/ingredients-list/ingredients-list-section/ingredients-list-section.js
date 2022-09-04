import React from 'react'
import IngredientCard from '../ingredients-card/ingredients-card'
import PropTypes from 'prop-types';

import IngredientsListStyles from './ingredients-list-section.module.css'


export const IngredientsListSection = ({type, ingredients}) => {
  let sectionTitle = '';
  if (type === 'bun') {
    sectionTitle = 'Булки';
  } else if (type === 'sauce') {
    sectionTitle = 'Соусы';
  } else if (type === 'main') {
    sectionTitle = 'Начинки';
  }
  console.log(sectionTitle);
    return (
      <>
        <p className="text text_type_main-medium m-0">{sectionTitle}</p>
        <div className='p-6 pb-10'>
          <div className={IngredientsListStyles.grid}>
          { ingredients.map((i,k) => (<IngredientCard key={k} info={i} />)) }
          </div>
        </div>
      </>
    )
}


IngredientsListSection.propTypes = {
  type: PropTypes.string,
  ingredients: PropTypes.shape({
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