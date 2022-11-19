import {
    ERROR_INSERT,
    ERROR_REMOVE,
    ERROR_STATE,
    TErrorActions
} from '../actions/errorHandler'


export type TErrorHandlerState = {
    message: string;
    code: number;
    status: boolean;
}

const errorHandlerState: TErrorHandlerState = {
    message: '',
    code: 0,
    status: false
}

export const errorHandlerReducer = (state = errorHandlerState, action: TErrorActions) => {
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
                code: 0,
                status: false
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