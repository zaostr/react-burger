import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Loader } from '../loader/loader';
import { HumanDatePrecise } from '../../utils/burger-api'

import styles from './order-card.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { TOrder } from '../../utils/types';

export const OrderCard = ({info, showStatus = false}:{info: TOrder, showStatus: boolean}) => {
    //const date = new Date(info.createdAt);
    const list: any = useSelector((store:any) => store.ingredients.list);
    const [orderIngredients, setOrderIngredients] = useState<any>([]);
    const [orderAmount, setOrderAmount] = useState<any>(null);
    console.log(info.status);
    useEffect(() => {
        if (list.length > 0) { 
            setOrderIngredients( getIngredientsFromOrder(info.ingredients) );
        }
    }, [list])

    useEffect(() => {
        console.log(orderIngredients);
        if (orderIngredients) { 
            setOrderAmount( getOrderAmount(orderIngredients) );
        }
    }, [orderIngredients])

    const getIngredientsFromOrder = (ingredients: Array<any>) => {
        return [...ingredients].map((ingredientID, key) => {
            return list.filter((ingredient:any) => ingredientID === ingredient._id)[0];
        })
    }



    const getOrderAmount = (ingredients: Array<any>) => {
        return ingredients.reduce((prev:any,next:any) => {
            if (next.type === 'bun') {
                return prev + next.price * 2
            } else {
                 return prev + next.price
            }
        },0)
    }

    
  return (
    <div className={`${styles.card} p-6`}>
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
    </div>
  )
}
