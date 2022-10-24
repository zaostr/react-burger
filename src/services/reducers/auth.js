import {
    AUTH_SIGN_IN,
    AUTH_SIGN_OUT,
    AUTH_REQUEST
    //AUTH_REGISTER,
    //AUTH_GET_USER,
    //AUTH_FORGOT_PASSWORD,
    //AUTH_CHANGE_PASSWORD
} from '../actions/auth';

const authState = {
    isAuthorized: false,
    user: false,
    request: false
}
/*const authState = {
    isAuthorized: true,
    user: {
        username: 'da',
        role: 1
    }
}*/

export const authReducer = (state = authState, action) => {
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
                    role: action.payload.role ? action.payload : 1
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