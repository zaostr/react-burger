import { combineReducers } from 'redux';
import { ingredientsReducer } from "./ingredients";
import { cartReducer } from './cart';
import { authReducer } from './auth';
import { errorHandlerReducer } from './errorHandler';
import { wsReducer } from './ws';



export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    cart: cartReducer,
    auth: authReducer,
    feed: wsReducer,
    errorHandler: errorHandlerReducer,
});

export default rootReducer;