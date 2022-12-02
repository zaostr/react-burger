import { useAppSelector } from '../../hooks/redux';
import { TOrder } from '../../utils/types';
import styles from './orders-ready.module.css';

export const OrdersReady = () => {
    const list = useAppSelector(store => store.feed.list);
    const readyOrders = list.filter(order => order.status === 'done' ? order : false);
    return (
        <>
            <p className={`name text text_type_main-medium mb-6`}>Готовы:</p>
            <ul className={`${styles.list}`}>
                { readyOrders.map((order, key) => {
                    if (key > 9) {
                        return false
                    }
                    return <li key={order._id} className={`text text_type_digits-default`}>{order.number}</li>
                }) }
            </ul>
        </>
    )
}
