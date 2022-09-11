import React from 'react'
import {Counter} from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientCardImage from './ingredient-card-image/ingredient-card-image'
import IngredientCardPrice from './ingredient-card-price/ingredient-card-price'
import { IngredientDetails } from '../../ingredient-details/ingredient-details';

import { useModalControls } from '../../../../hooks/useModalControls';
import { Modal } from '../../../modal/modal'

import IngredientCardStyles from './ingredients-card.module.css'

import { ingredientType } from '../../../../utils/types';

const IngredientCard = ({info}) => {
  const modalControls = useModalControls();
  return (
    <>
      <div className={IngredientCardStyles.card} onClick={modalControls.open}>
        <div className='pl-4 pr-4 position-relative'>
            <Counter count={1} size="default" />

            <IngredientCardImage img={info.image} />

            <div className='mt-1 mb-1'>
                <IngredientCardPrice price={info.price} />
            </div>
        </div>
        <p className='text-center text text_type_main-default'>
            {info.name}
        </p>
      </div>
      <Modal {...modalControls}>
        <IngredientDetails {...info} />
      </Modal>
    </>
  )
}

export default IngredientCard


IngredientCard.propTypes = {
  info: ingredientType.isRequired
}