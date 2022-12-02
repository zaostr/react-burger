import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const LogoutPage = () => {
    const [result, setResult] = useState<boolean>(false);
    const {signOut} = useAuth();
    const logoutResult = async () => {
        const logout = await signOut();
        setResult(logout);
    }
    useEffect(() => {
        logoutResult();
    }, []);

    if (result) {
        return (<Redirect
            to={{
                pathname: '/login'
            }}
        />)
    }
    return (
        <></>
    )
}
