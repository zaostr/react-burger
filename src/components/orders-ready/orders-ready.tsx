import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../services/types';
import { TOrder } from '../../utils/types';
import styles from './orders-ready.module.css';

export const OrdersReady = () => {
    const list = useSelector((store: RootState) => store.feed.list);
    const readyOrders = list.filter((order: TOrder,key:number) => order.status === 'done' ? order : false);
    //const list = ['122132','122132','122132','122132','122132','122132','122132','122132'];
    return (
        <>
            <p className={`name text text_type_main-medium mb-6`}>Готовы:</p>
            <ul className={`${styles.list}`}>
                { readyOrders.map((order: TOrder, key:number) => {
                    if (key > 9) {
                        return false
                    }
                    return <li key={key} className={`text text_type_digits-default`}>{order.number}</li>
                }) }
            </ul>
        </>
    )
}
