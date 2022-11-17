import React from 'react'
import styles from './orders-in-work.module.css';

export const OrdersInWork = () => {
    const list = ['122132','122132','122132','122132','122132','122132'];
    return (
        <ul className={`${styles.list}`}>
            { list.map((item:any,key:any) => {
                return <li key={key}>{item}</li>
            }) }
        </ul>
    )
}
