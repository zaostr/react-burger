import {
    CART_INSERT_ITEM,
    CART_REMOVE_ITEM,
    CART_CLEAR,
    CART_TOTAL,
    CART_SORT_LIST
} from '../actions/cart'



const cartState = {
    list: [],
    total: 0
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
            newList.splice(action.payload.newIndex, 0, action.payload.item );
            return {
                ...state,
                list: newList
            }
        
        default:
            return state
    }
}