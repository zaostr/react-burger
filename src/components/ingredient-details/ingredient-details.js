import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getIngredients } from '../../services/actions/ingredients';
import { getIngredientsRequest } from '../../utils/burger-api';
//import { ingredientType } from '../../../utils/types'

import detailsStyles from './ingredient-details.module.css'

export const IngredientDetails = () => {
    let {list,detailed} = useSelector(store => store.ingredients);
    const params = useParams();
    const dispatch = useDispatch();
    const [detailedIngedient, setDetailedIngedient] = useState(detailed);
    const [ingedients, setIngedients] = useState(false);
  
    useEffect(() => {
        if ((detailed === undefined || detailed === false) && params?.id) {
            getIngredientsRequest()
            .then(data => {
                if (data.success) {
                    setIngedients(data.data);
                    setDetailedIngedient(data.data.filter(ingredient => ingredient._id === params?.id)[0])
                } else{
                    setIngedients(false);
                }
            });
        }
    }, []);


    

  return (
    <>
    {( detailedIngedient ) ? (
        <div className={'mb-5'}>
            <p className={`${detailsStyles.ingredientDetailsHeading} ingredientTitle text text_type_main-large`}>Детали ингредиента</p>
            <div className={`${detailsStyles.ingredientDetailsInfo}`}>
                <img className='mb-4 pl-5 pr-5' src={detailedIngedient.image_large} alt='ingredient' width='100%' />
                <p className='text text_type_main-medium mb-8'>{detailedIngedient.name}</p>
                <div className={`${detailsStyles.ingredientDetailsList} text_color_inactive`}>
                <div className=''>
                    <p className='text text_type_main-default mb-2'>Калории,ккал</p>
                    <p className='text text_type_digits-default'>{detailedIngedient.calories}</p>
                </div>
                <div className=''>
                    <p className='text text_type_main-default mb-2'>Белки, г</p>
                    <p className='text text_type_digits-default'>{detailedIngedient.proteins}</p>
                </div>
                <div className=''>
                    <p className='text text_type_main-default mb-2'>Жиры, г</p>
                    <p className='text text_type_digits-default'>{detailedIngedient.fat}</p>
                </div>
                <div className=''>
                    <p className='text text_type_main-default mb-2'>Углеводы, г</p>
                    <p className='text text_type_digits-default'>{detailedIngedient.carbohydrates}</p>
                </div>
                </div>
            </div>
        </div>
    ) : (
            <h2>Произошла ошибка!</h2>
    )}
    </>
    
  )
}
