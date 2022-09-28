import React from 'react'
import { useSelector } from 'react-redux'
//import { ingredientType } from '../../../utils/types'

import './ingredient-details.css'

export const IngredientDetails = () => {
    const detailed = useSelector(store => store.ingredients.detailed);


  return (
    ( detailed ) ? (
        <div className={'mb-5'}>
            <p className='ingredientDetailsHeading text text_type_main-large'>Детали ингредиента</p>
            <div className='ingredientDetailsInfo'>
                <img className='mb-4 pl-5 pr-5' src={detailed.image_large} alt='ingredient' width='100%' />
                <p className='text text_type_main-medium mb-8'>{detailed.name}</p>
                <div className='ingredientDetailsList text_color_inactive'>
                <div className=''>
                    <p className='text text_type_main-default mb-2'>Калории,ккал</p>
                    <p className='text text_type_digits-default'>{detailed.calories}</p>
                </div>
                <div className=''>
                    <p className='text text_type_main-default mb-2'>Белки, г</p>
                    <p className='text text_type_digits-default'>{detailed.proteins}</p>
                </div>
                <div className=''>
                    <p className='text text_type_main-default mb-2'>Жиры, г</p>
                    <p className='text text_type_digits-default'>{detailed.fat}</p>
                </div>
                <div className=''>
                    <p className='text text_type_main-default mb-2'>Углеводы, г</p>
                    <p className='text text_type_digits-default'>{detailed.carbohydrates}</p>
                </div>
                </div>
            </div>
        </div>
    ) : (
        <div>
            <h2>Произошла ошибка!</h2>
        </div>
    )
    
  )
}

//IngredientDetails.propTypes = ingredientType.isRequired