import React from 'react'

import styles from './order-card.module.css'

export const OrderCard = ({info}: any) => {
    const date = new Date(info.createdAt);
    // const getOrderIngredientsThumbs = (ingredients: Array<any>): string => {
    //     let block: string = '';
    //     ingredients.forEach( (ingredient,key) => {
    //         if ( key > 5 ) return false;

    //         block += '<div classNma></div>'
    //     })
    //     return block;
    // }

    const getOrderAmount = (ingredients: Array<any>) => {
        return (
            <div>1</div>
        )
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
                { info.ingredients.reverse().map( (ingredient: any,key: any) => {
                    if ( key > 5 ) return false;
                    
                    return <div key={key} className={`${styles.ingredientCircle} ${ingredient}`}><div>{(info.ingredients.length > 6 && key === 0) ? '+' + String(info.ingredients.length - 5) : null}</div></div>
                }) }
            </div>
            <div className={`text text_type_digits-default`}>
                { getOrderAmount(info.ingredients) }480
            </div>
        </div>
    </div>
  )
}
