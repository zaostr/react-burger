import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { store } from '../store';
import { TAuthActions } from '../actions/auth';
import { TCartActions } from '../actions/cart';
import { TIngredientActions } from '../actions/ingredients';
import { TErrorActions } from '../actions/errorHandler';

type TApplicationActions = TAuthActions | TCartActions | TErrorActions | TIngredientActions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;