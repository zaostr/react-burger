import React from 'react'
import styles from './orders-ready.module.css';

export const OrdersReady = () => {
    const list = ['122132','122132','122132','122132','122132','122132','122132','122132'];
    return (
        <ul className={`${styles.list}`}>
            { list.map((item:any,key:any) => {
                return <li key={key}>{item}</li>
            }) }
        </ul>
    )
}
