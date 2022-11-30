import {
    AUTH_SIGN_IN,
    AUTH_SIGN_OUT,
    AUTH_REQUEST
} from '../actions/auth';
import { TAuthActions } from '../actions/auth';

export type TAuthState = {
    isAuthorized: boolean;
    user: boolean | {
        name: string;
        email: string;
        role?: number;
    }
    request: boolean;
};

const authState: TAuthState = {
    isAuthorized: false,
    user: false,
    request: false
}

export const authReducer = (state = authState, action: TAuthActions) => {
    switch(action.type) {
        case AUTH_REQUEST:
            return {
                ...state,
                request: action.payload
            }
        case AUTH_SIGN_IN:
            return {
                ...state,
                user: {
                    ...action.payload,
                    role: action.payload?.role ? action.payload.role : 1
                },
                isAuthorized: true
            }
        
        case AUTH_SIGN_OUT:
            return {
                ...state,
                user: false,
                isAuthorized: false
            }
        
        default:
            return state
    }
}