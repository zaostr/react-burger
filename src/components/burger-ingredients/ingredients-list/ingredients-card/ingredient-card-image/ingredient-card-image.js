import React from 'react'
import PropTypes from 'prop-types';

const IngredientCardImage = ({img}) => {
  return (
    <>
        <img src={img ? img : '/no-image.png'} alt="ingredient" />
    </>
  )
}

export default IngredientCardImage

IngredientCardImage.propTypes = {
  img: PropTypes.string.isRequired
}