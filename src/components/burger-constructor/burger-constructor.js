import React from 'react'
import BurgerConstructorFooter from './burger-constructor-footer/burger-constructor-footer'
import BurgerConstructorElements from './burger-constructor-elements/burger-constructor-elements'

//import burgerConstructorStyles from './burger-constructor.module.css'

export const BurgerConstructor = () => {
  return (
    <div className='mt-25'>

      <BurgerConstructorElements />
      
      <BurgerConstructorFooter />
    </div>
  )
}

export default BurgerConstructor
