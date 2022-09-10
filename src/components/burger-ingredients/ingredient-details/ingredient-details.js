import React from 'react'
import { ingredientType } from '../../../utils/types'

import './ingredient-details.css'

export const IngredientDetails = (props) => {
    console.log(ingredientType);
  return (
    <div className={'mb-5'}>
        <p className='ingredientDetailsHeading text text_type_main-large'>Детали ингредиента</p>
        <div className='ingredientDetailsInfo'>
            <img className='mb-4 pl-5 pr-5' src={props.image_large} alt='ingredient' width='100%' />
            <p className='text text_type_main-medium mb-8'>{props.name}</p>
            <div className='ingredientDetailsList text_color_inactive'>
            <div className=''>
                <p className='text text_type_main-default mb-2'>Калории,ккал</p>
                <p className='text text_type_digits-default'>{props.calories}</p>
            </div>
            <div className=''>
                <p className='text text_type_main-default mb-2'>Белки, г</p>
                <p className='text text_type_digits-default'>{props.proteins}</p>
            </div>
            <div className=''>
                <p className='text text_type_main-default mb-2'>Жиры, г</p>
                <p className='text text_type_digits-default'>{props.fat}</p>
            </div>
            <div className=''>
                <p className='text text_type_main-default mb-2'>Углеводы, г</p>
                <p className='text text_type_digits-default'>{props.carbohydrates}</p>
            </div>
            </div>
        </div>
    </div>
  )
}

IngredientDetails.propTypes = ingredientType.isRequired