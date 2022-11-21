import {v4 as uuidv4} from 'uuid';
import { ingredientType, TOrder } from '../../utils/types';
import { AppDispatch, AppThunk } from '../types';

export const CART_INSERT_ITEM: 'CART_INSERT_ITEM' = 'CART_INSERT_ITEM';
export const CART_REMOVE_ITEM: 'CART_REMOVE_ITEM' = 'CART_REMOVE_ITEM';
export const CART_CLEAR: 'CART_CLEAR'       = 'CART_CLEAR';
export const CART_TOTAL: 'CART_TOTAL'       = 'CART_TOTAL';
export const CART_SORT_LIST: 'CART_SORT_LIST'   = 'CART_SORT_LIST';
export const CART_ORDER_REQUEST: 'CART_ORDER_REQUEST'  = 'CART_ORDER_REQUEST';
export const CART_ORDER_SUCCESS: 'CART_ORDER_SUCCESS'  = 'CART_ORDER_SUCCESS';
export const CART_ORDER_FAIL: 'CART_ORDER_FAIL'  = 'CART_ORDER_FAIL';
export const CART_SAVE_ORDER: 'CART_SAVE_ORDER'  = 'CART_SAVE_ORDER';

export interface ICartInsertItemAction {
    readonly type: typeof CART_INSERT_ITEM;
    readonly payload: ingredientType
}
export interface ICartRemoveItemAction {
    readonly type: typeof CART_REMOVE_ITEM;
    readonly payload: {
        index: number;
    };
}
export interface ICartClearAction {
    readonly type: typeof CART_CLEAR;
}
export interface ICartTotalAction {
    readonly type: typeof CART_TOTAL;
}
export interface ICartSortListAction {
    readonly type: typeof CART_SORT_LIST;
    readonly payload: {
        oldIndex: number;
        newIndex: number;
        item: ingredientType
    }
}
export interface ICartRequestAction {
    readonly type: typeof CART_ORDER_REQUEST;
    readonly payload: boolean;
}
export interface ICartSuccessAction {
    readonly type: typeof CART_ORDER_SUCCESS;
}
export interface ICartFailAction {
    readonly type: typeof CART_ORDER_FAIL;
}
export interface ICartSaveOrderAction {
    readonly type: typeof CART_SAVE_ORDER;
    readonly payload: TOrder;
}

export type TCartActions = ICartInsertItemAction | ICartRemoveItemAction | ICartClearAction | ICartTotalAction | ICartSortListAction | ICartRequestAction | ICartSuccessAction | ICartFailAction | ICartSaveOrderAction;


export const cartInsertItem: AppThunk = (item: ingredientType) => (dispatch: AppDispatch) => {
    dispatch({
        type: CART_INSERT_ITEM,
        payload: {
            ...item,
            uuid: uuidv4()
        }
    })
    dispatch({
        type: CART_TOTAL
    })
}

export const cartRemoveItem: AppThunk = (itemKey: number) => (dispatch: AppDispatch) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: {
            index: itemKey
        }
    })
    dispatch({
        type: CART_TOTAL
    })
}

export const cartClear: AppThunk = () => (dispatch: AppDispatch) => {
    dispatch({
        type: CART_CLEAR
    })
    dispatch({
        type: CART_TOTAL
    })
}

export const cartSortList: AppThunk = (oldIndex:number, newIndex:number, item:ingredientType) => (dispatch: AppDispatch) => {
    dispatch({
        type: CART_SORT_LIST,
        payload: {
            oldIndex,
            newIndex,
            item
        }
    })
}
