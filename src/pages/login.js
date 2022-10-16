import React, { useEffect, useState } from 'react'
import { Link, Redirect, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { LoginForm } from '../components/login-form/login-form'

import loginStyles from './css/login.module.css'
import { useSelector } from 'react-redux'

export const LoginPage = () => {
    const {isAuthorized} = useSelector(store => store.auth);
    const [shouldRedirect, setRedirect] = useState(isAuthorized);
    const {state} = useLocation();

    useEffect(() => {
        setRedirect(isAuthorized);
    }, [isAuthorized])


    if ( shouldRedirect ) {
        return (
            <Redirect to={ state?.from || '/' } />
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
