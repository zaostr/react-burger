import { getIngredientsRequest } from "../../utils/burger-api";
import { ERROR_INSERT } from "./errorHandler";

export const INGREDIENTS_SET_LIST = 'INGREDIENTS_SET_LIST';
export const INGREDIENTS_GET_REQUEST = 'INGREDIENTS_GET_REQUEST';
export const INGREDIENTS_REQUEST_FAILED = 'INGREDIENTS_REQUEST_FAILED';
export const INGREDIENTS_REQUEST_SUCCESS = 'INGREDIENTS_REQUEST_SUCCESS';
export const INGREDIENTS_SET_DETAILED = 'INGREDIENTS_SET_DETAILED';
export const INGREDIENTS_CLEAR_DETAILED = 'INGREDIENTS_CLEAR_DETAILED';

    

export function getIngredients() {
    return function(dispatch) {
        dispatch({
            type: INGREDIENTS_GET_REQUEST
        })
        getIngredientsRequest()
        .then(dataJson => {
            setTimeout(() => {
                dispatch({
                    type: INGREDIENTS_SET_LIST,
                    payload: dataJson.data
                })
                dispatch({
                    type: INGREDIENTS_REQUEST_SUCCESS
                })
            },2000)
        })
        .catch(err => {
            console.log(err.message);
            dispatch({
                type: INGREDIENTS_REQUEST_FAILED,
                payload: err.message
            })
            dispatch({
                type: ERROR_INSERT,
                payload: {
                    message: err.message,
                    code: 1
                }
            })
        });
    }
}

