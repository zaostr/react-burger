import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import styles from './order-card.module.css'

export const OrderCard = ({info}: any) => {
    const date = new Date(info.createdAt);
    const {list}: any = useSelector((store:any) => store.ingredients);
    const [orderIngredients, setOrderIngredients] = useState<any>([]);
    const [orderAmount, setOrderAmount] = useState<any>(null);

    // console.log(list);
    // const getOrderIngredientsThumbs = (ingredients: Array<any>): string => {
    //     let block: string = '';
    //     ingredients.forEach( (ingredient,key) => {
    //         if ( key > 5 ) return false;

    //         block += '<div classNma></div>'
    //     })
    //     return block;
    // }

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
        console.log(ingredients);
        return ingredients.reduce((prev:any,next:any) => {
            if (next.type === 'bun') {
                return prev + next.price * 2
            } else {
                 return prev + next.price
            }
        },0)
    }

    if (list.length < 1) {
        return null;
    }

  return (
    <div className={`${styles.card} p-6`}>
        <div className={`${styles.top}`}>
            <span className={`id text text_type_digits-default`}>#034535</span>
            <span className={`time text text_type_main-default text_color_inactive`}>{ date.toLocaleDateString('RU-ru') }</span>
        </div>
        <p className={`name text text_type_main-medium`}>Death Star Starship Main бургер</p>
        <div className={`${styles.bottom}`}>
            <div className={`${styles.ingredientCircles}`}>
                { orderIngredients.reverse().map( (ingredient: any,key: any): any => {
                    if ( key > 5 ) return false;
                    return (
                    <div key={key} className={`${styles.ingredientCircle}`}>
                        <div 
                            className={`${styles.ingredientCircleBackground} ${(orderIngredients.length > 6 && key === 0) ? styles.ingredientCircleOverlay : null}`} 
                            style={{backgroundImage: 'url("'+ingredient.image_mobile+'")'}}>
                                <div>{(orderIngredients.length > 6 && key === 0) ? '+' + String(info.ingredients.length - 5) : null}</div>
                        </div>
                    </div>)
                }) }
            </div>
            <div className={`text text_type_digits-default`}>
                { orderAmount }
            </div>
        </div>
    </div>
  )
}
