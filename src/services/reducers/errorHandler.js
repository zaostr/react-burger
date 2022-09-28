import {
    ERROR_INSERT,
    ERROR_REMOVE,
    ERROR_STATE
} from '../actions/errorHandler'



const errorHandlerState = {
    message: '',
    code: 0,
    status: 0
}

export const errorHandlerReducer = (state = errorHandlerState, action) => {
    switch(action.type) {
        case ERROR_INSERT:
            return {
                ...state,
                message: action.payload.message,
                code: action.payload.code,
                status: true
            }

        case ERROR_REMOVE:
            return {
                ...state,
                message: '',
                code: 0
            }

        case ERROR_STATE:
            return {
                ...state,
                status: action.payload
            }

        default:
            return state
    }
}