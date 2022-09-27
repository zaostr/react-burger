import { getIngredientsRequest } from "../../utils/burger-api";

export const INGREDIENTS_SET_LIST = 'INGREDIENTS_SET_LIST';
export const INGREDIENTS_GET_REQUEST = 'INGREDIENTS_GET_REQUEST';
export const INGREDIENTS_REQUEST_FAILED = 'INGREDIENTS_REQUEST_FAILED';
export const INGREDIENTS_REQUEST_SUCCESS = 'INGREDIENTS_REQUEST_SUCCESS';

    

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
            },2000)
            dispatch({
                type: INGREDIENTS_REQUEST_SUCCESS
            })
        })
        .catch(err => {
            dispatch({
                type: INGREDIENTS_REQUEST_FAILED,
                payload: err.message
            })
        });
    }
}

