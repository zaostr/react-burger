import { loginRequest, registerRequest } from "../../utils/burger-api";
import { setCookie } from "../../utils/data";

export const AUTH_SIGN_IN = 'AUTH_SIGN_IN';
export const AUTH_SIGN_OUT = 'AUTH_SIGN_OUT';
export const AUTH_REGISTER = 'AUTH_REGISTER';
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_GET_USER = 'AUTH_GET_USER';
export const AUTH_FORGOT_PASSWORD = 'AUTH_FORGOT_PASSWORD';
export const AUTH_CHANGE_PASSWORD = 'AUTH_CHANGE_PASSWORD';
//export const AUTH_SET_AUTHORIZED = 'AUTH_SET_AUTHORIZED';

export function authorizeUser(form) {
    return async function(dispatch) {
        return await loginRequest(form)
        .then(data => {
            if ( data.success ) {
                const authToken = data.accessToken.replace('Bearer ', '');
                setCookie('authToken', authToken, {path: '/', 'max-age': 1200});
                setCookie('refreshToken', data.refreshToken, {path: '/', 'max-age': 12000});
                dispatch({
                    type: AUTH_SIGN_IN,
                    payload: data.user
                });
                return data.success;
            } else {
                logoutUser();
                return data.message;
            }
        })
        .catch(err => {
            logoutUser();
            return err.message;
        });
    }
}
export function logoutUser() {
    return function(dispatch) {
        return dispatch({type: AUTH_SIGN_OUT});
    }
}
export function registerUser(form) {
    return async function(dispatch) {
        return await registerRequest(form)
        .then(data => {
            if ( data.success ) {
                const authToken = data.accessToken.replace('Bearer ', '');
                setCookie('authToken', authToken, {path: '/', 'max-age': 1200});
                setCookie('refreshToken', data.refreshToken, {path: '/', 'max-age': 12000});
                dispatch({
                    type: AUTH_SIGN_IN,
                    payload: data.user
                });
                return true;
            } else {
                logoutUser();
                return data.message;
            }
        })
        .catch(err => {
            logoutUser();
            return err.message;
        });
    }
}
