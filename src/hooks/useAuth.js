//import { createContext, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    authorizeUser,
    registerUser,
    AUTH_SIGN_OUT,
    AUTH_SIGN_IN,
    AUTH_REQUEST
} from '../services/actions/auth'
import { getUserRequest } from "../utils/burger-api";


/*const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
    const auth = useAuthProvider();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
}*/

export const useAuth = () => {
    //const {isAuthorized, user} = useSelector(store => store.auth);
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
                    let user = data.user;
                    dispatch({
                        type: AUTH_SIGN_IN,
                        payload: data.user
                    });
                    return user;
                } else {
                    dispatch({ type: AUTH_SIGN_OUT });
                    return false;
                }
            })
            .catch(err => {
                dispatch({
                    type: AUTH_REQUEST,
                    payload: false
                })
                dispatch({ type: AUTH_SIGN_OUT });
            });
    }

    const signIn = (form) => dispatch(authorizeUser(form));

    const signOut = () => dispatch({type: AUTH_SIGN_OUT});
    
    const register = (form) => dispatch(registerUser(form));

    return {
        getUser,
        signIn,
        signOut,
        register
    }
}
