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

  const cartList = useSelector(store => store.cart.list);

  const [{ isBunTopAreaHover, canDropBunTop }, dropBunTop] = useDrop({
    accept: 'bun-item',
    collect: monitor => ({
      isBunTopAreaHover: monitor.isOver(),
      canDropBunTop: monitor.canDrop()
    }),
    drop(item) {
      dispatch(cartInsertItem(item));
    }
  })
  const [{ isBunBottomAreaHover, canDropBunBottom }, dropBunBottom] = useDrop({
    accept: 'bun-item',
    collect: monitor => ({
      isBunBottomAreaHover: monitor.isOver(),
      canDropBunBottom: monitor.canDrop()
    }),
    drop(item) {
      dispatch(cartInsertItem(item));
    }
  })

  const [{ isIngredientAreaHover, canDropIngredient }, dropIngredient] = useDrop({
    accept: 'ingredients-item',
    collect: monitor => ({
      isIngredientAreaHover: monitor.isOver(),
      canDropIngredient: monitor.canDrop()
    }),
    drop(item) {
      dispatch(cartInsertItem(item));
    }
  })

 

  useEffect(() => {
    setSelectedBun(cartList.filter(x => x.type === 'bun')[0] || false);
  },[JSON.stringify(cartList)])
  
  return (
    <div>
      <div ref={dropBunTop}>
        { (selectedBun && !(canDropBunTop || canDropBunBottom)) ? (
          <div 
            className={BurgerConstructorElementsStyles.ConstructorTopElementWrapper}
          >
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
            <div 
              className={`${BurgerConstructorElementsStyles.ConstructorEmptyTopElement}
              ${(isBunTopAreaHover || isBunBottomAreaHover) 
                ? BurgerConstructorElementsStyles.overlayActive 
                : ''
              }`}
            >
              <div>Выберите булки</div>
            </div>
          </div>
        ) }
      </div>
      
      
      <div 
        ref={dropIngredient} 
        className={`
        ${(cartList.filter(x => x.type !== 'bun').length === 0 || canDropIngredient) 
          ? BurgerConstructorElementsStyles.ListWrapperWithOverlay 
          : BurgerConstructorElementsStyles.ListWrapper
        }`}>
        <div className={`${BurgerConstructorElementsStyles.EmptyListWrapper}`}>
          <div
            className={`${BurgerConstructorElementsStyles.EmptyList}
            ${(isIngredientAreaHover) 
              ? BurgerConstructorElementsStyles.overlayActive 
              : ''
            }`}>Выберите начинку</div>
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
        { (selectedBun && !(canDropBunTop || canDropBunBottom)) ? (
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
            <div 
              className={`${BurgerConstructorElementsStyles.ConstructorEmptyBottomElement} 
              ${(isBunTopAreaHover || isBunBottomAreaHover) 
                ? BurgerConstructorElementsStyles.overlayActive 
                : ''
              }`}>
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