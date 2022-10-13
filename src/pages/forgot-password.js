import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export const ForgotPasswordPage = () => {
    const {isAuthorized} = useAuth();
    const [shouldRedirect, setRedirect] = useState(isAuthorized);

    useEffect(() => {
        setRedirect(isAuthorized);
    }, [isAuthorized])

    if ( shouldRedirect ) {
        return (
            <Redirect to={{
                pathname: '/'
            }} />
        )
    }
  return (
    <div>ForgotPassword</div>
  )
}
