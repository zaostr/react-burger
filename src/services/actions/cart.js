import {v4 as uuidv4} from 'uuid';

export const CART_INSERT_ITEM = 'CART_INSERT_ITEM';
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';
export const CART_CLEAR       = 'CART_CLEAR';
export const CART_TOTAL       = 'CART_TOTAL';
export const CART_SORT_LIST   = 'CART_SORT_LIST';
export const CART_ORDER_REQUEST  = 'CART_ORDER_REQUEST';
export const CART_ORDER_SUCCESS  = 'CART_ORDER_SUCCESS';
export const CART_ORDER_FAIL  = 'CART_ORDER_FAIL';
export const CART_SAVE_ORDER  = 'CART_SAVE_ORDER';


export function cartInsertItem(item) {
    return function(dispatch) {
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
}

export function cartRemoveItem(itemKey) {
    return function(dispatch) {
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
}

export function cartClear() {
    return function(dispatch) {
        dispatch({
            type: CART_CLEAR
        })
        dispatch({
            type: CART_TOTAL
        })
    }
}

export function cartSortList(oldIndex, newIndex, item) {
    return function(dispatch) {
        dispatch({
            type: CART_SORT_LIST,
            payload: {
                oldIndex,
                newIndex,
                item
            }
        })
        /*dispatch({
            type: CART_REMOVE_ITEM,
            payload: {
                index: oldIndex
            }
        })*/
    }
}