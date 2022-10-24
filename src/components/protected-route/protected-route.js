import { useEffect, useState } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useAuth } from '../../hooks/useAuth'
import { getCookie } from '../../utils/data';
import { NotFound404 } from '../../pages';

export const ProtectedRoute = ({children, role, ...rest}) => {
    const { user, isAuthorized } = useSelector(store => store.auth);
    const {getUser} = useAuth();
    const [cookieState, setCookieState] = useState({
        access: getCookie('authToken'),
        refresh: getCookie('refreshToken')
    })

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
    
    if ( !isAuthorized && cookieState.access !== undefined && cookieState.refresh !== undefined ) {
        return null
    }


    return (
        <Route 
            {...rest}
            render={({location}) => 
                ( isAuthorized ) 
                ? (user.role >= role ? (children) : <NotFound404 />)
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
