import {useEffect} from 'react'
import { IngredientsListSection } from './ingredients-list-section/ingredients-list-section'
import PropTypes from 'prop-types';

import IngredientsListStyles from './ingredients-list.module.css'

import { ingredientType } from '../../../utils/types';

export const IngredientsList = ({data, setCurrentTab}) => {
  const getIngredientsByType = (allIngredients, searchableType) => {
    return allIngredients.filter(x => x.type === searchableType)
  }

  useEffect(() => {
    const wrapper = document.getElementById('IngredientsListSectionWrapper');
    const handleWrapperScroll = (e) => {
      const sections = e.target.childNodes;
      for (let index = sections.length; index > 0; index--) {
        const element = sections[index - 1];
        if ( (element.offsetHeight + (element.offsetTop - element.parentNode.offsetTop) - wrapper.scrollTop) > 0 ) {
          setCurrentTab(element.dataset.type);
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

IngredientsList.propTypes = {
  data: PropTypes.arrayOf(ingredientType).isRequired,
  setCurrentTab: PropTypes.func.isRequired
}