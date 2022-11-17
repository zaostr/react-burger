import React from 'react'
import { OrdersFeed } from '../components/orders-feed/orders-feed';
import { OrdersInWork } from '../components/orders-in-work/orders-in-work';
import { OrdersReady } from '../components/orders-ready/orders-ready';

import styles from './css/feed.module.css';

export const FeedPage = () => {
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
            <p>Выполнено за все время:</p>
            <p></p>
          </div>

          <div>
            <p>Выполнено за сегодня:</p>
            <p></p>
          </div>
        </div>
      </main>
  )
}

export default FeedPage;