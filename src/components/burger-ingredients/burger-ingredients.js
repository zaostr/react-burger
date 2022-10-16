import { useState } from 'react'
import {IngredientsTabs} from './ingredients-tabs/ingredients-tabs'
import {IngredientsList} from './ingredients-list/ingredients-list'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector } from 'react-redux'

import burgerIngredientsStyles from './burger-ingredients.module.css'



export const BurgerIngredients = () => {
  const [currentTab, setCurrentTab] = useState('bun');

   const {list, ingredientsRequest} = useSelector(store => store.ingredients);


  return (
    <>
      <p className="pt-10 pb-5 text text_type_main-large">
        Соберите бургер
      </p>

      
      { ingredientsRequest && (
          <div className={burgerIngredientsStyles.loader_container}>
            <div className={burgerIngredientsStyles.loader_wrapper}>
              <span className={burgerIngredientsStyles.loader}>
                <BurgerIcon type="primary" />
              </span>
            </div>
          </div>)
      }

      { (list.length > 0 && !ingredientsRequest) && 
        <>
          <IngredientsTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
        
          <IngredientsList data={list} setCurrentTab={setCurrentTab} />
        </>
      }
    </>
  )
}


/*BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientType).isRequired
}*/

export default BurgerIngredients