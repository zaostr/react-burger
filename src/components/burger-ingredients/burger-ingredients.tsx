import { useState } from 'react'
import {IngredientsTabs} from './ingredients-tabs/ingredients-tabs'
import {IngredientsList} from './ingredients-list/ingredients-list'

//import burgerIngredientsStyles from './burger-ingredients.module.css'
import { Loader } from '../loader/loader'
import { useAppSelector } from '../../hooks/redux'



export const BurgerIngredients = () => {
  const [currentTab, setCurrentTab] = useState('bun');
  const {list, ingredientsRequest} = useAppSelector(store => store.ingredients);

  return (
    <>
      <p className="pt-10 pb-5 text text_type_main-large">
        Соберите бургер
      </p>

      
      { ingredientsRequest && (
        <Loader />
      )}

      { (list.length > 0 && !ingredientsRequest) && 
        <>
          <IngredientsTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
        
          <IngredientsList data={list} setCurrentTab={setCurrentTab} />
        </>
      }
    </>
  )
}



export default BurgerIngredients