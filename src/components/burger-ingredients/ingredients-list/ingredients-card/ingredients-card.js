import {useState,useEffect,useContext} from 'react'
import {Counter} from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientCardImage from './ingredient-card-image/ingredient-card-image'
import IngredientCardPrice from './ingredient-card-price/ingredient-card-price'
import { IngredientDetails } from '../../ingredient-details/ingredient-details';

import { useModalControls } from '../../../../hooks/useModalControls';
import { Modal } from '../../../modal/modal'

import IngredientCardStyles from './ingredients-card.module.css'

import { ingredientType } from '../../../../utils/types';
import { useSelector } from 'react-redux';
//import { ConstructorContext } from '../../../../services/constructorContext';

const IngredientCard = ({info}) => {
  const modalControls = useModalControls();
  const cartList = useSelector(store => store.cart.list);
  //const {cartState} = useContext(ConstructorContext);
  const [counterState, setCounterState] = useState(0);
  
  useEffect(() => {
    setCounterState( cartList.filter(x => x._id === info._id).length );
  },[JSON.stringify(cartList)])


  return (
    <>
      <div className={IngredientCardStyles.card} onClick={modalControls.open}>
        <div className='pl-4 pr-4 position-relative'>
            { 
              counterState > 0 &&
              ( <Counter count={counterState} size="default" /> )
            }

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