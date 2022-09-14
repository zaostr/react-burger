/*import React, { useState } from 'react'
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
*/
import { useState, useEffect } from 'react'
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'

import IngredientsTabsStyles from './ingredients-tabs.module.css'



export const IngredientsTabs = ({currentTab, setCurrentTab}) => {

    const handleScrollToSection = (sectionsWrapperId, sectionId) => {
      const wrapper = document.getElementById(sectionsWrapperId) || false;
      const section = document.getElementById(`section-${sectionId}`) || false;
      if (!section) return;
      wrapper.scroll({
        top: section.offsetTop - section.parentNode.offsetTop, 
        left: 0, 
        behavior: 'smooth'
      });
      setCurrentTab(sectionId);
    }
    

    return (
      <div className='mb-10'>
        <div className={IngredientsTabsStyles.wrap}>
          <Tab value="bun" active={currentTab === 'bun'} onClick={()=>handleScrollToSection('IngredientsListSectionWrapper', 'bun')}>
              Булки
          </Tab>
          <Tab value="sauce" active={currentTab === 'sauce'} onClick={()=>handleScrollToSection('IngredientsListSectionWrapper', 'sauce')}>
              Соусы
          </Tab>
          <Tab value="main" active={currentTab === 'main'} onClick={()=>handleScrollToSection('IngredientsListSectionWrapper', 'main')}>
              Начинки
          </Tab>
        </div>
      </div>
    )
}
