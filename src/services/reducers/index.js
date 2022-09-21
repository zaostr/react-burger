import { combineReducers } from 'redux';
import { ingredientsReducer } from "./ingredients";
import { constructorReducer } from './constructor';


const rootReducer = combineReducers({
    ingredientsReducer,
    constructorReducer
});

export default rootReducer;