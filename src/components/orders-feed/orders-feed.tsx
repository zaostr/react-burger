import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../services/types';
import { Loader } from '../loader/loader';
import { OrderCard } from '../order-card/order-card';

import styles from './orders-feed.module.css';

export const OrdersFeed = () => {
  const list = useSelector((store:RootState) => store.feed.list);
  
  if (list.length < 1) {
    //return <Loader />;
  }
  return (
    <div className={`${styles.list}`}>
        { list.map((order,key) => <OrderCard key={key} info={order} showStatus={false} />) }
    </div>
  )
}
