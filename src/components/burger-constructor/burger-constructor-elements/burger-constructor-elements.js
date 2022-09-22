import {useEffect, useState, useContext} from 'react'
import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
//import PropTypes from 'prop-types';
//import { ConstructorContext } from '../../../services/constructorContext';

import BurgerConstructorElementsStyles from './burger-constructor-elements.module.css'

//import { ingredientType } from '../../../utils/types';
import { useDispatch, useSelector } from 'react-redux';
import { cartRemoveItem } from '../../../services/actions/cart'

const BurgerConstructorElements = () => {
  const [selectedBun, setSelectedBun] = useState(false);
  const dispatch = useDispatch();
  //const {cartState, dispatchCartState} = useContext(ConstructorContext);

  const cartList = useSelector(store => store.cart.list);
  
  useEffect(() => {
    setSelectedBun(cartList.filter(x => x.type === 'bun')[0] || false);
  },[JSON.stringify(cartList)])

  function removeConstructorElement(key) {
    dispatch(cartRemoveItem(key))
    /*dispatch({
      type: CART_REMOVE_ITEM,
      payload: {
        index: key
      }
    })*/
    //dispatchCartState({type:'removeIngredient',payload:{index:key}});
  }
  
  return (
    <div>
      { selectedBun ? (
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
      
      <div className={BurgerConstructorElementsStyles.ListWrapper}>
        { cartList.filter(x => x.type !== 'bun').length === 0 ?
          (
            <div className={BurgerConstructorElementsStyles.EmptyListWrapper}>
              <div className={BurgerConstructorElementsStyles.EmptyList}>Выберите начинку</div>
            </div>
          ) :
          (
            cartList.map((ingredient,key) => (
            (ingredient.type !== 'bun')
            && (
                <div className={BurgerConstructorElementsStyles.ConstructorElementWrapper} key={key}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    isLocked={false}
                    text={ingredient.name}
                    price={ingredient.price}
                    thumbnail={ingredient.image}
                    handleClose={()=>removeConstructorElement(key)}
                  />
                </div>
              )
            ))
          )
        }
      </div>
      { selectedBun ? (
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
  )
}

export default BurgerConstructorElements


/*BurgerConstructorElements.propTypes = {
  data: PropTypes.arrayOf(ingredientType).isRequired
}*/