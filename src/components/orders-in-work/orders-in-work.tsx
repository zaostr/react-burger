import { useAppSelector } from '../../hooks/redux';
import { TOrder } from '../../utils/types';
import styles from './orders-in-work.module.css';

export const OrdersInWork = () => {
    const list = useAppSelector(store => store.feed.list);
    const inWorkOrders = list.filter(order => order.status === 'pending' ? order : false);
    return (
        <>
            <p className={`name text text_type_main-medium mb-6`}>В работе:</p>
            <ul className={`${styles.list}`}>
                { inWorkOrders.map(order => {
                    return <li key={order._id} className={`text text_type_digits-default`}>{order.number}</li>
                }) }
            </ul>
        </>
    )
}
