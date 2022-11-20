import React, { useEffect } from 'react'
import { OrdersFeed } from '../components/orders-feed/orders-feed';
import { OrdersInWork } from '../components/orders-in-work/orders-in-work';
import { OrdersReady } from '../components/orders-ready/orders-ready';

import {
  wsConnectionClosed,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START,
} from '../services/actions/ws';

import styles from './css/feed.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../services/types';

export const FeedPage = () => {
  const dispatch = useDispatch();
  const {total, totalDay, wsConnected} = useSelector((store: RootState) => store.feed);
  
  useEffect(() => {
    return () => {
      dispatch({type: WS_CONNECTION_CLOSED})
    }
  }, [])
  
  useEffect(() => {
    dispatch({type: WS_CONNECTION_START, payload: 'wss://norma.nomoreparties.space/orders/all'})
  }, [wsConnected])
  
  return (
      <main className={`${styles.main} pl-5 pr-5`}>
        <div>
          <h1 className='pt-10 pb-5 text text_type_main-large'>Лента заказов</h1>
          <OrdersFeed />
        </div>
        <div className='pt-25'>
          <div className={`${styles.desk} mb-15`}>
            <div>
              <OrdersReady />
            </div>
            <div>
              <OrdersInWork />
            </div>
          </div>

          <div className='mb-15'>
            <p className={`name text text_type_main-medium`}>Выполнено за все время:</p>
            <p className={`text ${styles.shadows} text_type_digits-large`}>{ total.toLocaleString('ru-ru') }</p>
          </div>

          <div>
            <p className={`name text text_type_main-medium`}>Выполнено за сегодня:</p>
            <p className={`text ${styles.shadows} text_type_digits-large`}>{ totalDay.toLocaleString('ru-ru') }</p>
          </div>
        </div>
      </main>
  )
}

export default FeedPage;