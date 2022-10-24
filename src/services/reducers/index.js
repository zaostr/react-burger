import { combineReducers } from 'redux';
import { ingredientsReducer } from "./ingredients";
import { cartReducer } from './cart';
import { authReducer } from './auth';
import { errorHandlerReducer } from './errorHandler';



const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    cart: cartReducer,
    auth: authReducer,
    errorHandler: errorHandlerReducer
});

export default rootReducer;