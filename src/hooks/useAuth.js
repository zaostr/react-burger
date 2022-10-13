//import { createContext, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    authorizeUser,
    registerUser,
    AUTH_SIGN_OUT,
} from '../services/actions/auth'


/*const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
    const auth = useAuthProvider();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
}*/

export const useAuth = () => {
    const {isAuthorized, user} = useSelector(store => store.auth);
    const dispatch = useDispatch();

    console.log(user);


    const signIn = (form) => dispatch(authorizeUser(form));

    const signOut = () => dispatch({type: AUTH_SIGN_OUT});
    
    const register = (form) => dispatch(registerUser(form));

    return {
        user,
        isAuthorized,
        signIn,
        signOut,
        register
    }
}
