import React from 'react'
import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';

import BurgerConstructorElementsStyles from './burger-constructor-elements.module.css'
import './burger-constructor-elements.css'

const BurgerConstructorElements = ({list}) => {
  return (
    <div>
      <div className={BurgerConstructorElementsStyles.ConstructorElement} style={{paddingRight: '16px'}}>
        <span></span>
        <ConstructorElement
          type='top'
          isLocked={true}
          text={list[0].name+' (верх)'}
          price={list[0].price}
          thumbnail={list[0].image}
        />
      </div>
      <div className={BurgerConstructorElementsStyles.wrap} style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '10px', marginTop: '10px', paddingRight: '8px' }}>
        { list.map((i,k) => (
          (k!==0 && k!==list.length-1)
          ? ( <div className={BurgerConstructorElementsStyles.ConstructorElement} key={k}>
                <DragIcon type="primary" />
                <ConstructorElement
                  isLocked={false}
                  text={i.name}
                  price={i.price}
                  thumbnail={i.image}
                />
              </div> )
          : ''
        )) }
      </div>
      <div className={BurgerConstructorElementsStyles.ConstructorElement} style={{paddingRight: '16px'}}>
        <span></span>
        <ConstructorElement
          type='bottom'
          isLocked={true}
          text={list[0].name+' (низ)'}
          price={list[0].price}
          thumbnail={list[0].image}
        />
      </div>
    </div>
  )
}

export default BurgerConstructorElements


BurgerConstructorElements.propTypes = {
  list: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number
  }).isRequired
}