import { useDispatch } from 'react-redux';
import { Route, useHistory, useParams } from 'react-router-dom';
import { useModalControls } from '../../hooks/useModalControls';
import { INGREDIENTS_CLEAR_DETAILED } from '../../services/actions/ingredients';
import { IngredientDetails } from '../ingredient-details/ingredient-details'
import { Modal } from '../modal/modal'

export const IngredientDetailsPopup = () => {
    const params: {id: string | undefined;} = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const modalControls = useModalControls({
      isOpen: params?.id ? true : false,
      closeCallback: () => {
        history.goBack();
        dispatch({type: INGREDIENTS_CLEAR_DETAILED})
      }
    });

  return (
    <Route path="/ingredients/:id">
        <Modal {...modalControls}>
            <IngredientDetails />
        </Modal>
    </Route>
  )
}
