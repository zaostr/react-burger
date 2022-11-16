import { useEffect, useState } from 'react'
import { Link, Redirect, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAuth } from '../hooks/useAuth'
import { ResetPasswordForm } from '../components/user/reset-password-form/reset-password-form'
import { getCookie } from '../utils/data';

import loginStyles from './css/login.module.css'

export const ResetPasswordPage = () => {
    // @ts-ignore
    const isAuthorized = useSelector(store => store.auth.isAuthorized);
    const { getUser } = useAuth();
    const {state} = useLocation<Location & {
        from?: Location;
    }>();
    const [shouldRedirect, setRedirect] = useState(isAuthorized);
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
        setRedirect(isAuthorized);
        setCookieState({
            access: getCookie('authToken'),
            refresh: getCookie('refreshToken')
        })
    }, [isAuthorized])

    if ( shouldRedirect || state.from?.pathname !== '/forgot-password' ) {
        return (
            <Redirect to={{
                pathname: '/'
            }} />
        )
    }
    
    if ( !isAuthorized && cookieState.access !== undefined && cookieState.refresh !== undefined ) {
        return null
    }

  return (
    <main className={`${loginStyles.main} pl-5 pr-5`}>
        <div className={`${loginStyles.wrapper}`}>
            <p className="text text_type_main-medium mb-6">Восстановление пароля</p>
            <div className='mb-20'>
                <ResetPasswordForm />
            </div>
            <p className='text text_type_main-default text_color_inactive'>
                <span className='mr-2'>Вспомнили пароль?</span>
                <Link to='/login'>Войти</Link>
            </p>
        </div>
    </main>
  )
}
