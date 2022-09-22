import { combineReducers } from 'redux';
import { ingredientsReducer } from "./ingredients";
import { cartReducer } from './cart';


const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    cart: cartReducer
});

export default rootReducer;