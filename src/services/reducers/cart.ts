import { ingredientType, TOrder } from '../../utils/types'
import {
    CART_INSERT_ITEM,
    CART_REMOVE_ITEM,
    CART_CLEAR,
    CART_TOTAL,
    CART_SORT_LIST,
    CART_ORDER_REQUEST,
    CART_ORDER_SUCCESS,
    CART_ORDER_FAIL,
    CART_SAVE_ORDER,
    TCartActions
} from '../actions/cart'


export type TCartState = {
    list: ingredientType[];
    total: number;
    orderRequest: boolean;
    orderSuccess: boolean;
    orderFail: boolean;
    orders: TOrder[]
}

export const cartState: TCartState = {
    list: [],
    total: 0,
    orderRequest: false,
    orderSuccess: false,
    orderFail: false,
    orders: []
}

export const cartReducer = (state = cartState, action: TCartActions) => {
    let newList = [];
    switch(action.type) {
        case CART_INSERT_ITEM:
            if ( action.payload.type === 'bun' ) {
                const listWithoutBun = [...state.list].filter(x => x.type !== 'bun');
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
            const thisIngredient = [...state.list].filter((x,key) => key === action.payload.index)[0];
            newList = [...state.list].filter((x,key) => key !== action.payload.index);
            if (thisIngredient.type !== 'bun') {
                return {
                    ...state,
                    list: newList
                }
            } else {
                return state
            }

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
            newList = [...state.list].filter((x,key) => key !== action.payload.oldIndex);
            newList.splice(action.payload.newIndex, 0, {...action.payload.item} );
            return {
                ...state,
                list: newList
            }

        case CART_ORDER_REQUEST:
            return {
                ...state,
                orderRequest: action.payload,
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

        case CART_SAVE_ORDER:
            return {
                ...state,
                orders: [
                    ...state.orders,
                    action.payload
                ]
            }
        
        default:
            return state
    }
}