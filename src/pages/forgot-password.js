import { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { ForgotPasswordForm } from '../components/forgot-form/forgot-form'

import loginStyles from './css/login.module.css'

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
    <main className={`${loginStyles.main} pl-5 pr-5`}>
        <div className={`${loginStyles.wrapper}`}>
            <p className="text text_type_main-medium mb-6">Восстановление пароля</p>
            <div className='mb-20'>
                <ForgotPasswordForm />
            </div>
            <p className='text text_type_main-default text_color_inactive'>
                <span className='mr-2'>Вспомнили пароль?</span>
                <Link to='/login'>Войти</Link>
            </p>
        </div>
    </main>
  )
}