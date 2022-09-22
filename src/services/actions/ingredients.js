import { getIngredientsRequest } from "../../utils/burger-api";

export const INGREDIENTS_SET_LIST = 'INGREDIENTS_SET_LIST';
export const INGREDIENTS_REQUEST_FAILED = 'INGREDIENTS_REQUEST_FAILED';
export const INGREDIENTS_SET_REQUEST = 'INGREDIENTS_SET_REQUEST';

export function getIngredients() {
    return function(dispatch) {
        dispatch({
            type: INGREDIENTS_SET_REQUEST
        })
        getIngredientsRequest()
        .then(dataJson => {
            setTimeout(() => {
                dispatch({
                    type: INGREDIENTS_SET_LIST,
                    payload: dataJson.data
                })
            },2000)
          
        })
        .catch(err => {
            dispatch({
                type: INGREDIENTS_REQUEST_FAILED,
                payload: err.message
            })
        });
    }
}

