import { loginRequest, registerRequest } from "../../utils/burger-api";
import { deleteCookie, setCookie } from "../../utils/data";
import { TLoginForm, TRegisterForm, TUserData } from "../../utils/types";
import { AppDispatch, AppThunk } from "../types";

export const AUTH_SIGN_IN:'AUTH_SIGN_IN' = 'AUTH_SIGN_IN';
export const AUTH_SIGN_OUT:'AUTH_SIGN_OUT' = 'AUTH_SIGN_OUT';
//export const AUTH_REGISTER:'AUTH_REGISTER' = 'AUTH_REGISTER';
export const AUTH_REQUEST:'AUTH_REQUEST' = 'AUTH_REQUEST';
//export const AUTH_GET_USER:'AUTH_GET_USER' = 'AUTH_GET_USER';
//export const AUTH_FORGOT_PASSWORD:'AUTH_FORGOT_PASSWORD' = 'AUTH_FORGOT_PASSWORD';
//export const AUTH_CHANGE_PASSWORD:'AUTH_CHANGE_PASSWORD' = 'AUTH_CHANGE_PASSWORD';
//export const AUTH_SET_AUTHORIZED = 'AUTH_SET_AUTHORIZED';

export interface IUserData {
    readonly type: typeof AUTH_SIGN_IN;
    readonly payload: TUserData;
}
/*export interface IAuthorizeUser {
    readonly type: typeof AUTH_SIGN_IN;
    readonly payload: TLoginForm;
}*/
export interface ILogoutUser {
    readonly type: typeof AUTH_SIGN_OUT;
}
export interface IRequestUser {
    readonly type: typeof AUTH_REQUEST;
    readonly payload: boolean;
}

export type TAuthActions = ILogoutUser | IRequestUser | IUserData;

export const authorizeUser = (form: TLoginForm) => async (dispatch: AppDispatch) => {
    return await loginRequest(form)
        .then((data): boolean | string => {
            if ( data.success ) {
                const authToken = data.accessToken.replace('Bearer ', '');
                setCookie('authToken', authToken, {path: '/', 'max-age': 1200});
                setCookie('refreshToken', data.refreshToken, {path: '/'});
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

export const logoutUser = () => (dispatch: AppDispatch) => {
    dispatch({type: AUTH_SIGN_OUT});
    deleteCookie('authToken');
    deleteCookie('refreshToken');
    return true;
}


export const registerUser = (form: TRegisterForm) => async (dispatch: AppDispatch) => {
    return await registerRequest(form)
        .then((data): boolean | string => {
            if ( data.success ) {
                const authToken = data.accessToken.replace('Bearer ', '');
                setCookie('authToken', authToken, {path: '/', 'max-age': 1200});
                setCookie('refreshToken', data.refreshToken, {path: '/'});
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
