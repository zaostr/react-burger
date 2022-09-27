import {
    CART_INSERT_ITEM,
    CART_REMOVE_ITEM,
    CART_CLEAR,
    CART_TOTAL,
    CART_SORT_LIST,
    CART_ORDER_REQUEST,
    CART_ORDER_SUCCESS,
    CART_ORDER_FAIL,
    CART_SAVE_ORDER
} from '../actions/cart'



const cartState = {
    list: [],
    total: 0,
    orderRequest: false,
    orderSuccess: false,
    orderFail: false,
    orders: []
}

export const cartReducer = (state = cartState, action) => {
    switch(action.type) {
        case CART_INSERT_ITEM:
            if ( action.payload.type === 'bun' ) {
                let listWithoutBun = [...state.list].filter(x => x.type !== 'bun');
                return {
                    ...state,
                    list: [
                        ...listWithoutBun,
                        action.payload
                    ]
                }
            } else {
                return {
                    ...state,
                    list: [
                        ...state.list,
                        action.payload
                    ]
                }
            }

        case CART_REMOVE_ITEM:
            if ( action.payload.type !== 'bun' ) {
                let newList = [...state.list].filter((x,key) => key !== action.payload.index);
                return {
                    ...state,
                    list: newList
                }
            }
            break;

        case CART_CLEAR:
            return {
                ...state,
                list: []
            }

        case CART_TOTAL:
            return {
                ...state,
                total: [...state.list].reduce((prev, next) => {
                    if (next.type === 'bun') {
                        return prev + next.price * 2
                    } else {
                         return prev + next.price
                    }
                }, 0)
            }

        case CART_SORT_LIST:
            let newList = [...state.list].filter((x,key) => key !== action.payload.oldIndex);
            newList.splice(action.payload.newIndex, 0, {...action.payload.item} );
            return {
                ...state,
                list: newList
            }

        case CART_ORDER_REQUEST:
            return {
                ...state,
                orderRequest: true,
                orderSuccess: false,
                orderFail: false
            }

        case CART_ORDER_SUCCESS:
            return {
                ...state,
                orderRequest: false,
                orderSuccess: true,
                orderFail: false
            }

        case CART_ORDER_FAIL:
            return {
                ...state,
                orderRequest: false,
                orderSuccess: false,
                orderFail: true
            }
        
        default:
            return state
    }
}