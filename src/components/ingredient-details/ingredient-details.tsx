import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { setDetailedIngredient } from '../../services/actions/ingredients';
import { Loader } from '../loader/loader';
//import { getIngredientsRequest } from '../../utils/burger-api';

import detailsStyles from './ingredient-details.module.css'

import { ingredientType } from '../../utils/types';

export const IngredientDetails = () => {
    // @ts-ignore
    const {detailed, list, ingredientsRequest} = useSelector(store => store.ingredients);
    const params: {id: string | undefined;} = useParams();
    const dispatch = useDispatch();
    const [detailedIngedient, setDetailedIngedientState] = useState<ingredientType>(detailed);

    useEffect(() => {
        setDetailedIngedientState(list.filter((ingredient: ingredientType) => ingredient._id === params?.id)[0]);
        if (detailed === false) {
            // @ts-ignore
            dispatch(setDetailedIngredient(detailedIngedient));
        }
    }, [detailed, list, detailedIngedient, dispatch, params?.id]);

    if (ingredientsRequest) {
        return <Loader />
    }
    
  return (
    <>
    {( detailedIngedient ) && (
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
    )}
    </>
    
  )
}
