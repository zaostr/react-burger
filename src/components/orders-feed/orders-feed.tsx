import { useAppSelector } from '../../hooks/redux';
import { RootState } from '../../services/types';
import { OrderCard } from '../order-card/order-card';

import styles from './orders-feed.module.css';

export const OrdersFeed = () => {
  const {list, fail} = useAppSelector(store => store.feed);
  
  if (fail === true) {
    return (
      <div className={`mt-30`}>
          <h3 className='text text_type_main-medium'>При подключении произошла ошибка</h3>
      </div>
    )
  }
  return (
    <div className={`${styles.list}`}>
        { (list.length < 1) ? <h3 className='text text_type_main-medium'>Здесь пока ничего нет:/</h3> : null }
        { list.map((order) => <OrderCard key={order._id} info={order} showStatus={false} base={'/feed/'} />) }
    </div>
  )
}
