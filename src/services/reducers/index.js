import { combineReducers } from 'redux';
import { ingredientsReducer } from "./ingredients";
import { cartReducer } from './cart';
import { errorHandlerReducer } from './errorHandler';



const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    cart: cartReducer,
    errorHandler: errorHandlerReducer
});

export default rootReducer;