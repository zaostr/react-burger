import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { getIngredientsFromOrder, getOrderAmount, HumanDatePrecise } from '../../utils/burger-api'
import { ingredientType, TOrder } from '../../utils/types'
import styles from './order-full-details.module.css'

export const OrderFullDetails = ({order}: {order: TOrder | null}) => {
  const list: any = useSelector((store:any) => store.ingredients.list);
  const [orderIngredients, setOrderIngredients] = useState<ingredientType[]>([]);
  const [orderAmount, setOrderAmount] = useState<null | number>(null);
  useEffect(() => {
      if (list.length > 0 && order !== null) { 
          setOrderIngredients( getIngredientsFromOrder(list, order.ingredients) );
      }
  }, [list])

  useEffect(() => {
    console.log(orderIngredients);
    if (orderIngredients) { 
        setOrderAmount( getOrderAmount(orderIngredients) );
    }
}, [orderIngredients])
if (order === null) return <></>;
  let status = '';
  if (order === undefined ) return null;
  switch (order.status) {
    case 'done':
      status = 'Готов';
      break;
    case 'pending':
      status = 'В работе';
      break;
    case 'created':
      status = 'Создан';
      break;
  }
  return (
    <div className={`${styles.wrap}`}>
        <div className={`id text text_type_digits-default mb-10`}>#{order.number}</div>
        <div className='mb-15'>
          <h3 className={`name text text_type_main-medium mb-3`}>{order.name}</h3>
          <span className={`text text_type_main-small ${styles.status} ${order.status}`}>{status}</span>
        </div>
        <div>
          <p className='text text_type_main-medium mb-6'>Состав:</p>
          <div className={`${styles.ingredientsWrapper} mb-10`}>
            { orderIngredients.reverse().map( (ingredient: ingredientType,key: number): any => {
                return (
                <div key={key} className={`${styles.ingredientBlock}`}>
                  <div className={`${styles.ingredientCircle}`}>
                      <div 
                          className={`${styles.ingredientCircleBackground} ${(orderIngredients.length > 6 && key === 0) ? styles.ingredientCircleOverlay : null}`} 
                          style={{backgroundImage: 'url("'+ingredient.image_mobile+'")'}}>
                      </div>
                  </div>
                  <div className='text text_type_main-default'>{ ingredient.name }</div>
                  <div>
                    <span className='text text_type_digits-default mr-2'>{ ingredient.price }</span>
                    <CurrencyIcon type='primary' />
                  </div>
                </div>
              )
            }) }
          </div>
        </div>
        <div className={`${styles.bottom}`}>
          <span className={`time text text_type_main-default text_color_inactive`}>{ HumanDatePrecise(order.createdAt) }</span>
          <div className={`text text_type_digits-default`}>
            <span className='mr-2'>{ orderAmount }</span>
            <CurrencyIcon type='primary'/>
          </div>
        </div>
    </div>
  )
}
