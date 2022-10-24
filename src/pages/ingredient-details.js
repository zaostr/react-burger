import React from 'react'
import { IngredientDetails } from '../components/ingredient-details/ingredient-details';

import styles from './css/ingredient.module.css'

export const IngredientDetailsPage = () => {
  return (
    <div className={`${styles.wrapper} pt-30`}>
      <IngredientDetails />
    </div>
  )
}
