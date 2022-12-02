import { Route, useHistory, useParams } from 'react-router-dom';
import { useModalControls } from '../../hooks/useModalControls';
import { TOrder } from '../../utils/types';
import { OrderFullDetails } from '../order-full-details/order-full-details'
import { Modal } from '../modal/modal'
import { useAppSelector } from '../../hooks/redux';

export const UserOrderDetailsPopup = () => {
    const params: {id: string | undefined;} = useParams();
    const history = useHistory();
    const list = useAppSelector(store => store.feed.list);
    const selectedOrder = [...list].filter(order => order._id === params.id)[0];
    
    const modalControls = useModalControls({
      isOpen: params?.id ? true : false,
      closeCallback: () => {
        history.goBack();
      }
    });

  return (
    <Route path="/profile/orders/:id">
        <Modal {...modalControls}>
            <OrderFullDetails order={selectedOrder} />
        </Modal>
    </Route>
  )
}
