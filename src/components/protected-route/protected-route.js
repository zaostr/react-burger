import { useEffect, useState } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useAuth } from '../../hooks/useAuth'
import { getCookie } from '../../utils/data';

export const ProtectedRoute = ({children, role, ...rest}) => {
    let {user, isAuthorized } = useSelector(store => store.auth);
    const {getUser} = useAuth();
    const [cookieState, setCookieState] = useState({
        access: getCookie('authToken'),
        refresh: getCookie('refreshToken')
    })

    const init = async () => {
        await getUser();
    };

    useEffect(() => {
        init();
    }, []);


    useEffect(() => {
        setCookieState({
            access: getCookie('authToken'),
            refresh: getCookie('refreshToken')
        })
    }, [user]);
    
    if ( !isAuthorized && cookieState.access !== undefined && cookieState.refresh !== undefined ) {
        return null
    }


    return (
        <Route 
            {...rest}
            render={({location}) => 
                (isAuthorized && user.role >= role) 
                ? (children)
                : (<Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}
                  />)
            }
        />
    )
}
