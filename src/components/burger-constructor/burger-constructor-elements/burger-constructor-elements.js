import {useEffect, useState, useContext} from 'react'
import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import { ConstructorContext } from '../../../services/constructorContext';

import BurgerConstructorElementsStyles from './burger-constructor-elements.module.css'
import './burger-constructor-elements.css'

import { ingredientType } from '../../../utils/types';

const BurgerConstructorElements = () => {
  const [selectedBun, setSelectedBun] = useState(false);
  const {cartState, dispatchCartState} = useContext(ConstructorContext);
  
  useEffect(() => {
    setSelectedBun(cartState.ingredients.filter(x => x.type === 'bun')[0] || false);
  },[JSON.stringify(cartState)])

  function removeConstructorElement(key) {
    dispatchCartState({type:'removeIngredient',payload:{index:key}});
  }
  
  return (
    <div>
      { selectedBun ? (
        <div className={BurgerConstructorElementsStyles.ConstructorElementTop}>
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
        <div className={BurgerConstructorElementsStyles.ConstructorElementTop}>
          <span></span>
          <div className='constructor-element constructor-element_pos_top'>
            <div style={{height: '48px'}}>Выберите булки</div>
          </div>
        </div>
      ) }  
      
      <div className={BurgerConstructorElementsStyles.wrap}>
        { cartState.ingredients.filter(x => x.type !== 'bun').length === 0 ?
          (
            <div className='constructor-element' style={{margin: '0 8px 0 32px', width: 'auto'}}>
              <div>Выберите начинку</div>
            </div>
          ) :
          (
            cartState.ingredients.map((ingredient,key) => (
            (ingredient.type !== 'bun')
            && (
                <div className={BurgerConstructorElementsStyles.ConstructorElement} key={key}>
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
      <div className={BurgerConstructorElementsStyles.ConstructorElementBottom}>
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
        <div className={BurgerConstructorElementsStyles.ConstructorElementBottom}>
          <span></span>
          <div className='constructor-element constructor-element_pos_bottom'>
            <div style={{height: '48px'}}>Выберите булки</div>
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