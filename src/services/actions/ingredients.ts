import { getIngredientsRequest } from "../../utils/burger-api";
import { ingredientType } from "../../utils/types";
import { AppDispatch, AppThunk } from "../types";
import { ERROR_INSERT } from "./errorHandler";

export const INGREDIENTS_SET_LIST: 'INGREDIENTS_SET_LIST' = 'INGREDIENTS_SET_LIST';
export const INGREDIENTS_GET_REQUEST: 'INGREDIENTS_GET_REQUEST' = 'INGREDIENTS_GET_REQUEST';
export const INGREDIENTS_REQUEST_FAILED: 'INGREDIENTS_REQUEST_FAILED' = 'INGREDIENTS_REQUEST_FAILED';
export const INGREDIENTS_REQUEST_SUCCESS: 'INGREDIENTS_REQUEST_SUCCESS' = 'INGREDIENTS_REQUEST_SUCCESS';
export const INGREDIENTS_SET_DETAILED: 'INGREDIENTS_SET_DETAILED' = 'INGREDIENTS_SET_DETAILED';
export const INGREDIENTS_CLEAR_DETAILED: 'INGREDIENTS_CLEAR_DETAILED' = 'INGREDIENTS_CLEAR_DETAILED';


export interface IIngredientsSetListAction {
    readonly type: typeof INGREDIENTS_SET_LIST;
    readonly payload: ingredientType[];
}
export interface IIngredientsGetRequestAction {
    readonly type: typeof INGREDIENTS_GET_REQUEST;
}
export interface IIngredientsRequestSuccessAction {
    readonly type: typeof INGREDIENTS_REQUEST_SUCCESS;
}
export interface IIngredientsRequestFailedAction {
    readonly type: typeof INGREDIENTS_REQUEST_FAILED;
}
export interface IIngredientsSetDetailedAction {
    readonly type: typeof INGREDIENTS_SET_DETAILED;
    readonly payload: ingredientType;
}
export interface IIngredientsClearDetailedAction {
    readonly type: typeof INGREDIENTS_CLEAR_DETAILED;
}

export type TIngredientActions = IIngredientsSetListAction | IIngredientsGetRequestAction | IIngredientsRequestSuccessAction | IIngredientsRequestFailedAction | IIngredientsSetDetailedAction | IIngredientsClearDetailedAction;

export const getIngredients: AppThunk = () => (dispatch: AppDispatch) => {
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
        dispatch({
            type: INGREDIENTS_REQUEST_FAILED,
            payload: err.message
        })
        dispatch({
            type: ERROR_INSERT,
            payload: {
                message: err.message,
                status: true,
                code: 1
            }
        })
    });
}

export const setDetailedIngredient: AppThunk = (ingredient: ingredientType) => (dispatch: AppDispatch) => {
    dispatch({
        type: INGREDIENTS_SET_DETAILED,
        payload: ingredient
    });
}
