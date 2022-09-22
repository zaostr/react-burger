export const CART_INSERT_ITEM = 'CART_INSERT_ITEM';
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';
export const CART_CLEAR       = 'CART_CLEAR';
export const CART_TOTAL       = 'CART_TOTAL';


export function cartInsertItem(item) {
    return function(dispatch) {
        dispatch({
            type: CART_INSERT_ITEM,
            payload: item
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