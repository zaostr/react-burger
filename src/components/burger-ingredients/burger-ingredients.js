import { useState, useEffect } from 'react'
import {IngredientsTabs} from './ingredients-tabs/ingredients-tabs'
import {IngredientsList} from './ingredients-list/ingredients-list'
import { getIngredients } from '../../services/actions/ingredients';
import { useSelector, useDispatch } from 'react-redux'
import { cartInsertItem } from '../../services/actions/cart'

//import burgerIngredientsStyles from './burger-ingredients.css'



export const BurgerIngredients = () => {
  const [currentTab, setCurrentTab] = useState('bun');
  const dispatch = useDispatch();

  const list = useSelector(store => store.ingredients.list);

  useEffect(() => {
    dispatch( getIngredients() );
  }, [dispatch]);

  useEffect(() => {
    list.map(i => {
      dispatch(cartInsertItem(i));
      //dispatch({type: CART_INSERT_ITEM, payload: i})
    })
  },[list])

  return (
    <>
      <p className="pt-10 pb-5 text text_type_main-large">
        Соберите бургер
      </p>
      <IngredientsTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      
      <IngredientsList data={list} currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </>
  )
}


/*BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientType).isRequired
}*/

export default BurgerIngredients