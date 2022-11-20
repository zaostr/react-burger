import { useDispatch, useSelector } from 'react-redux';
import { Route, useHistory, useParams } from 'react-router-dom';
import { useModalControls } from '../../hooks/useModalControls';
import { INGREDIENTS_CLEAR_DETAILED } from '../../services/actions/ingredients';
import { RootState } from '../../services/types';
import { TOrder } from '../../utils/types';
import { OrderFullDetails } from '../order-full-details/order-full-details'
import { Modal } from '../modal/modal'

export const OrderDetailsPopup = () => {
    const params: {id: string | undefined;} = useParams();
    console.log(params);
    const history = useHistory();
    const dispatch = useDispatch();
    const list = useSelector((store: RootState) => store.feed.list);
    const selectedOrder = [...list].filter((order: TOrder) => order._id === params.id)[0];
    
    const modalControls = useModalControls({
      isOpen: params?.id ? true : false,
      closeCallback: () => {
        history.goBack();
      }
    });

  return (
    <Route path="/feed/:id">
        <Modal {...modalControls}>
            <OrderFullDetails order={selectedOrder} />
        </Modal>
    </Route>
  )
}
