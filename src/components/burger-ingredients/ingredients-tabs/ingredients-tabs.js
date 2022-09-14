import React, { useState } from 'react'
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'

import IngredientsTabsStyles from './ingredients-tabs.module.css'



export const IngredientsTabs = () => {
    const [current, setCurrent] = useState('one');
    return (
      <div className='mb-10'>
        <div className={IngredientsTabsStyles.wrap}>
          <Tab value="one" active={current === 'one'} onClick={setCurrent}>
              Булки
          </Tab>
          <Tab value="two" active={current === 'two'} onClick={setCurrent}>
              Соусы
          </Tab>
          <Tab value="three" active={current === 'three'} onClick={setCurrent}>
              Начинки
          </Tab>
        </div>
      </div>
    )
}
