import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth'

export const ProtectedRoute = ({children, role, ...rest}) => {
    let {user, isAuthorized} = useAuth();

    return (
        <Route 
            {...rest}
            render={({location}) => 
                (isAuthorized && user.role >= role) 
                ? (children)
                : (<Redirect
                    to={{
                        pathname: '/login',
                        state: {from: location}
                    }}
                  />)
            }
        />
    )
}
