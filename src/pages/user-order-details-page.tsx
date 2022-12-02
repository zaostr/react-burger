import {useState, useEffect} from 'react'
import {  useParams } from 'react-router-dom';
import { OrderFullDetails } from '../components/order-full-details/order-full-details'
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from '../services/actions/ws';
import { getAccessToken } from '../utils/burger-api';
import { TOrder } from '../utils/types';

import styles from './css/order-details-page.module.css'

export const UserOrderDetailsPage = () => {
    const dispatch = useAppDispatch();
    const params: {id: string | undefined;} = useParams();
    const {wsConnected, list} = useAppSelector(store => store.feed);
    const [selectedOrder, setSelectedOrder] = useState<TOrder| null>(null);
    const connect = async () => {
      const token = await getAccessToken();
      dispatch({type: WS_CONNECTION_START, payload: 'wss://norma.nomoreparties.space/orders?token='+token})
    }
    
    useEffect(() => {
      return () => {
        dispatch({type: WS_CONNECTION_CLOSED})
      }
    }, [])
    
    useEffect(() => {
      connect();
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
