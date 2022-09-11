import {useEffect, useState} from 'react'
import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';

import BurgerConstructorElementsStyles from './burger-constructor-elements.module.css'
import './burger-constructor-elements.css'

import { ingredientType } from '../../../utils/types';

const BurgerConstructorElements = ({data}) => {
  const [selectedBun, setSelectedBun] = useState(data[0] || false);
  
  useEffect(() => {
    setSelectedBun(data[0]);
  },[data])
  
  return (
    <div>
      { selectedBun && (
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
      ) }  
      
      <div className={BurgerConstructorElementsStyles.wrap}>
        { data.map((igredient,key) => (
          (key!==0 && key!==data.length-1)
          && ( <div className={BurgerConstructorElementsStyles.ConstructorElement} key={key}>
                <DragIcon type="primary" />
                <ConstructorElement
                  isLocked={false}
                  text={igredient.name}
                  price={igredient.price}
                  thumbnail={igredient.image}
                />
              </div> )
        )) }
      </div>
      { selectedBun && (
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
      ) }  
    </div>
  )
}

export default BurgerConstructorElements


BurgerConstructorElements.propTypes = {
  data: PropTypes.arrayOf(ingredientType).isRequired
}