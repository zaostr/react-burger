import React from 'react'
import { useLocation } from 'react-router-dom';
import { IngredientDetails } from '../components/ingredient-details/ingredient-details';
import { HomePage } from './home';

export const IngredientDetailsPage = () => {
    const location = useLocation();
    
  return (
    location?.from == '/' 
        ? (<HomePage />)
        : (<HomePage />)
  )
}
