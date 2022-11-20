import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Loader } from '../loader/loader';
import { getIngredientsFromOrder, getOrderAmount, HumanDatePrecise } from '../../utils/burger-api'

import styles from './order-card.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientType, TOrder } from '../../utils/types';
import { Link, useLocation } from 'react-router-dom';

export const OrderCard = ({info, showStatus = false, base = '/feed/'}:{info: TOrder, showStatus: boolean; base: string;}) => {
    const location = useLocation();
    const list: any = useSelector((store:any) => store.ingredients.list);
    const [orderIngredients, setOrderIngredients] = useState<ingredientType[]>([]);
    const [orderAmount, setOrderAmount] = useState<null | number>(null);
    //console.log(info.status);
    useEffect(() => {
        if (list.length > 0) { 
            setOrderIngredients( getIngredientsFromOrder(list, info.ingredients) );
        }
    }, [list])

    useEffect(() => {
        if (orderIngredients) { 
            setOrderAmount( getOrderAmount(orderIngredients) );
        }
    }, [orderIngredients])




    
  return (
    <Link 
    to={{
      pathname: `${base}${info._id}`,
      state: { 
        background: location,
        from: location
      }
    }}
    className={`${styles.card} p-6`}>
        <div className={`${styles.top}`}>
            <span className={`id text text_type_digits-default`}>#{info.number}</span>
            <span className={`time text text_type_main-default text_color_inactive`}>{ HumanDatePrecise(info.createdAt) }</span>
        </div>
        <p className={`name text text_type_main-medium`}>
            {info.name}
            { showStatus && (<span className={`${styles.status} info.status`}>{ info.status }</span>) }
        </p>
        <div className={`${styles.bottom}`}>
            <div className={`${styles.ingredientCircles}`}>
                { orderIngredients.reverse().map( (ingredient: any,key: any): any => {
                    if ( key > 5 ) return false;
                    return (
                    <div key={key} className={`${styles.ingredientCircle}`}>
                        <div 
                            className={`${styles.ingredientCircleBackground} ${(orderIngredients.length > 6 && key === 0) ? styles.ingredientCircleOverlay : null}`} 
                            style={{backgroundImage: 'url("'+ingredient.image_mobile+'")'}}>
                                <div className='text text_type_main-default'>{(orderIngredients.length > 6 && key === 0) ? '+' + String(info.ingredients.length - 5) : null}</div>
                        </div>
                    </div>)
                }) }
            </div>
            <div className={`text text_type_digits-default`}>
                <span className='mr-2'>{ orderAmount }</span>
                <CurrencyIcon type={'primary'} />
            </div>
        </div>
    </Link>
  )
}
