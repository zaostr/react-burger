import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { wsConnectionClosed, WS_CONNECTION_START } from '../../services/actions/ws';
import { RootState } from '../../services/types';
import { getAccessToken } from '../../utils/burger-api';
import { Loader } from '../loader/loader';
import { OrderCard } from '../order-card/order-card';

import styles from './user-orders-feed.module.css';

export const UserOrdersFeed = () => {
  const dispatch = useDispatch();
  const wsConnected = useSelector((store: RootState) => store.feed.wsConnected);
  const connect = async () => {
    const token = await getAccessToken();
    dispatch({type: WS_CONNECTION_START, payload: 'wss://norma.nomoreparties.space/orders?token='+token})
  }

  useEffect(() => {
    connect();
  }, [wsConnected])
  const list = useSelector((store:RootState) => store.feed.list);
  
  if (list.length < 1) {
    //return <Loader />;
    return <div>Пусто</div>
  }
  return (
    <div className={`${styles.list} mt-30`}>
        { list.map((order,key) => <OrderCard key={key} info={order} showStatus={true} />) }
    </div>
  )
}
