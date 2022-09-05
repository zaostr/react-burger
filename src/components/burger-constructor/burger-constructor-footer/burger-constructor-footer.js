import React from 'react'
import {Button} from '@ya.praktikum/react-developer-burger-ui-components'

import BurgerConstructorTotal from '../burger-constructor-total/burger-constructor-total'

import './burger-constructor-footer.css'

const BurgerConstructorFooter = () => {
  return (
    <div className='burgerConstructorFooter mt-10 pb-15'>

        <BurgerConstructorTotal value={610} />

        <Button type="primary" size="large">
            Оформить заказ
        </Button>
    </div>
  )
}

export default BurgerConstructorFooter