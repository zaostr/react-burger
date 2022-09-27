import {useEffect, useState, useContext} from 'react'
import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
//import PropTypes from 'prop-types';
//import { ConstructorContext } from '../../../services/constructorContext';
import { BurgerConstructorElement } from './burger-constructor-element/burger-constructor-element'

import BurgerConstructorElementsStyles from './burger-constructor-elements.module.css'

//import { ingredientType } from '../../../utils/types';
import { useDispatch, useSelector } from 'react-redux';
import { cartInsertItem } from '../../../services/actions/cart'
import { useDrop } from 'react-dnd';

const BurgerConstructorElements = () => {
  const [selectedBun, setSelectedBun] = useState(false);
  const dispatch = useDispatch();
  const [activeItemIndex, setActiveItemIndex] = useState(null);
  //const {cartState, dispatchCartState} = useContext(ConstructorContext);

  const cartList = useSelector(store => store.cart.list);

  const [{ isBunTopAreaHover }, dropBunTop] = useDrop({
    accept: 'bun-item',
    collect: monitor => ({
      isBunTopAreaHover: monitor.isOver()
    }),
    drop(item) {
      console.log(1,item);
      dispatch(cartInsertItem(item));
    }
  })
  const [{ isBunBottomAreaHover }, dropBunBottom] = useDrop({
    accept: 'bun-item',
    collect: monitor => ({
      isBunBottomAreaHover: monitor.isOver()
    }),
    drop(item) {
      console.log(2,item);
      dispatch(cartInsertItem(item));
    }
  })

  const [{ isIngredientAreaHover }, dropIngredient] = useDrop({
    accept: ['ingredients-item','cart--item'],
    collect: monitor => ({
      isIngredientAreaHover: monitor.isOver() && monitor.getItemType() === 'ingredients-item'
    }),
    drop(item, monitor) {
      console.log(3,item, monitor.getItemType());
      if ( monitor.getItemType() === 'ingredients-item' ) {
        dispatch(cartInsertItem(item));
      } else {
        console.log(4);
      }
    }
  })
  
  useEffect(() => {
    setSelectedBun(cartList.filter(x => x.type === 'bun')[0] || false);
  },[JSON.stringify(cartList)])
  
  return (
    <div>
      <div ref={dropBunTop}>
        { (selectedBun && !(isBunTopAreaHover || isBunBottomAreaHover)) ? (
          <div className={BurgerConstructorElementsStyles.ConstructorTopElementWrapper}>
            <span></span>
            <ConstructorElement
              type='top'
              isLocked={true}
              text={selectedBun.name+' (верх)'}
              price={selectedBun.price}
              thumbnail={selectedBun.image}
            />
          </div>
        ) : (
          <div className={BurgerConstructorElementsStyles.ConstructorEmptyTopElementWrapper}>
            <span></span>
            <div className={BurgerConstructorElementsStyles.ConstructorEmptyTopElement}>
              <div>Выберите булки</div>
            </div>
          </div>
        ) }
      </div>
      
      
      <div ref={dropIngredient} className={`${(cartList.filter(x => x.type !== 'bun').length === 0 || isIngredientAreaHover) ? BurgerConstructorElementsStyles.ListWrapperWithOverlay : BurgerConstructorElementsStyles.ListWrapper}`}>
        <div className={`${BurgerConstructorElementsStyles.EmptyListWrapper}`}>
          <div className={BurgerConstructorElementsStyles.EmptyList}>Выберите начинку</div>
        </div>
        <div className={BurgerConstructorElementsStyles.List}>
          { cartList.map((ingredient,key) => (
            (ingredient.type !== 'bun')
            && (
                <BurgerConstructorElement 
                  ingredient={ingredient}
                  index={key}
                  key={ingredient.uuid}
                />
              )
            )) }
        </div>
      </div>

      
      <div ref={dropBunBottom}>
        { (selectedBun && !(isBunTopAreaHover || isBunBottomAreaHover)) ? (
        <div className={BurgerConstructorElementsStyles.ConstructorBottomElementWrapper}>
          <span></span>
          <ConstructorElement
            type='bottom'
            isLocked={true}
            text={selectedBun.name+' (низ)'}
            price={selectedBun.price}
            thumbnail={selectedBun.image}
          />
        </div>
        ) : (
          <div className={BurgerConstructorElementsStyles.ConstructorEmptyBottomElementWrapper}>
            <span></span>
            <div className={BurgerConstructorElementsStyles.ConstructorEmptyBottomElement}>
              <div>Выберите булки</div>
            </div>
          </div>
        ) }
      </div>
    </div>
  )
}

export default BurgerConstructorElements


/*BurgerConstructorElements.propTypes = {
  data: PropTypes.arrayOf(ingredientType).isRequired
}*/