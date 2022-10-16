import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { IngredientDetails } from '../components/ingredient-details/ingredient-details';
import { HomePage } from './home';

import styles from './css/ingredient.module.css'

export const IngredientDetailsPage = () => {
    const {state, pathname} = useLocation();
    
  return (
    state?.from?.pathname === '/' || pathname === '/'
      ? (<HomePage />)
      : (<div className={`${styles.wrapper} pt-30`}>
          <IngredientDetails />
        </div>)
  )
}
