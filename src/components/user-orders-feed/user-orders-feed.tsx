import {useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { wsConnectionClosed, WS_CONNECTION_CLOSED, WS_CONNECTION_START } from '../../services/actions/ws';
import { RootState } from '../../services/types';
import { getAccessToken } from '../../utils/burger-api';
import { OrderCard } from '../order-card/order-card';

import styles from './user-orders-feed.module.css';

export const UserOrdersFeed = () => {
  const dispatch = useAppDispatch();
  const {wsConnected, fail} = useAppSelector(store => store.feed);
  const connect = async () => {
    const token = await getAccessToken();
    dispatch({type: WS_CONNECTION_START, payload: 'wss://norma.nomoreparties.space/orders?token='+token})
  }
  useEffect(() => {
    return () => {
      dispatch({type: WS_CONNECTION_CLOSED});
    }
  }, [])

  useEffect(() => {
    connect();
  }, [wsConnected])
  const list = useAppSelector((store:RootState) => store.feed.list);
  
  if (fail === true) {
    return (
      <div className={`mt-30`}>
          <h3 className='text text_type_main-medium'>При подключении произошла ошибка</h3>
      </div>
    )
  }
 
  return (
    <div className={`${styles.list} mt-30`}>
        { (list.length < 1) ? <h3 className='text text_type_main-medium'>Здесь пока ничего нет:/</h3> : null }
        { list.map((order,key) => <OrderCard key={order._id} info={order} showStatus={true} base={'/profile/orders/'} />) }
    </div>
  )
}
