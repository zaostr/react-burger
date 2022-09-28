import {useState,useEffect,useContext} from 'react'
import {Counter} from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientCardImage from './ingredient-card-image/ingredient-card-image'
import IngredientCardPrice from './ingredient-card-price/ingredient-card-price'
import { IngredientDetails } from '../../ingredient-details/ingredient-details';
import { useDrag } from 'react-dnd/dist/hooks';

import { useModalControls } from '../../../../hooks/useModalControls';
import { Modal } from '../../../modal/modal'

import IngredientCardStyles from './ingredients-card.module.css'

import { ingredientType } from '../../../../utils/types';
import { useDispatch, useSelector } from 'react-redux';
import { INGREDIENTS_CLEAR_DETAILED, INGREDIENTS_SET_DETAILED } from '../../../../services/actions/ingredients';
//import { ConstructorContext } from '../../../../services/constructorContext';

const IngredientCard = ({info}) => {
  const cartList = useSelector(store => store.cart.list);
  const detailed = useSelector(store => store.ingredients.detailed);
  const dispatch = useDispatch();
  const modalControls = useModalControls({
    closeCallback: () => dispatch({type: INGREDIENTS_CLEAR_DETAILED})
  });
  const [counterState, setCounterState] = useState(0);
  
  useEffect(() => {
    setCounterState( cartList.filter(x => x._id === info._id).length );
  },[JSON.stringify(cartList)])

  const [{ opacity }, ref] = useDrag({
    type: info.type === 'bun' ? 'bun-item' : 'ingredients-item',
    item: { ...info },
    collect: monitor => ({
      isDrag: monitor.isDragging(),
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  })

  const openDetails = () => {
    dispatch({type: INGREDIENTS_SET_DETAILED, payload: info})
    modalControls.open()
  }

  return (
    <>
      <div ref={ref} className={IngredientCardStyles.card} onClick={openDetails} style={{ opacity }}>
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
        <IngredientDetails />
      </Modal>
    </>
  )
}

export default IngredientCard


IngredientCard.propTypes = {
  info: ingredientType.isRequired
}