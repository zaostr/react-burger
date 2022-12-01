import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const LogoutPage = () => {
    const [result, setResult] = useState(false);
    const {signOut} = useAuth();

    useEffect(() => {
        const logout = signOut();
        setResult(logout);
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
