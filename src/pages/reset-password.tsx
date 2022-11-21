
import { Link, Redirect, useLocation } from 'react-router-dom'
import { ResetPasswordForm } from '../components/user/reset-password-form/reset-password-form'

import loginStyles from './css/login.module.css'

export const ResetPasswordPage = () => {
    const {state} = useLocation<Location & {
        from?: Location;
    }>();

    if ( state?.from?.pathname !== '/forgot-password' ) {
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
