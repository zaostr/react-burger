import React from 'react'
import PropTypes from 'prop-types';

const IngredientCardImage = ({img, imgSmall, imgLarge}) => {
  return (
    <>
        <img src={img ? img : '/no-image.png'} />
    </>
  )
}

export default IngredientCardImage

IngredientCardImage.propTypes = {
  price: PropTypes.string.isRequired
}