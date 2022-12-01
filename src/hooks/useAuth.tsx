import { useDispatch } from "react-redux";
import {
    authorizeUser,
    registerUser,
    AUTH_SIGN_IN,
    AUTH_REQUEST,
    logoutUser
} from '../services/actions/auth'
import { getUserRequest } from "../utils/burger-api";


export const useAuth = () => {
    const dispatch = useDispatch();

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
                    // @ts-ignore
                    dispatch(logoutUser());
                    return false;
                }
            })
            .catch(err => {
                dispatch({
                    type: AUTH_REQUEST,
                    payload: false
                })
                // @ts-ignore
                dispatch(logoutUser());
            });
    }

    // @ts-ignore
    const signIn = (form): boolean | string => dispatch(authorizeUser(form));

    // @ts-ignore
    const signOut = (): boolean => dispatch(logoutUser());

    // @ts-ignore
    const register = (form): true | string => dispatch(registerUser(form));

    return {
        getUser,
        signIn,
        signOut,
        register
    }
}
