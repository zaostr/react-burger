import {
    authorizeUser,
    registerUser,
    AUTH_SIGN_IN,
    AUTH_REQUEST,
    logoutUser
} from '../services/actions/auth'
import { getUserRequest } from "../utils/burger-api";
import { TLoginForm, TRegisterForm } from '../utils/types';
import { useAppDispatch } from "./redux";


export const useAuth = () => {
    const dispatch = useAppDispatch();

    const getUser = async () => {
        dispatch({
            type: AUTH_REQUEST,
            payload: true
        })
        return await getUserRequest()
            .then(data => {
                dispatch({
                    type: AUTH_REQUEST,
                    payload: false
                })
                if (data.success) {
                    const user = data.user;
                    dispatch({
                        type: AUTH_SIGN_IN,
                        payload: data.user
                    });
                    return user;
                } else {
                    dispatch(logoutUser());
                    return false;
                }
            })
            .catch(err => {
                dispatch({
                    type: AUTH_REQUEST,
                    payload: false
                })
                dispatch(logoutUser());
            });
    }

    const signIn = async (form: TLoginForm) => {
        const dispResult = await dispatch(authorizeUser(form));
        return (typeof dispResult === 'string') ? String(dispResult) : true;
    };

    const signOut = async () => {
        const dispResult = dispatch(logoutUser());
        return (typeof dispResult === 'string') ? false : true;
    };

    const register = async (form: TRegisterForm) => {
        const dispResult = dispatch(registerUser(form));
        return (typeof dispResult === 'string') ? String(dispResult) : true;
    };

    return {
        getUser,
        signIn,
        signOut,
        register
    }
}
