import {
    INGREDIENTS_SET_LIST,
    INGREDIENTS_REQUEST_FAILED,
    INGREDIENTS_SET_REQUEST
} from '../actions/ingredients'

const ingredientsState = {
    list: [],
    ingredientsRequest: false,
    failedRequest: false
}

export const ingredientsReducer = (state = ingredientsState, action) => {
    switch(action.type) {
        case INGREDIENTS_SET_REQUEST:
            return {
                ...state,
                ingredientsRequest: true,
            };
        case INGREDIENTS_SET_LIST:
            return {
                ...state,
                list: [...action.payload],
                ingredientsRequest: false,
                failedRequest: false
            };
        case INGREDIENTS_REQUEST_FAILED:
            return {
                ...state,
                list: [],
                ingredientsRequest: false,
                failedRequest: true
            };
        
        default:
            return state
    }
}