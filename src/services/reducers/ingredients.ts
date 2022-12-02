import { ingredientType } from '../../utils/types'
import {
    INGREDIENTS_SET_LIST,
    INGREDIENTS_GET_REQUEST,
    INGREDIENTS_REQUEST_FAILED,
    INGREDIENTS_REQUEST_SUCCESS,
    INGREDIENTS_SET_DETAILED,
    INGREDIENTS_CLEAR_DETAILED,
    TIngredientActions
} from '../actions/ingredients'

export type TIngredientsState = {
    list: ingredientType[];
    ingredientsRequest: boolean;
    failedRequest: boolean;
    successRequest: boolean;
    detailed: false | ingredientType;
}

export const ingredientsState: TIngredientsState = {
    list: [],
    ingredientsRequest: false,
    failedRequest: false,
    successRequest: false,
    detailed: false
}

export const ingredientsReducer = (state = ingredientsState, action: TIngredientActions): TIngredientsState => {
    switch(action.type) {
        case INGREDIENTS_GET_REQUEST:
            return {
                ...state,
                ingredientsRequest: true,
                failedRequest: false,
                successRequest: false
            };
        case INGREDIENTS_SET_LIST:
            return {
                ...state,
                list: [...action.payload]
            };
        case INGREDIENTS_REQUEST_FAILED:
            return {
                ...state,
                list: [],
                ingredientsRequest: false,
                failedRequest: true,
                successRequest: false
            };
        case INGREDIENTS_REQUEST_SUCCESS:
            return {
                ...state,
                ingredientsRequest: false,
                failedRequest: false,
                successRequest: true
            };
        case INGREDIENTS_SET_DETAILED:
            return {
                ...state,
                detailed: {...action.payload}
            };
        case INGREDIENTS_CLEAR_DETAILED:
            return {
                ...state,
                detailed: false
            };
        
        default:
            return state
    }
}
