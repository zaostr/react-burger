import React, { useEffect, useState } from 'react'
import { Link, Redirect, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { LoginForm } from '../components/user/login-form/login-form'

import loginStyles from './css/login.module.css'
import { useSelector } from 'react-redux'

export const LoginPage = () => {
    // @ts-ignore
    const {isAuthorized} = useSelector(store => store.auth);
    const { getUser } = useAuth();
    const [shouldRedirect, setRedirect] = useState(isAuthorized);
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
        setRedirect(isAuthorized);
    }, [isAuthorized])

    if ( shouldRedirect ) {
        console.log(state?.from);
        return (
            <Redirect to={{
                pathname: state?.from?.pathname || '/',
                state: {
                    from: '/login',
                    action: state?.action === 'loginForOrder' ? 'makeOrder' : false
                } 
            }} />
        )
    }



  return (
    <main className={`${loginStyles.main} pl-5 pr-5`}>
        <div className={`${loginStyles.wrapper}`}>
            <p className="text text_type_main-medium mb-6">Вход</p>
            <div className='mb-20'>
                <LoginForm />
            </div>
            <p className='text text_type_main-default text_color_inactive mb-4'>
                <span className='mr-2'>Вы — новый пользователь?</span>
                <Link to='/register'>Зарегистрироваться</Link>
            </p>
            <p className='text text_type_main-default text_color_inactive'>
                <span className='mr-2'>Забыли пароль?</span>
                <Link to='/forgot-password'>Восстановить пароль</Link>
            </p>
        </div>
    </main>
  )
}
