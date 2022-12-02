import {useState,useEffect} from 'react'
import {Counter} from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientCardImage from './ingredient-card-image/ingredient-card-image'
import IngredientCardPrice from './ingredient-card-price/ingredient-card-price'
import { useDrag } from 'react-dnd/dist/hooks';

import IngredientCardStyles from './ingredients-card.module.css'

import { ingredientType } from '../../../../utils/types';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks/redux';

const IngredientCard = ({info}: {info: ingredientType}) => {
  const cartList = useAppSelector(store => store.cart.list);
  const location = useLocation();
  const [counterState, setCounterState] = useState(0);
  
  /* eslint-disable */
  useEffect(() => {
    setCounterState( cartList.filter(x => x._id === info._id).length );
  },[JSON.stringify(cartList)])
  /* eslint-enable */

  const [{ opacity }, ref] = useDrag({
    type: info.type === 'bun' ? 'bun-item' : 'ingredients-item',
    item: { ...info },
    collect: monitor => ({
      isDrag: monitor.isDragging(),
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  })

  return (
    <>
      <Link 
        to={{
          pathname: `/ingredients/${info._id}`,
          state: { 
            background: location,
            from: location
          }
        }}
        ref={ref}
        className={IngredientCardStyles.card}
        style={{ opacity }}
      >
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
      </Link>
    </>
  )
}

export default IngredientCard
