import React, { Component } from 'react'
import BurgerConstructorFooter from './burger-constructor-footer/burger-constructor-footer'
import BurgerConstructorElements from './burger-constructor-elements/burger-constructor-elements'

import burgerConstructorStyles from './burger-constructor.module.css'

import { ingredients } from '../../utils/data'

export class BurgerConstructor extends Component {
  render() {
    return (
      <div className='mt-25'>

        <BurgerConstructorElements list={ingredients} />
        
        <BurgerConstructorFooter />
      </div>
    )
  }
}

export default BurgerConstructor