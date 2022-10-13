import { loginRequest, registerRequest, getUserRequest } from "../../utils/burger-api";

export const AUTH_SIGN_IN = 'AUTH_SIGN_IN';
export const AUTH_SIGN_OUT = 'AUTH_SIGN_OUT';
export const AUTH_REGISTER = 'AUTH_REGISTER';
//export const AUTH_SET_USER = 'AUTH_SET_USER';
export const AUTH_GET_USER = 'AUTH_GET_USER';
export const AUTH_FORGOT_PASSWORD = 'AUTH_FORGOT_PASSWORD';
export const AUTH_CHANGE_PASSWORD = 'AUTH_CHANGE_PASSWORD';
//export const AUTH_SET_AUTHORIZED = 'AUTH_SET_AUTHORIZED';

export function authorizeUser(form) {
    return function(dispatch) {
        loginRequest(form)
        .then(data => {
            console.log(data);
            dispatch({
                type: AUTH_SIGN_IN,
                payload: data.user
            });
        })
        .catch(err => {
            dispatch({type: AUTH_SIGN_OUT});
        });
    }
}
export function registerUser(form) {
    return function(dispatch) {
        registerRequest(form)
        .then(data => {
            if (data.success) {
                dispatch({
                    type: AUTH_SIGN_IN,
                    payload: data.user
                });
            } else {
                dispatch({type: AUTH_SIGN_OUT});
            }
        })
        .catch(err => {
            dispatch({type: AUTH_SIGN_OUT});
        });
    }
}
export function getUser(form) {
    return function(dispatch) {
        getUserRequest(form)
        .then(data => {
            if (data.success) {
                dispatch({
                    type: AUTH_SIGN_IN,
                    payload: data.user
                });
            } else {
                dispatch({type: AUTH_SIGN_OUT});
            }
        })
        .catch(err => {
            dispatch({type: AUTH_SIGN_OUT});
        });
    }
}