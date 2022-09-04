import React from 'react'
import {Button} from '@ya.praktikum/react-developer-burger-ui-components'

import BurgerConstructorTotal from '../burger-constructor-total/burger-constructor-total'

const BurgerConstructorFooter = () => {
  return (
    <div className='mt-10 pb-15' style={{ display: 'flex', justifyContent: 'end', gap: '48px' }}>

        <BurgerConstructorTotal value={610} />

        <Button type="primary" size="large" onClick={()=>console.log(1)}>
            Оформить заказ
        </Button>
    </div>
  )
}

export default BurgerConstructorFooter