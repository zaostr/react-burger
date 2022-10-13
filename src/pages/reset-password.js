import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export const ResetPasswordPage = () => {
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
    <div>ResetPasswordPage</div>
  )
}
