import {useState, useEffect} from 'react'
import {  useParams } from 'react-router-dom';
import { OrderFullDetails } from '../components/order-full-details/order-full-details'
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from '../services/actions/ws';
import { TOrder } from '../utils/types';

import styles from './css/order-details-page.module.css'

export const OrderDetailsPage = () => {
    const dispatch = useAppDispatch();
    const params: {id: string | undefined;} = useParams();
    const {wsConnected, list} = useAppSelector(store => store.feed);
    const [selectedOrder, setSelectedOrder] = useState<TOrder| null>(null);
    
    useEffect(() => {
      return () => {
        dispatch({type: WS_CONNECTION_CLOSED})
      }
    }, [])
    
    useEffect(() => {
      dispatch({type: WS_CONNECTION_START, payload: 'wss://norma.nomoreparties.space/orders/all'})
    }, [wsConnected]);
    
    useEffect(() => {
      setSelectedOrder( [...list].filter(order => order._id === params.id)[0] );
    }, [list]);

  return (
    <div className={`${styles.wrapper} pt-30`}>
      <OrderFullDetails order={selectedOrder} />
    </div>
  )
}
