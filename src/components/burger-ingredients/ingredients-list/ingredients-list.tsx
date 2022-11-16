import {SyntheticEvent, useEffect} from 'react'
import { IngredientsListSection } from './ingredients-list-section/ingredients-list-section'
import PropTypes from 'prop-types';

import IngredientsListStyles from './ingredients-list.module.css'

import { ingredientType } from '../../../utils/types';

export const IngredientsList = ({data, setCurrentTab}: {
  data: ingredientType[];
  setCurrentTab: (arg: string) => void;
}): JSX.Element => {
  const getIngredientsByType = (allIngredients: ingredientType[], searchableType: string) => {
    return allIngredients.filter(x => x.type === searchableType)
  }

  useEffect(() => {
    const wrapper = document.getElementById('IngredientsListSectionWrapper') as HTMLElement;
    const handleWrapperScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      const sections = target.childNodes;
      for (let index = sections.length; index > 0; index--) {
        const element = sections[index - 1] as HTMLElement;
        const elementParent = element.parentNode as HTMLElement;
        const elementType = element.dataset.type as string;
        if ( (element.offsetHeight + (element.offsetTop - elementParent.offsetTop) - wrapper.scrollTop) > 0 ) {
          setCurrentTab(elementType);
        }
      }
    }
    
    wrapper.addEventListener('scroll', handleWrapperScroll, false);
    return () => {
      wrapper.removeEventListener('scroll', handleWrapperScroll, false);
    }
  }, [setCurrentTab])

  return (
    <>
      <div id='IngredientsListSectionWrapper' className={IngredientsListStyles.wrap}>
        { ['bun','sauce','main'].map((igredient,key) => (
          <IngredientsListSection key={key} type={igredient} ingredients={ getIngredientsByType(data, igredient) } /> 
        )) }
      </div>
    </>
  )
}
/*
IngredientsList.propTypes = {
  data: PropTypes.arrayOf(ingredientType).isRequired,
  setCurrentTab: PropTypes.func.isRequired
}*/