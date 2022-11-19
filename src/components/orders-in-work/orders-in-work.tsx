import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../services/types';
import { TOrder } from '../../utils/types';
import styles from './orders-in-work.module.css';

export const OrdersInWork = () => {
    const list = useSelector((store: RootState) => store.feed.list);
    const inWorkOrders = list.filter((order: TOrder,key:number) => order.status === 'pending' ? order : false);
    return (
        <>
            <p className={`name text text_type_main-medium mb-6`}>В работе:</p>
            <ul className={`${styles.list}`}>
                { inWorkOrders.map((order:TOrder,key:number) => {
                    return <li key={key} className={`text text_type_digits-default`}>{order.number}</li>
                }) }
            </ul>
        </>
    )
}
