import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'

import IngredientsTabsStyles from './ingredients-tabs.module.css'



export const IngredientsTabs = ({currentTab, setCurrentTab}: {
  currentTab: string;
  setCurrentTab: (arg: string) => void;
} ) => {

    const handleScrollToSection = (sectionsWrapperId: string, sectionId: string) => {
      const wrapper: HTMLElement | null = document.getElementById(sectionsWrapperId) || null;
      const section = document.getElementById(`section-${sectionId}`) as HTMLElement | null;
      if (!wrapper) return;
      if (!section) return;
      const sectionParent = section.parentNode as HTMLElement;
      wrapper.scroll({
        /*top: section.offsetTop,*/
        top: section.offsetTop - sectionParent.offsetTop + 4,
        left: 0, 
        behavior: 'smooth'
      });
      /*section.scrollIntoView({behavior: 'smooth'})*/
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
