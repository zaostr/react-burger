import React, { useEffect, useState } from 'react'
import { Redirect, Route, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useAuth } from '../../hooks/useAuth'
import { getCookie } from '../../utils/data';

export const ProtectedRoute = ({children, onlyAuth, ...rest} : {
    children: React.ReactNode;
    path: string;
    onlyAuth: boolean;
    exact: boolean;
}) => {
    // @ts-ignore
    const { user, isAuthorized } = useSelector(store => store.auth);
    const {getUser} = useAuth();
    const [cookieState, setCookieState] = useState({
        access: getCookie('authToken'),
        refresh: getCookie('refreshToken')
    })
    const {state} = useLocation<Location & {
        from?: {
            pathname: string;
            search: string;
            hash: string;
            key: string;
        };
        action?: string;
    }>();

    const init = async () => {
        await getUser();
    };

    /* eslint-disable */
    useEffect(() => {
        init();
    }, []);
    /* eslint-enable */

    useEffect(() => {
        setCookieState({
            access: getCookie('authToken'),
            refresh: getCookie('refreshToken')
        })
    }, [user]);

    
    if ( !isAuthorized && cookieState.refresh !== undefined ) {
        return null
    }


    return (
        <Route 
            {...rest}
            render={({location}) => 
            ( isAuthorized )
            ? ( (onlyAuth) ? (children) : (
                <Redirect
                to={{
                    pathname: state?.from?.pathname || '/',
                    state: { from: location }
                }}
              />) )
            : ( (onlyAuth) ? (
                <Redirect
                to={{
                    pathname: '/login',
                    state: { from: location }
                }}
              />) : (children) )
            }
        />
    )
}
